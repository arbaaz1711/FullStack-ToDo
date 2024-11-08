import { InputLabel, styled, TextField } from "@mui/material";
import ModalOverlay from "../utils/ModalOverlay";
import { useState } from "react";

interface TaskOverlay {
  open: boolean;
  close: () => void;
}

const ModalWrapper = styled("div")({
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
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

const AddTaskModal = ({ open, close }: TaskOverlay) => {
//   const [taskData, setTaskData] = useState({
//     taskName: "",
//     taskDescription: "",
//     taskComplteness: "",
//   });
  return (
    <div>
      <ModalOverlay
        open={open}
        close={close}
        body={
          <ModalWrapper>
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
          </ModalWrapper>
        }
      />
    </div>
  );
};

export default AddTaskModal;
