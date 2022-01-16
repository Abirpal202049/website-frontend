import React from "react";
import { Dialog, DialogContent } from "@mui/material";

const PopUp = (props) => {
  const { onClose, selectedValue, children, openPopup } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog open={openPopup} onClose={handleClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default PopUp;
