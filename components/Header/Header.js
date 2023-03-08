import { Container } from "@mui/material";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";
import ChooseWallet from "../ChooseWallet/ChooseWallet";
import { Goerli, useEthers } from "@usedapp/core";

const Header = () => {
  //
  //
  const [stickyClass, setStickyClass] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //
  //
  const ConnectButton = () => {
    const { account, deactivate, activateBrowserWallet } = useEthers();

    if (account) {
      return (
        <button className={classes.connect_button} onClick={() => deactivate()}>
          Disconnect
        </button>
      );
    } else {
      return (
        <button className={classes.connect_button} onClick={handleClickOpen}>
          Connect Wallet
        </button>
      );
    }
  };

  //

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  return (
    // <Container>
    <>
      <div
        className={stickyClass ? classes.sticky_header : classes.navbar_header}
      >
        <div className={classes.header_toolbar}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={1000}
            style={{ cursor: "pointer" }}
          >
            <Image
              className={classes.logo_img}
              src="/logo.svg"
              alt="logo"
              width={278}
              height={32}
            />
          </Link>

          <ConnectButton />
        </div>
      </div>
      <ChooseWallet open={open} handleClose={handleClose} />
    </>
    // </Container>
  );
};

export default Header;
