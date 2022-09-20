import Icon from "@mui/material/Icon";
import Home from "./pages/Dashboard/pages/home";
import Settings from "./pages/Dashboard/pages/settings";
import Transaction from "./pages/Dashboard/pages/transaction";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import SwapVertSharpIcon from '@mui/icons-material/SwapVertSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp';


const routes = [
    {
        name:"Home",
        path:"/",
        icon: <DashboardSharpIcon/>,
        component: <Home />,
    },
    {
        name:"Airtime",
        path:"/",
        icon: <PermPhoneMsgSharpIcon/>,
        component: <Settings />,
    },
    {
        name:"Transaction",
        path:"/transaction",
        icon: <SwapVertSharpIcon/>,
        component: <Transaction />,
    },
    {
        name:"Settings",
        path:"/settings",
        icon: <SettingsSharpIcon/>,
        component: <Settings />,
    },
    {
        name:"Profile",
        path:"/",
        icon: <ManageAccountsSharpIcon/>,
        component: <Settings />,
    },
]

export default routes