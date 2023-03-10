import { Container } from "@mui/material";
import Image from "next/image";
import classes from "./HeroBanner.module.scss";

import { useEthers } from "@usedapp/core";
import { useClaimName, useNumberOfClaims } from "../../hooks/hooks";
import DiscordDialog from "../DiscordDialog/DiscordDialog";
import { useEffect, useState } from "react";
import ChooseWallet from "../ChooseWallet/ChooseWallet";
import ClaimAmount from "../ClaimAmount/ClaimAmount";
import MintingProgress from "../MintingProgress/MintingProgress";
import Wrong from "../Wrong/Wrong";

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const [wrongOpen, setWrongOpen] = useState(false);
  const [chooseWalletOpen, setChooseWalletOpen] = useState(false);
  const [mintingOpen, setMintingOpen] = useState(false);

  const {
    account,
    isLoading,
    error: connectionError,
    deactivate,
  } = useEthers();
  let { send, isLoading: claimLoading, error } = useClaimName();
  const claims = useNumberOfClaims(account);

  const handleChooseWalletOpen = () => {
    setChooseWalletOpen(true);
  };

  const handleCloseChooseWalletOpen = () => {
    setChooseWalletOpen(false);
  };

  const handleClickOpen = () => {
    const loading = account && typeof claims === "undefined";

    if (!connectionError && !isLoading && loading) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWrongWindowClose = () => {
    setWrongOpen(false);
    // activateBrowserWallet();
  };

  useEffect(() => {
    if (claimLoading) setMintingOpen(true);
  }, [claimLoading]);

  useEffect(() => {
    if (error) {
      setWrongOpen(true);
      deactivate();
    }
    return () => {};
  }, [error, deactivate]);

  //
  //

  return (
    <Container id="hero">
      <div className={classes.hero_container}>
        <h1>
          Spread the culture.
          <br />
          Join the <span>Nounish Club.</span>
        </h1>
        <p>
          The Nounish Club includes all the NNS numbers from 0 to 9999. 10k
          names which will be distributed to anyone, for free.
        </p>

        <button
          className={classes.claim}
          onClick={() => {
            if (!account) {
              handleChooseWalletOpen();
            }
            if (account && !isLoading) {
              send();
            }
          }}
        >
          Claim
        </button>
        <ClaimAmount
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <button
          className={classes.scroll_down}
          onClick={() => {
            if (!account) {
              handleChooseWalletOpen();
            }
            if (account && !isLoading) {
              send();
            }
          }}
        >
          <Image
            src="/Subtract.svg"
            alt="keyboard_arrow_down"
            width={40}
            height={26}
          />
        </button>
        <DiscordDialog open={open} handleClose={handleClose} />
        <ChooseWallet
          open={chooseWalletOpen}
          handleClose={handleCloseChooseWalletOpen}
        />
        {!error && (
          <MintingProgress
            open={mintingOpen}
            handleClose={() => setMintingOpen(false)}
          />
        )}
        <Wrong open={wrongOpen} handleClose={handleWrongWindowClose} />
      </div>
    </Container>
  );
};

export default HeroBanner;
