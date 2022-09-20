import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const NButton = styled(Button,{shouldForwardProp:(prop)=> prop != "variant" })<ButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: "#fff",
  padding: " 15px 30px",
  borderColor: theme.palette.secondary.main,
  borderRadius: "12px",
  fontFamily: "Airbnb Cereal App",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "20.0622px",
  lineHeight: "22px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));


export default NButton;