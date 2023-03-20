import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  TableBody,
  TableCell,
  Table,
  Input,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import ToDoorSearch from "common/ToDoorSearch";
import { RiArrowLeftSLine } from "react-icons/ri";
// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';

function AgentComponent({ switsh }) {

  //eslint-disable-next-line no-undef

  
  return (
    <div className="w-full relative">
      {/* <div className="absolute w-full top-10 left-8 z-50"> */}

        <div className="flex justify-between items-center">
         
          <div className="flex items-center ">
            <Avatar
              className="mr-3 h-12 w-12"
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
            <div>
              <p className="text-[#1E1E1E] text-sm mb-1">GIGM Agent, Benin</p>
              <Button className="h-6">Level 1 Account</Button>
            </div>
          </div>
        {/* </div> */}
      </div>
    
    </div>

  );
}

export default AgentComponent;
