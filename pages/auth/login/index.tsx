import { Box, Grid, TextField, Typography } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import useStore from "../../../store/index";
import { styled } from "@mui/material/styles";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Link from "next/link";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";

const LoginButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
  padding: " 11px 10px",
  backgroundColor: theme.palette.primary.main,
  marginTop: 15,
  borderColor: theme.palette.secondary.main,
  borderRadius: "6px",
  minWidth: 250,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

function Login() {
  const [passwordError, setpasswordError] = useState(false);
  const [passwordErrorMessage, setpasswordErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const { user, setUser } = useStore();

  function handleChange(e: any) {
    if (e.target.type == "password") {
      setpasswordError(false);
      setpasswordErrorMessage("");
    }
    if (e.target.type == "email") {
      setEmailError(false);
      setEmailErrorMessage("");
    }
  }

  function handleSubmit(e: any) {
    setIsLoading(true)
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password") {
          setpasswordError(true);
          setpasswordErrorMessage(error.code.split("/")[1]);
        }
        if (error.code == "auth/user-not-found") {
          setEmailError(true);
          setEmailErrorMessage(error.code.split("/")[1]);
        }
        setIsLoading(false)
      });
  }
  return (
    <Grid
      height={"100vh"}
      gap={2}
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <button onClick={() => signOut(auth)}>signout</button>
      <Typography variant="h4">Nukaab</Typography>
      <Typography
        fontSize={23}
        fontWeight={600}
        color={(theme) => theme.palette.primary.main}
      >
        Login to your Nukaab account
      </Typography>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          boxShadow: " 0 4px 8px 0 rgb(131 137 160 / 20%)",
          backgroundColor: "#fff",
          borderRadius: "12px",
          width: 400,
          height: 400,
        }}
      >
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: 250 },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "25px",
          }}
          onSubmit={handleSubmit}
          onChange={handleChange}
          autoComplete="off"
        >
          <TextField
            fullWidth
            error={emailError}
            type="email"
            required
            label="Email"
            variant="standard"
            helperText={emailErrorMessage}
          />
          <TextField
            fullWidth
            required
            type="password"
            error={passwordError}
            helperText={passwordErrorMessage}
            label="Password"
            variant="standard"
          />
          <LoginButton
          disableElevation
          disableTouchRipple
          sx={{
            ".MuiLoadingButton-root" :{
                backgroundColor: "#FFF"
              }
          }}
          type="submit" loading={isLoading} loadingIndicator={"Login..."}>
            login
          </LoginButton>
          <Typography textAlign={"center"}>
            Dont have an Account?{" "}
            <Typography
              fontWeight={600}
              color={(theme) => theme.palette.primary.main}
              component="span"
              sx={{
                '&:hover':{
                    textDecoration:"underline"
                }
              }}
            >
              <Link href="/auth/register">Register</Link>
            </Typography>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
