import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";

import useAuthUser from "hooks/useAuthUser";


import gigLogo from "images/Ellipse 56.png";

import {
  Button,
  TableBody,
  TableCell,
  Table,
  TextField,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
  Badge,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
// import TripsMap from "./TripsMap";
import { selectRowsFn } from "@tanstack/react-table";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';
import { RiArrowLeftSLine } from "react-icons/ri";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ToDoorSearch from "common/ToDoorSearch";
import AgentComponent from "common/AgentComponent";

function Trips(props) {
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [start_date, setStart_date] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  function createData(
    origin,
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay
  ) {
    return {
      origin,
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
    };
  }

  const rows = [
    createData(
      "Olalekan Wasiu",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Olalekan Wasiu",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Yaba, Lagos",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Sabo, Kaduna",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
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
    //   username: "",
    //   password: "",
    },
    validationSchema: yup.object({
    //   username: yup.string().trim().required(),
    //   password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // localStorage.setItem('location', values.location)
      redirect();

    //   try {
    //     const data = await loginMuation({ data: values }).unwrap();
    //     // TODO extra login
    //     // redirect()
    //     enqueueSnackbar("Logged in successful", { variant: "success" });
    //   } catch (error) {
    //     enqueueSnackbar(error?.data?.message, "Failed to login", {
    //       variant: "error",
    //     });
    //   }
    },
  });

//   const handleShow = (e) => {
//     setShow(true);
//     setRoute(e);
//   };

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }
  //  const useRowStyles = makeStyles({
  //   root: ({ open }) => ({
  //     backgroundColor: "pink"
  //   }),
  //   tableBody: {
  //     "& > :not(:last-child)": {
  //       borderBottom: "25px solid red"
  //     }
  //   }
  // });

  // const classes = useRowStyles();

  return (
    <div className="relative w-full ">
      <div className="w-full ">
        <div className="w-full">
          <ToDoorSearch />
        </div>
      </div>
      {!show && (
        <div>
          <div
            className="flex justify-between mb-8 items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            {/* <img src = {gigLogo}/> */}

            {/* <div className="flex justify-between w-2/5">
              <Typography variant="h5" className="font-bold text-blue-800 ">
                Trips
              </Typography>
              <Button color="primary" className="ml-4 px-16">
                Confirmed
              </Button>
              <Badge badgeContent={4} color="error">
                <Button
                  className="text-neutral-800 ml-3 px-12"
                  color="buttonhead"
                >
                  Pending
                </Button>
              </Badge>{" "}
              <Button
                color="buttonhead"
                className="text-neutral-800 ml-5 px-16"
              >
                Declined
              </Button>
            </div> */}

            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex-between">
                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    value={start_date}
                    onChange={(newValue) => {
                      // console.log(newValue)
                      // setWorkList({ ...workList, start_date: newValue });
                      setStart_date(newValue);
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <div>
                    {/* <InputLabel >
                          Age
                        </InputLabel> */}
                    <Select
                      //   labelId="demo-simple-select-autowidth-label"
                      //   id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      sx={{ width: "200px" }}
                      autoWidth
                      //   label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </div>
                </div>
              </LocalizationProvider>
            </div>
          </div>

          <div
            sx={{ minWidth: 650, backgroundColor: "#EBEBEB" }}
            aria-label="simple table"
          >
            <div className="mt-3 ">
              {rows.map((row, idx) => (
                <div
                  className="flex"
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: 10,
                    backgroundColor: "",
                  }}
                >
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Rider</p>
                    <p className="font-bold">{row.origin}</p>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[21%]  px-3 py-6  border4b text-left"
                        : "w-[21%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">
                      From: 32, Osun avenue{" "}
                    </p>
                    <p className="font-bold">
                      <span className="text-[#959595] mb-2 font-semibold">
                        To:
                      </span>
                      <span className="font-bold ">
                        {" "}
                        God’s care pharmacy
                      </span>
                      {/* {row.origin} */}
                    </p>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2 ">Start Time:</p>
                    <p className="font-bold">{"2:44pm"}</p>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Distance</p>
                    <p className="font-bold">3.56KM</p>
                  </div>

                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Average Time:</p>
                    <p className="font-bold">12 Mins</p>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Fare</p>
                    <p className="font-bold">NGN 2,900 (cash)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <ManageTripsTable tableArray={tableArray} /> */}

      {show && (
        <div>
          <div>
            <div
              onClick={() => setShow(!show)}
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
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        {/* <TripsMap route={route} width={show} /> */}
      </div>
    </div>
  );
}

export default Trips;
