import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import { MdRefresh, MdOutlineSearch, MdSearch } from "react-icons/md";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import CompanyRiderCard from "common/CompanyRiderCard";

import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import DashboardChart from "./DashboardChart";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
import background from "images/background.png";

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from "images/Rectangle 7.png";
import { get } from "services/fetLocation";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import { AccountCircle } from "@mui/icons-material";
import ToDoorSearch from "common/ToDoorSearch";
import ManageCompanyCard from "features/manageCompanies/ManageCompanyCard";
import NewWallCards from "common/NewWallCards";
import TripsMap from "features/manageRiders/TripsMap";
import Maps from "features/maps/Maps";

function Dashboard(props) {
  const [age, setAge] = React.useState("");
  const [userId, setUserId] = React.useState("635fbde0bfadb9f5ea56afa4");
  const [show, setshow] = React.useState();
  const handleChange = (event) => {
    console.log(event);
    setAge(event.target.value);
    console.log(event);
  };

  const switsh = () => setshow(!show);
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

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

  function numberWithCommas(x) {
    // serPrice.value = x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //  formState.target_amount=cleanupNumber(serPrice.value)
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }
  // const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery(
  //   {}
  // );
  // const companyStatistics = getCompanyStatisticsQueryResult?.data;
  const getMonthlyEarningsResult = UserApi?.useGetEarningsByMonthQuery();
  const getMonthlyTripsResult = UserApi?.useGetTripsByMonthQuery();

  const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery(
    {}
  );
  const companyStatistics = getCompanyStatisticsQueryResult?.data;

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });

  const getRiderTripStatisticsQueryResult =
    // UserApi?.useGetRiderTripStatisticsQuery({ date: "2022-11-13" });
    UserApi?.useGetRiderTripStatisticsQuery();

  const allCompanyRiderTripsStats =
    getRiderTripStatisticsQueryResult?.data?.data;
  console.log(allCompanyRiderTripsStats);

  //  riderTripStatics;

  return (
    <div>
      {!show && (
        <div>
          <ToDoorSearch />
          <div className="mb-8">
            {/* <span className="text-xs mr-1 opacity-50">
            <MdRefresh />
          </span> */}
            {/* <ToDoorSearch /> */}
            <Typography variant="h5" className="font-bold">
              Welcome Back
            </Typography>
          </div>
          {/* <div className="flex justify-between mt-4">
          <div className="mr-3">
            <WallCards
              dashboard={true}
              green={true}
              name="Total Riders"
              count="20"
            />
          </div>
          <div className="mr-3">
            <WallCards dashboard={true} name="Total Raiders" count="116,019" />
          </div>
          <div className="mr-3">
            <WallCards dashboard={true} name="Rides in progress" count="13" />
          </div>
          <div className="mr-3">
            <WallCards dashboard={true} name="Active vehicles" count="8" />
          </div>
          <div className="relative w-full">
            <div
              className="flex-between px-2 w-full text-xs absolute "
              style={{ top: "-20px" }}
            >
              <p className="font-bold flextext-xs self-end">Today</p>
              <div className="flex items-center">
                <span className="text-xs mr-1 opacity-50">
                  <MdRefresh />
                </span>
                <span className="text-xs opacity-50">Refresh</span>
              </div>
            </div>
            <WallCards
              dashboard={true}
              small={true}
              name="Earnings"
              count="3,000,000"
            />
          </div>
        </div> */}

          {/* Dashboard Cards */}
          <div>
            <div
              className="flex-between w-4/6 mb-2 text-xs "
              // style={{ top: "-20px" }}
            >
              <p className="font-bold flextext-xs self-end">Today</p>
              <div className="flex items-center">
                <span className="text-xs mr-1 opacity-50">
                  <MdRefresh />
                </span>
                <span className="text-xs opacity-50">Refresh</span>
              </div>
            </div>
            <div className="flex ">
              <div className="flex items-center border2 p-2">
                <NewWallCards
                  dashboard={true}
                  big={true}
                  // small={true}
                  // big={true}
                  // bigspace={true}
                  name="Active Bikes"
                  count={allBikes?.length}
                />
                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  // small={true}
                  // bigspace={true}
                  name="Rides in progress"
                  count={companyStatistics && companyStatistics?.ongoing_trips}
                />
                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  // small={true}
                  // bigspace={true}
                  name="Completed"
                  count={
                    companyStatistics && companyStatistics?.completed_trips
                  }
                />
                {/* <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  // small={true}
                  // bigspace={true}
                  name="Canceled"
                  count={
                    companyStatistics && companyStatistics?.completed_trips
                  }
                /> */}
                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  // small={true}
                  // bigspace={true}
                  name="Online"
                  count={companyStatistics && companyStatistics?.online_bikes}
                  // count="XX"
                />
                {/* <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  // small={true}
                  // bigspace={true}
                  name="Went offline in the last (1) MIn"
                  count={companyStatistics && companyStatistics?.online_bikes}
                /> */}
                {/* <WallCards name='Total Raiders' count='116,019'/> */}
                {/* <WallCards name='Rides in progress' count='13'/>
                  <WallCards name='Active vehicles' count='8'/> */}
                <NewWallCards
                  dashboard={true}
                  earnings={true}
                  cutborder={true}
                  name="Earnings"
                  count={numberWithCommas(
                    companyStatistics && companyStatistics?.total_earnings
                  )}
                />
              </div>
            </div>
          </div>
          <div
            className="flex-between w-full mb mt-6 text-xl"
            // style={{ top: "-20px" }}
          >
            <p className=" flex  self-end text-primary-main font-bold">
              Earnings
            </p>
            <div className="flex items-center">
              {/* <span className="text-xs mr-1 opacity-50">
              <MdRefresh />
            </span> */}
              {/* ********************************************************************************* */}
              {/* Return to work on it */}
              {/* <span
                onClick={switsh}
                className="cursor-pointer p-2 text-primary-main font-bold"
              >
                View Riders Location
              </span> */}
              {/* *********************************************************************************** */}
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex items-center w-1/5 mt-4">
            {/* <Box className=" w-full" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  // initialValues='August'
                  placeholder="August"
                  className="w-full"
                  size="small"
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  // renderValue={(e)=>e.target.value<p>{age}</p>}
                  // return selected.join(", ");
                  // label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>January</MenuItem>
                  <MenuItem value={20}>February</MenuItem>
                  <MenuItem value={30}>March</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

            {/* <Button className="p-3 w-1/3 ml-4">Search</Button> */}
          </div>
          <div className=" flex mt-10 w-full justify-center">
            <div className=" w-3/5 mb-10">
              <DashboardChart
                companyMonthly={getMonthlyEarningsResult?.data?.data}
                companyMonthlyTrips={getMonthlyTripsResult?.data?.data}
              />
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="flex justify-between items-center mt-8">
          {/* <TripsMap/> */}
          <Maps switsh={switsh} hide={true} />
          {/* <div className="mr-4  w-2/6">
            <CompanyRiderCard />
          </div>
          <div className="mr-4 w-2/6">
            <CompanyRiderCard />
          </div>
          <div className="mr-4 w-2/6">
            <CompanyRiderCard />
          </div> */}
        </div>
      )}
    </div>
  );
}

