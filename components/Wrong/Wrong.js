/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import classes from "./Wrong.module.scss";

export default function Wrong({ open, handleClose }) {
  //

  const handleConnectWallet = () => {
    handleClose();
  };
  //
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#1F1F23",
            boxShadow: "none",
            maxWidth: "60vw",
          },
        }}
      >
        <DialogContent className={classes.dialog_title}>
          <h2>Something is wrong, pelase try again</h2>
          <button className={classes.discord} onClick={handleConnectWallet}>
            Ok
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
