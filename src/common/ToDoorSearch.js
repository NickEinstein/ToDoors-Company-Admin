import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import { MdRefresh, MdOutlineSearch, MdSearch } from "react-icons/md";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";
import { IoMdNotificationsOutline } from "react-icons/io";

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import notification from "images/notification.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import { AccountCircle } from "@mui/icons-material";
import AgentComponent from "./AgentComponent";

function ToDoorSearch({hide, pad}) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

 
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        {/* <span className="text-xs mr-1 opacity-50">
            <MdRefresh />
          </span> */}
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <MdOutlineSearch />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          style={{
            backgroundColor: "#EBEBEB",
            border: "none",
            borderRadius: "7px",
          }}
          className="w-[30%] text-ssm "
          placeholder="Search Company "
        />

        <div className="flex items-center">
          <div className="border-l-2 px-8 py-5 ">
            <IoMdNotificationsOutline className="text-[#00000080]" size={26} />
          </div>
          <div className=" border-l-2 py-5 px-10">
            <div
              className={
                pad
                  ? "flex justify-between items-center pr-8"
                  : "flex justify-between items-center"
              }
            >
              <div className="flex items-center ">
                <Avatar
                  className="mr-3 h-12 w-12"
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <div>
                  <p className="text-[#1E1E1E] text-sm text-center mb-1">
                    {authUser.fname.toUpperCase()}, Benin
                  </p>
                  <Button className="h-6 bg-primary-main">
                    Level 1 Account
                  </Button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {!hide && <Divider className="mb-8" />}
    </div>
  );
}

export default ToDoorSearch;
