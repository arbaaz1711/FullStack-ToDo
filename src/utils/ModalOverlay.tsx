import { Modal, styled, Typography } from "@mui/material";

const Wrapper = styled("div")({
  width: "100%",
});

const TextContainer = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "grey",
  border: "2px solid #000",
  padding: 4,
});

interface iOverlay {
  open: boolean;
  close: () => void;
}

const ModalOverlay = ({ open, close }: iOverlay) => {
  return (
    <Wrapper>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TextContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </TextContainer>
      </Modal>
    </Wrapper>
  );
};

export default ModalOverlay;
