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
import message from "images/message.png";
import messages from "images/messages.png";
import companies from "images/lifebuoy.png";
import dashboard from "images/category-2.png";
import trips from "images/routing.png";
import rider from "images/profile-2user.png";
import map from "images/map.png";
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
;
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history = useNavigate();

  const [outcasts, setOutcasts] = React.useState([
    { name: "Logout", linx: RouteEnum.HOME, image: logouts },
  ]);

  const [pat, setPat] = React.useState([
    {
      name: "Dashboard",
      d: RouteEnum.DASHBOARD,
      imageboolean: false,
      image2: <BsGrid color="white" size={26} />,
      image: <BsGrid size={26} />,
      color: true,
    },
    {
      name: "History",
      d: RouteEnum.MANAGE_COMPANIES,
      imageboolean: true,
      image2: <TbFileText color="white" size={26} />,
      image: <TbFileText size={26} />,
      color: false,
    },

    {
      name: "Help & Support",
      image2: <RiShieldLine color="white" size={26} />,
      imageboolean: true,
      image: <RiShieldLine size={26} />,
      color: false,
    },
    {
      name: "Wallet",
      imageboolean: true,
      d: RouteEnum.MANAGE_RIDERS,
      image: <GiWallet size={26} />,
      image2: <GiWallet color="white" size={26} />,
      color: false,
    },
    {
      name: "Manage Bikes",
      imageboolean: true,
      d: RouteEnum.TRIPS,
      image: <RiCarLine size={26} />,
      image2: <RiCarLine color="white" size={26} />,
      color: false,
    },
    {
      name: "Add Bikes",
      imageboolean: true,
      image2: <MdAddBox color="white" size={26} />,
      image: <MdAddBox size={26} />,
      color: false,
      d: RouteEnum.SUPPORT,
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

  const logout = (push) => {
    localStorage.removeItem("il");
    console.log('hi')
    history(push);
  };

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
            className={index ===0?"mb-12":''}
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
                  {text.imageboolean ? text.image:text.image2}
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
              <ListItemButton
                onClick={() =>
                  logout(text.linx) 
                }
              >
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
