import { Container } from "@mui/material";
import Image from "next/image";
import classes from "./HeroBanner.module.scss";

import { Link } from "react-scroll";
import { useEthers } from "@usedapp/core";
import { useClaimName, useNumberOfClaims } from "../../hooks/hooks";
import DiscordDialog from "../DiscordDialog/DiscordDialog";
import { useCallback, useEffect, useState } from "react";
import ChooseWallet from "../ChooseWallet/ChooseWallet";
import ClaimAmount from "../ClaimAmount/ClaimAmount";

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const { account, isLoading } = useEthers();
  const claims = useNumberOfClaims(account);
  let { send } = useClaimName();

  const [chooseWalletOpen, setChooseWalletOpen] = useState(false);

  const handleChooseWalletOpen = () => {
    setChooseWalletOpen(true);
  };

  const handleCloseChooseWalletOpen = () => {
    setChooseWalletOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //

  // const handleSubmit = useCallback(() => {
  //   const loading = account && typeof claims === "undefined";

  //   if (!isLoading && loading) {
  //     handleClickOpen();
  //   }
  // }, [claims, account, isLoading]);

  // useEffect(() => {
  //   handleSubmit();
  // }, [handleSubmit]);

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
        <ClaimAmount handleClickOpen={handleClickOpen} />
        <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className={classes.scroll_down}
        >
          <Image
            src="/Subtract.svg"
            alt="keyboard_arrow_down"
            width={40}
            height={26}
          />
        </Link>
        <DiscordDialog open={open} handleClose={handleClose} />
        <ChooseWallet
          open={chooseWalletOpen}
          handleClose={handleCloseChooseWalletOpen}
        />
      </div>
    </Container>
  );
};

export default HeroBanner;
