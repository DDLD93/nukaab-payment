import {
  TypographyProps,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
  Badge,
  IconButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useStore from "../../store";

const LI = styled(Typography)<TypographyProps>(({ theme }) => ({
  listStyle: "none",
  textDecoration: "none",
  color: theme.palette.secondary.main,
  fontSize: 18,
  cursor: "pointer",
  transitionDelay: "200ms",
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
}));

function NavbarPrivate() {
  const theme = useTheme();
  const smallscrn = useMediaQuery(theme.breakpoints.up("lg"));
  const {dashboardRoute,collabeNavbar,setCollabeNavbar}= useStore()

  return (
    <Grid
      container
      flexWrap={"nowrap"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      p={3}
      component={"nav"}
    >
      {!smallscrn && !collabeNavbar &&
        <svg
          onClick={()=>setCollabeNavbar(true)}
          viewBox="0 0 100 80"
          width="40"
          height="40"
          style={{
            border: "0.5px solid  #ffffff3d",
            paddingTop: 5,
            paddingLeft: 5,
            paddingRight: 5,
            display: "flex",
            justifyContent: "center",
            cursor:"pointer"
          }}
        >
          <rect width="100" height="5" fill="#bcc0ea"></rect>
          <rect y="30" width="100" height="5" fill="#bcc0ea"></rect>
          <rect y="60" width="100" height="5" fill="#bcc0ea"></rect>
        </svg>}

      <Grid
        container
        height={15}
        gap={4}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <IconButton size="large">
          <Badge
            sx={{
              fontSize: 1,
            }}
            badgeContent={17}
            color="info"
          >
            <NotificationsNoneIcon sx={{
                color:"#000"
            }} />
          </Badge>
        </IconButton>
        {smallscrn && <Badges userName={"abdul adhan"} />}
      </Grid>
    </Grid>
  );
}

export default NavbarPrivate;

const Badges = ({ userName }:any) => {
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: (theme: { palette: { primary: { main: any; }; }; }) => theme.palette.primary.main,
        color: "#fff",
        p: 0.2,
      },
      children: `${name.split(" ")[0][0].toLocaleUpperCase()}${name
        .split(" ")[1][0]
        .toLocaleUpperCase()}`,
    };
  }
  return (
    <Stack alignItems={"center"} direction="row" spacing={2}>
      <Avatar sizes="large" {...stringAvatar(userName)} />
      <Typography fontWeight={500} fontSize={18}>{userName.replace(/(^\w|\s\w)/g, (m: string) => m.toUpperCase())}</Typography>
    </Stack>
  );
};
