import { TypographyProps, Grid, styled, useMediaQuery , useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
const LI = styled(Typography)<TypographyProps>(({ theme }) => ({
  listStyle: "none",
  textDecoration: "none",
  color: theme.palette.secondary.main,
  fontSize: 18,
  cursor: "pointer",
  transitionDelay: "200ms",
  "&:hover": {
    color: "#fff",
    textDecoration:"underline"
  },
}));

function NavbarPublic() {
  const theme = useTheme();
  const smallscrn = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      flexWrap={"nowrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={3}
      bgcolor={(theme) => theme.palette.primary.main}
      color="#fff"
      component={"nav"}
    >
      <Typography variant="h4">Nukaab</Typography>
    {!smallscrn?<svg viewBox="0 0 100 80" width="40" height="40" style={{
      border: "0.5px solid  #ffffff3d",
      paddingTop:5,
      paddingLeft:5,
      paddingRight:5,
      display:"flex",
      justifyContent:"center"
    }} >
      <rect width="100" height="5" fill="#bcc0ea"></rect>
      <rect y="30" width="100" height="5" fill="#bcc0ea"></rect>
      <rect y="60" width="100" height="5" fill="#bcc0ea" ></rect>
    </svg>:
    <Grid
      container
      height={15}
      gap={4}
      justifyContent={"flex-end"}
      alignItems={"center"}
      component={"ul"}
    >
      <LI>
        <Link href="#" >Home</Link> 
      </LI>
      <LI>
        Product
      </LI>
      <LI>
        About
      </LI>
      <LI>
      <Link href="/auth/login" >Login</Link> 
      </LI>
      <LI>
      <Link href="/auth/register" >Create Account</Link> 
      </LI>
    </Grid>}
    </Grid>
  );
}

export default NavbarPublic;