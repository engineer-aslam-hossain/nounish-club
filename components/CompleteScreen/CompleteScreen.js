import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import classes from "./CompleteScreen.module.scss";
import Image from "next/image";
import { Box, Container } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CompleteScreen = ({ open, handleClose }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          backgroundColor: "#000000",
          boxShadow: "none",
        },
      }}
    >
      <Container>
        <AppBar
          sx={{ position: "relative", boxShadow: "none", padding: "1rem 0" }}
          color="transparent"
        >
          <Toolbar>
            <Image
              className={classes.logo_img}
              src="/logo.svg"
              alt="logo"
              width={278}
              height={32}
            />
            <Box sx={{ flexGrow: "1" }} />
          </Toolbar>
        </AppBar>
        <div className={classes.choose_wallet_container}>
          <h2>
            Your Number in <span>Nounish Club</span>
          </h2>
          <h3>245⌐◨-◨ to 9999⌐◨-◨</h3>
          <div className={classes.wallet_card_deck}>
            <Image
              src="/nounish.gif"
              width={317}
              height={317}
              alt="animated_gif"
            />
            <button className={classes.discord} onClick={handleClose}>
              Manage
            </button>
          </div>
        </div>
      </Container>
    </Dialog>
  );
};

export default CompleteScreen;
