import { Box, Grid, TextField, Typography } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import useStore from "../../../store/index";
import { styled } from "@mui/material/styles";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Link from "next/link";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useState } from "react";

const LoadinButton = styled(LoadingButton)<LoadingButtonProps>(({ theme }) => ({
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

function Register() {
  const [passwordError, setpasswordError] = useState(false);
  const [passwordErrorMessage, setpasswordErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        setIsLoading(false);
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
        setIsLoading(false);
      });
  }
  return (
    <Grid
      height={"100vh"}
      gap={2}
      container
      flexDirection={"column"}
      flexWrap={"nowrap"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        padding:"20px 10px"
      }}
    >
      <Typography variant="h4">Nukaab</Typography>
      <Typography
        fontSize={23}
        fontWeight={600}
        color={(theme) => theme.palette.primary.main}
      >
        Create your Nukaab account
      </Typography>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          boxShadow: " 0 4px 8px 0 rgb(131 137 160 / 20%)",
          backgroundColor: "#fff",
          borderRadius: "12px",
          maxWidth: 600,
          padding:3,
          maxHeight: "570px",
        }}
      >
        <Grid
          component={"form"}
          container
          sx={{
            "& .MuiTextField-root": { m: 1, width: 250 },
            justifyContent: "center",
            flexDirection: "column",
            gap: "25px",
            width: "100%",
          }}
          onSubmit={handleSubmit}
          onChange={handleChange}
          autoComplete="off"
        >
          <Grid container>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              type="text"
              required
              label="First Name"
              variant="standard"
            />
          </Grid>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              required
              type="text"
              label="Last Name"
              variant="standard"
            />
          </Grid>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              required
              type="email"
              error={emailError}
              helperText={emailErrorMessage}
              label="Email"
              variant="standard"
            />
          </Grid>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              required
              type="tel"
              label="Phone Number"
              variant="standard"
            />
          </Grid>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              required
              type="password"
              error={passwordError}
              helperText={passwordErrorMessage}
              label="Password"
              variant="standard"
            />
          </Grid>
          <Grid item sm={12} xs={12} lg={6} md={6}>
            <TextField
              fullWidth
              required
              type="password"
              error={passwordError}
              helperText={passwordErrorMessage}
              label="Confirm Password"
              variant="standard"
            />
          </Grid>
          </Grid>
          
          <LoadinButton
            disableElevation
            disableTouchRipple
            sx={{
              ".MuiLoadingButton-root": {
                backgroundColor: "#FFF",
              },
            }}
            type="submit"
            loading={isLoading}
            loadingIndicator={"Create Account..."}
          >
            Create Account
          </LoadinButton>
          <Typography textAlign={"center"}>
            Already have an Account?{" "}
            <Typography
              fontWeight={600}
              color={(theme) => theme.palette.primary.main}
              component="span"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Link href="/auth/login">Login</Link>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Register;
