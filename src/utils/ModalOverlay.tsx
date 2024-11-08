import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material";

const CancelButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#b4cbe3",
  color: "white",
});
const SaveButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#f44336",
  color: "white",
});

interface iOverlay {
  open: boolean;
  close: () => void;
  body: JSX.Element;
}

const ModalOverlay = ({ open, close, body }: iOverlay) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={"md"}
        scroll="paper"
        sx={{ borderRadius: "8px" }}
      >
        <DialogTitle id="alert-dialog-title">Create new Task</DialogTitle>
        <DialogContent>{body}</DialogContent>
        <DialogActions>
          <CancelButton onClick={close}>Cancel</CancelButton>
          <SaveButton onClick={close} autoFocus>
            Save
          </SaveButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalOverlay;
