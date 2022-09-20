import { Divider, Grid, Typography } from '@mui/material';
import routes from '../../../../routes';
import { useRouter } from 'next/router'
import useStore from '../../../../store';


function SideNav() {
  const router = useRouter()
  const {dashboardRoute,setDashboardRoute,setCollabeNavbar}= useStore()

  const NavLink = ({ icon, path }: any) => {
    return (
      <Grid
      onClick={()=>{
        setDashboardRoute(path);
        setCollabeNavbar(false)
      }}
        container
        gap={2}
        alignItems={"center"}
        sx={{
          padding: "11px 7px",
          color: dashboardRoute==path?"#000" :(theme) => theme.palette.primary.contrastText,
          backgroundColor:dashboardRoute==path?"#fff" :(theme) => theme.palette.primary.main,
          borderRadius: "5px",
          cursor: "pointer",
          transitionDuration:"250ms",
          "&:hover": {
            color: dashboardRoute!=path? "#fff":null,
            backgroundColor:dashboardRoute!=path? (theme) => theme.palette.primary.light:null,
          },
          "&:active": {
            color: "#000",
            backgroundColor:"#fff",
          },
        }}
      >
        {icon} <Typography>{path}</Typography>{" "}
      </Grid>
    );
  };
  function getRoutes(routes:any) {
   return (routes.map((route: {
     [x: string]: any; key: any; path: any; icon: any; 
})=>{
      return(
        <NavLink key={route.key} path={route.name} icon={route.icon} />
      )
    }))
  }
  return (
    <Grid
    item
    flex={2}
    sx={{
      height: "100%",
      backgroundColor: (theme) => theme.palette.primary.main,
      borderRadius: "5px 0px 0px 5px",
    }}
  >
    <Typography m={4} textAlign={"center"}>
      Nukaab
    </Typography>
    <Divider variant="middle" />
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      gap={3}
      sx={{
        padding: "12px 15px",
      }}
    >
     {getRoutes(routes)} 
    </Grid>
  </Grid>
  )
}
export default SideNav

