import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import moment from "moment";
import useAuthUser from "hooks/useAuthUser";
// import moment from 'moment'
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
  Modal,
  Box,
  Avatar,
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
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showBikeDetails, setShowBikeDetails] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [start_date, setStart_date] = React.useState();
  const [end_date, setEnd_date] = React.useState();
  const [riderId, setRiderId] = React.useState();
  const handleChange = (event) => {
    setRiderId(event.target.value);
    console.log(event.target.value);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data?.data;
  console.log(user);

  const getHistoryQueryResult = UserApi?.useGetHistoryQuery({
    to: end_date,
    from: start_date,
    riderId: riderId,
  });

  console.log(start_date)

  const allHistory = getHistoryQueryResult?.data?.data;
  console.log(allHistory);

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;
  console.log(allBikes)

  function createData(
    paymentStatus,
    roadMapUrl,
    _id,
    customerId,
    riderId,
    srcLoc,
    destLoc,
    paymentMode,
    details,
    tripRequestStatus,
    tripRequestIssue,
    pickUpAddress,
    destAddress,
    latitudeDelta,
    longitudeDelta,
    tripAmt,
    tripDist,
    bookingTime,
    tripEndTime,
    travelTime,
    bikeType,
    seatBooked,
    tripStatus,
    tripIssue,
    companyId,
    customerRatingByRider,
    customerReviewByRider,
    riderRatingByCustomer,
    riderReviewByCustomer
  ) {
    return {
      paymentStatus,
      roadMapUrl,
      _id,
      customerId,
      riderId,
      srcLoc,
      destLoc,
      paymentMode,
      details,
      tripRequestStatus,
      tripRequestIssue,
      pickUpAddress,
      destAddress,
      latitudeDelta,
      longitudeDelta,
      tripAmt,
      tripDist,
      bookingTime,
      tripEndTime,
      travelTime,
      bikeType,
      seatBooked,
      tripStatus,
      tripIssue,
      companyId,
      customerRatingByRider,
      customerReviewByRider,
      riderRatingByCustomer,
      riderReviewByCustomer,
    };
  }

  const row = allHistory?.map((e) =>
    createData(
      e.paymentStatus,
      e.roadMapUrl,
      e._id,
      e.customerId,
      e.riderId,
      e.srcLoc,
      e.destLoc,
      e.paymentMode,
      e.details,
      e.tripRequestStatus,
      e.tripRequestIssue,
      e.pickUpAddress,
      e.destAddress,
      e.latitudeDelta,
      e.longitudeDelta,
      e.tripAmt,
      e.tripDist,
      e.bookingTime,
      e.tripEndTime,
      e.travelTime,
      e.bikeType,
      e.seatBooked,
      e.tripStatus,
      e.tripIssue,
      e.companyId,
      e.customerRatingByRider,
      e.customerReviewByRider,
      e.riderRatingByCustomer,
      e.riderReviewByCustomer
    )
  );
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
  // const formattedTime = moment(inputDate).format("HH:mm:ss");

  // const classes = useRowStyles();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    minHeight:'700px',
    bgcolor: "background.paper",
    borderRadius: "3%",
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
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
                      setStart_date(moment(newValue).format("YYYY-MM-DD"));
                      console.log(newValue);
                      console.log(moment(newValue).format("YYYY-MM-DD"));
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    value={end_date}
                    onChange={(newValue) => {
                      // console.log(newValue)
                      // setWorkList({ ...workList, start_date: newValue });
                      setEnd_date(moment(newValue).format("YYYY-MM-DD"));
                      console.log(newValue);
                      console.log();
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
                      // value={age}
                      onChange={handleChange}
                      sx={{ width: "200px" }}
                      autoWidth

                      //   label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allBikes?.map((e) => (
                        <MenuItem value={e?._id}>{e?.fname}</MenuItem>
                      ))}
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
              {allHistory?.map((row, idx) => (
                <div
                  className="flex"
                  key={row?.riderId?.fname}
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
                    <div className="flex items-center gap-3">
                      <Avatar src={row?.riderId?.profileUrl} />
                      <p
                        onClick={() => {
                          setOpen(true);
                          // setUserId(row.riderId);
                        }}
                        className="font-bold"
                      >
                        {row?.riderId?.fname}
                      </p>
                    </div>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[21%]  px-3 py-6  border4b text-left"
                        : "w-[21%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">
                      From: {row.pickUpAddress.toUpperCase()}
                    </p>
                    <p className="font-bold">
                      <span className="text-[#959595] mb-2 font-semibold">
                        To:
                      </span>
                      <span className="font-bold "> {row.destAddress}</span>
                      {/* {row.name} */}
                    </p>
                  </div>
                  <div
                    className={
                      idx !== rows?.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2 ">Start Time:</p>
                    <p className="font-bold">
                      {/* <p>{row?.bookingTime}</p> */}
                      <p>{moment(row?.bookingTime).format("ll")}</p>
                      <p>{moment.utc(row?.bookingTime).zone(0).format("HH:mm")}</p>
                    </p>
                  </div>
                  <div
                    className={
                      idx !== rows?.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Distance</p>
                    <p className="font-bold">{row?.tripDist} KM</p>
                  </div>

                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Average Time:</p>
                    <p className="font-bold">{row.travelTime}</p>
                  </div>
                  <div
                    className={
                      idx !== rows.length - 1
                        ? "w-[16%]  px-3 py-6  border4b text-left"
                        : "w-[16%]  px-3 py-6  border3b border4b text-left"
                    }
                  >
                    <p className="text-[#959595] mb-2">Fare</p>
                    <p className="font-bold">NGN {row.tripAmt} (cash)</p>
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

      <Modal
        // open={true}
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <div className="flex items-center gap-64 ">
              <div className="flex items-center ">
                <Avatar
                  sx={{ width: "90px", height: "90px" }}
                  className="mr-3 "
                  alt="Travis Howard"
                  src={gigLogo}
                />
                <div>
                  <p className="text-[#1E1E1E] text-sm mb-1">
                    {user?.fname || "Oladimeji"} {user?.lname || "Bankole"}
                  </p>
                  <Button className="h-6 bg-primary-main">
                    {user?.phoneNo}
                  </Button>
                  <p className="text-center mt-1">
                    {moment(user?.dob).format("ll") || "27th June 2022"}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <span> {user?.address || "Opposite Mofcon"}, </span>
                <span> {user?.city || "Maryland,"} </span>
                <p>{user?.state || "Lagos"}</p>
                <p> {"Nigeria"},</p>
              </div>
            </div>

            <div className="mt-12 text-center ">
              <Button
                onClick={() => setShowBikeDetails(!showBikeDetails)}
                className="w-2/5"
              >
                Bike Details
              </Button>
              {showBikeDetails && (
                <div>
                  {/* <p>bikeDetails:{user?.bikeDetails} </p> */}
                  <p>type:{user?.bikeDetails?.type} </p>
                  <p>company:{user?.bikeDetails?.company} </p>
                  <p>regNo:{user?.bikeDetails?.regNo} </p>
                  <p>RC_ownerName:{user?.bikeDetails?.RC_ownerName} </p>
                  <p>bikeNo:{user?.bikeDetails?.bikeNo}</p>
                  <p>bikeModel:{user?.bikeDetails?.bikeModel} </p>
                  <p>
                    regDate:{moment(user?.bikeDetails?.regDate).format("ll")}{" "}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-12 text-center ">
              <Button
                onClick={() => setShowBikeDetails(!showBikeDetails)}
                className="w-2/5"
              >
                Bank Details
              </Button>
              {showBikeDetails && (
                <div>
                  {/* <p>bikeDetails:{user?.bikeDetails} </p> */}

                  <p>accountNo: {user?.bankDetails?.accountNo},</p>
                  <p>holderName: {user?.bankDetails?.holderName},</p>
                  <p>bank: {user?.bankDetails?.bank}</p>
                </div>
              )}
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default Trips;