const listOfTrips = {
  success: true,
  message: "user trip history",
  data: [
    {
      paymentStatus: null,
      roadMapUrl: null,
      _id: "6370eefca5143b38c79ad43a",
      customerId: "6370c0bdbce238a31b652bc4",
      riderId: "635fbde0bfadb9f5ea56afa4",
      srcLoc: [0.32423423424342424, 0.434553453],
      destLoc: [0.32423423424342424, 0.434553453],
      paymentMode: "cash",
      details: "brown gucci bag",
      tripRequestStatus: "request",
      tripRequestIssue: "busy",
      pickUpAddress: "abc, abuja",
      destAddress: "def, lagos",
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
      tripAmt: 2500,
      tripDist: 12,
      bookingTime: "2022-11-13T10:41:25.316Z",
      tripEndTime: "2022-11-13T10:41:25.316Z",
      travelTime: 1255,
      bikeType: "Todoor",
      seatBooked: 1,
      tripStatus: "endTrip",
      tripIssue: "noissue",
      companyId: "6370c0bdbce238a31b652bc4",
      customerRatingByRider: 4,
      customerReviewByRider: "great",
      riderRatingByCustomer: 5,
      riderReviewByCustomer: "great",
    },
    {
      paymentStatus: null,
      seatBooked: 0,
      roadMapUrl: null,
      _id: "6370ef03a5143b38c79ad43b",
      customerId: "6370c0bdbce238a31b652bc4",
      riderId: "635fbde0bfadb9f5ea56afa4",
      srcLoc: [0.32423423424342424, 0.434553453],
      destLoc: [0.32423423424342424, 0.434553453],
      paymentMode: "cash",
      details: "brown gucci bag",
      tripRequestStatus: "request",
      tripRequestIssue: "busy",
      pickUpAddress: "abc, abuja",
      destAddress: "def, lagos",
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
      tripAmt: 2500,
      tripDist: 12,
      bookingTime: "2022-11-13T10:41:25.316Z",
      tripEndTime: "2022-11-13T10:41:25.316Z",
      travelTime: 1255,
      bikeType: "Todoor",
      tripStatus: "endTrip",
      tripIssue: "noissue",
      companyId: "6370c0bdbce238a31b652bc4",
      customerRatingByRider: 4,
      customerReviewByRider: "great",
      riderRatingByCustomer: 5,
      riderReviewByCustomer: "great",
    },
  ],
};
export default Dashboard;
