import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { BsGrid, BsPeople } from "react-icons/bs";
import MailIcon from "@mui/icons-material/Mail";
import clipboard from "images/clipboard-text.svg";
import clipboardW from "images/clipboard-text white.svg";
import dashboard from "images/category-2.svg";
// import companies from "images/lifebuoy.png";
import dashboardW from "images/category-2 white.svg";
import wallet from "images/wallet-minus.svg";
import walletW from "images/wallet-minus white.svg";
import smartCar from "images/smart-car.svg";
import smartCarW from "images/smart-car white.svg";
import addBikes from "images/add-square.svg";
import addBikesW from "images/add-square white.svg";
import logouts from "images/logout.png";
import LoginHeader from "common/LoginHeader";
import { RouteEnum } from "constants/RouteConstants";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { TbFileText } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { RiCarLine, RiShieldLine } from "react-icons/ri";
import { IoCarSharp } from "react-icons/";
import { MdAddBox } from "react-icons/md";
import useLogout from "hooks/useLogout";

;
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history = useNavigate();
  const { logout } = useLogout();


  const [outcasts, setOutcasts] = React.useState([
    { name: "Logout", linx: RouteEnum.HOME, image: logouts },
  ]);

  const [pat, setPat] = React.useState([
    {
      name: "Dashboard",
      d: RouteEnum.DASHBOARD,
      imageboolean: false,
      image2: dashboardW,
      image: dashboard,

      color: true,
    },
    {
      name: "History",
      d: RouteEnum.MANAGE_COMPANIES,
      imageboolean: true,
      image2: clipboardW,
      image: clipboard,
      color: false,
    },

    // {
    //   name: "Help & Support",
    //   image2: <RiShieldLine color="white" size={26} />,
    //   imageboolean: true,
    //   image: <RiShieldLine size={26} />,
    //   color: false,
    // },
    {
      name: "Wallet",
      imageboolean: true,
      d: RouteEnum.MANAGE_RIDERS,
      image: wallet,
      image2: walletW,
      color: false,
    },
    {
      name: "Manage Riders",
      imageboolean: true,
      d: RouteEnum.TRIPS,
      image: smartCar,
      image2: smartCarW,
      color: false,
    },
    {
      name: "Add Riders",
      imageboolean: true,
      image2: addBikes,
      image: addBikesW,
      color: false,
      d: RouteEnum.SUPPORT,
    },
    {
      name: "Profile",
      imageboolean: true,
      image2: addBikes,
      image: addBikesW,
      color: false,
      d: RouteEnum.PROFILE,
    },
    // { name: "Maps", d: RouteEnum.MAPS, image: map, color: false },
    // { name: "Reviews", d: RouteEnum.MANAGE_COMPANIES },
    // { name: "Reviews", d: "", image: message, color: false },
    // { name: "Support", d: RouteEnum.SUPPORT, image: messages },

    // { name: "Support", d: RouteEnum.SUPPORT },
  ]);

  const redirect = (push) => {
    console.log(push);
    history(push);
    // logout()
  };

  // const logout = (push) => {
  //   localStorage.removeItem("il");
  //   console.log('hi')
  //   history(push);
  // };

  // const pat =

  const changeColorOnActive = (num) => {
    console.log(num)
    let k = pat.map((e, index) => ({
      key: e.name,
      name: e.name,
      d: e.d,
      imageboolean: num == index ? false : true,

      image: e.image,
      image2: e.image2,
      color: num == index ? true : false,
    }));

    console.log(k)

    

    setPat(k);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#1E1E1E" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div className="px-3 py-5">
          <LoginHeader />
        </div>
        {/* <Divider /> */}
        <List>
          {pat.map((text, index) => (
            <ListItem
              // key={index}
              className={index === 0 ? "mb-12" : ""}
              style={{
                backgroundColor: text.color ? "#0C3BAA" : "",
                color: text.color ? "white" : "",
              }}
              // inkBarStyle={{ background: "yellow" }}
              key={text.name}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  redirect(text.d);
                  changeColorOnActive(index);
                }}
              >
                <ListItemIcon>
                 <img  src={text.imageboolean ? text.image : text.image2}/> 
                  
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {outcasts.map((text, index) => (
            <ListItem
              className={index % 2 == 0 ? "mt-36" : ""}
              key={text.name}
              disablePadding
            >
              <ListItemButton onClick={() => logout(text.linx)}>
                <ListItemIcon>
                  <img src={text.image} />
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
