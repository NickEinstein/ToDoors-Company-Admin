import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { MdRefresh } from "react-icons/md";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";

import { AiFillWarning } from "react-icons/ai";

import DashboardChart from "./DashboardChart";

import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoorSearch from "common/ToDoorSearch";
import NewWallCards from "common/NewWallCards";
import Maps from "features/maps/Maps";

function Dashboard(props) {
  const [earnings, setEarnings] = React.useState(true);
  const [val, setVal] = React.useState("Earnings");
  const [userId, setUserId] = React.useState("635fbde0bfadb9f5ea56afa4");
  const [show, setshow] = React.useState();
  const [companyMonthly, setCompanyMonthly] = useState();
  const handleChange = (event) => {
    setEarnings(!earnings);
  };

  const switsh = () => setshow(!show);
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const authUser = useAuthUser();

  console.log(authUser);

  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getMonthlyEarningsResult = UserApi?.useGetEarningsByMonthQuery();
  const getMonthlyTripsResult = UserApi?.useGetTripsByMonthQuery();

  const getCompanyStatisticsQueryResult = UserApi.useGetCompanyStatisticsQuery(
    {}
  );
  const companyStatistics = getCompanyStatisticsQueryResult?.data;

  const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

  const allBikes = getAllBikesQueryResult?.data?.data;

  useEffect(() => {
    earnings
      ? setCompanyMonthly(getMonthlyEarningsResult?.data?.data)
      : setCompanyMonthly(getMonthlyTripsResult?.data?.data);

    earnings ? setVal("Earnings") : setVal("Rides");
  }, [earnings, getMonthlyEarningsResult, getMonthlyTripsResult]);

  return (
    <div>
      {!show && (
        <div>
          <ToDoorSearch />
          <div className="mb-8">
            {!authUser?.verified && (
              <div className="bg-yellow-400 mt-5 p-4 my-4 rounded flex justify-between items-center">
                <p className="text-sm md:text-base font-medium text-gray-800">
                  Please complete your profile and Verify Account to access Add
                  Bikes
                </p>
                <button
                  className="ml-4 bg-gray-800 text-white font-medium py-3 px-4 rounded hover:bg-gray-700 transition duration-200"
                  onClick={() => history("/profile")}
                >
                  Complete Profile
                </button>
              </div>
            )}

            <Typography variant="h5" className="font-bold">
              Welcome Back
            </Typography>
          </div>

          <div>
            <div className="flex-between w-4/6 mb-2 text-xs ">
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
                  name="Active Bikes"
                  count={allBikes?.length}
                />
                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Rides in progress"
                  count={companyStatistics && companyStatistics?.ongoing_trips}
                />
                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Completed"
                  count={
                    companyStatistics && companyStatistics?.completed_trips
                  }
                />

                <NewWallCards
                  dashboard={true}
                  cutborder={true}
                  big={true}
                  name="Online"
                  count={companyStatistics && companyStatistics?.online_bikes}
                />

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
          <div className="flex-between w-full mb mt-6 text-xl">
            <p className=" flex  self-end text-primary-main font-bold">
              {earnings ? "Earnings" : "Rides"} Over the last 12 Months
            </p>
            <div className="flex items-center">
              <span
                onClick={switsh}
                className="cursor-pointer p-2 text-primary-main font-bold"
              >
                View Riders Location
              </span>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex items-center w-1/5 mt-4">
            <Box className=" w-full" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  placeholder="August"
                  className="w-full"
                  size="small"
                  id="demo-simple-select"
                  value={val}
                  onChange={handleChange}
                >
                  <MenuItem value={"Earnings"}>Earnings</MenuItem>
                  <MenuItem value={"Rides"}>Rides</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {authUser?.verified ? (
            <div className=" flex mt-10 w-full justify-center">
              {(
                earnings
                  ? !companyMonthly?.length
                  : !getMonthlyTripsResult?.data?.data?.length
              ) ? (
                <div className="w-full flex flex-col justify-center items-center gap-5 my-16">
                  <AiFillWarning style={{ fontSize: "40px", color: "blue" }} />

                  <Typography className="font-bold" variant="h5">
                    {earnings ? "Earnings" : "Trips"}
                  </Typography>
                  <Typography variant="">
                    No data available to display on the dashboard.
                  </Typography>
                </div>
              ) : (
                <div className=" w-3/5 mb-10">
                  <DashboardChart
                    companyMonthly={companyMonthly}
                    companyMonthlyTrips={getMonthlyTripsResult?.data?.data}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center gap-5 my-16">
              <AiFillWarning style={{ fontSize: "40px", color: "#FDE047" }} />

              <Typography className="font-bold" variant="h5">
                {earnings ? "Earnings" : "Trips"}
              </Typography>
              <Typography variant="">
                Your account is not yet verified. Upload required documents.
              </Typography>
              <Button onClick={() => history("/profile")}>Verify Now</Button>
            </div>
          )}
        </div>
      )}
      {show && (
        <div className="flex justify-between items-center mt-8">
          <Maps switsh={switsh} hide={true} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
