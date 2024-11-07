import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { InputLabel, styled, TextField } from "@mui/material";

const Root = styled("div")({
  width: "100%",
});

const Wrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  width: "50%",
  gap: "20px",
});

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "40px", // Adjust the height of the input field
  },
  "& .MuiOutlinedInput-root": {
    height: "40px", // Ensure the overall height is respected
  },
  "& input": {
    height: "40px", // Target the input element itself
    padding: "0 14px", // Optional: Adjust padding to center text vertically
  },
});

interface iOverlay {
  open: boolean;
  close: () => void;
}

const ModalOverlay = ({ open, close }: iOverlay) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width: "80%" }}
      >
        <DialogTitle id="alert-dialog-title">Create new Task</DialogTitle>
        <DialogContent>
          {/* <Wrapper> */}
          <div>
            <InputLabel>Task name</InputLabel>
            <CustomTextField fullWidth id="taskName" variant="outlined" />
          </div>
          <div>
            <InputLabel>Description</InputLabel>
            <CustomTextField fullWidth id="description" variant="outlined" />
          </div>
          <div>
            <InputLabel>Completion percentage</InputLabel>
            <CustomTextField fullWidth id="complete" variant="outlined" />
          </div>
          {/* </Wrapper> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Disagree</Button>
          <Button onClick={close} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalOverlay;
