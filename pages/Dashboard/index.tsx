import { Button, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import NavbarPrivate from "../../components/navbar/navbarPrivate";
import useStore from "../../store";
import SideNav from "./components/sideNav";

function Dashboard() {
  const {dashboardRoute,collabeNavbar,setCollabeNavbar}= useStore()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    setCollabeNavbar(matches)
   }, [matches])
  
  return (
    <div>
      <Grid p={2} height={"100vh"} container>
       {collabeNavbar && <SideNav />}
        <Grid
          item
          flex={9}
          sx={{
            height: "100%",
          }}
        >
          <NavbarPrivate />
          <Grid p={5} gap={3} justifyContent={"space-between"} container>
          {dashboardRoute}
          {dashboardRoute}
          test
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
