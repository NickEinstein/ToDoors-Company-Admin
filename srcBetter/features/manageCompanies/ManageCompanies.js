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
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import ManageCompanyCard from "./ManageCompanyCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import ManageCompaniesTable from "./ManageCompaniesTable";
import NewWallCards from "common/NewWallCards";
import ToDoorSearch from "common/ToDoorSearch";

function ManageCompanies(props) {
  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    setShow(!show);
    console.log("john");
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const top100Films = [
    { label: "Edo State", year: 1994 },
    { label: "Oredo", year: 1972 },
  ];

  const tableArray = [
    {
      image: gigLogo,
      name: "Nickky Samuel jonas  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },

    {
      image: gigLogo,
      name: "John jimmy Samuel  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },
  ];

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // localStorage.setItem('location', values.location)
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        // redirect()
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      <ToDoorSearch />
      {!show && (
        <div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
          <div className="flex justify-between my-7">
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
            <ManageCompanyCard handleShow={handleShow} />
          </div>
        </div>
      )}

      {show && (
        <div>
          <div
            onClick={handleShow}
            className="flex items-center mb-8 cursor-pointer w-16 p-2"
          >
            <div
              style={{ border: "1px solid #494949" }}
              className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
            >
              <RiArrowLeftSLine
                className=""
                style={{ fontSize: "22px", color: "#494949" }}
              />
            </div>
            <p style={{ color: "#494949" }} className="text-base">
              Back
            </p>
          </div>

          <div
            className="flex items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            <img src={gigLogo} />
            <Typography variant="h5" className="font-bold ml-4 ">
              GIG LOGISTICS
            </Typography>
          </div>
          <div className="flex ">
            <div className="flex items-center  mt-8 border2 p-2">
              <NewWallCards
                dashboard={true}
                small={true}
                bigspace={true}
                name="Riders"
                count="20"
              />
              {/* <WallCards name='Total Raiders' count='116,019'/> */}
              {/* <WallCards name='Rides in progress' count='13'/>
              <WallCards name='Active vehicles' count='8'/> */}
              <NewWallCards
                dashboard={true}
                small={true}
                cutborder={true}
                name="Earnings"
                count="30,000"
              />
            </div>
          </div>
          <div className="flex justify-between  items-end">
            <Typography
              variant="h5"
              className="font-bold mt-8 text-primary-main"
              // text-blue-800
            >
              Riders
            </Typography>

            <div className="flex justify-between items-end">
              <Autocomplete
                // clearIcon={<p></p>}
                // variant=''
                className="mr-3"
                // disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Autocomplete
                // disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>

          {tableArray.map((e) => (
            <ManageCompaniesTable tableArray={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCompanies;
