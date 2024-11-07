import { Button } from "@mui/material";

interface iButton {
  children: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ children, handleClick }: iButton) => {
  return (
    <div>
      <Button onClick={handleClick}>{children}</Button>
    </div>
  );
};

export default CustomButton;
