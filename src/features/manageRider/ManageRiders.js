import React, { useEffect, useState } from "react";
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
import Modal from "common/Modal";
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
import ManageCompanyCard from "features/manageCompanies/ManageCompanyCard";
import ManageCompaniesTable from "features/manageCompanies/ManageCompaniesTable";

import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import ToDoorSearch from "common/ToDoorSearch";
import NewWallCards from "common/NewWallCards";
import { get, post } from "services/fetch";
function ManageRiders(props) {
  const [age, setAge] = React.useState("");
  const [closeModal, setCloseModal] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [payMentTransactions, setPayMentTransactions] = React.useState([]);
  const [totalEarnings, setTotalEarnings] = React.useState([]);
  const [availableBalance, setAvailableBalance] = React.useState([]);
  
  
  const getBanksQueryResult = UserApi?.useGetBanksQuery();

  const banks = getBanksQueryResult?.data?.data;

  useEffect(()=>{
    getPaymentTransactions()
getTotalEarningsAndAvailableBalance()
  },[])

   const getTotalEarningsAndAvailableBalance = async () => {
     // const deleteRider = async () => {
     const resTotalEarnings = await get({
       endpoint: `api/company/getTotalEarnings`,
       //  body: { ...payload },
       auth: true,
     });
     setTotalEarnings(resTotalEarnings?.data?.data[0]?.total_earning);
     //  setAllBikez(res.data.data);

     const resAvailableBalance = await get({
       endpoint: `api/payment/getBalance`,
       //  body: { ...payload },
       auth: true,
     });
     setAvailableBalance(resAvailableBalance?.data?.data?.user?.walletBalance);
     //  setAllBikez(res.data.data);
   };
  function numberWithCommas(x) {
    // serPrice.value = x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //  formState.target_amount=cleanupNumber(serPrice.value)
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
    
    const openModal = (bol) => {
      console.log('hi')
      setCloseModal(!closeModal);
      // setSuspend(bol);
    };
  
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };




  const tableArray = payMentTransactions?.map((e) => ({
    image: gigLogo,
    name: "Nickky Samuel jonas  ",
    company: "GIG Logistics",
    amount: e?.amount,
    id: e?.tx_ref,
    updatedAt: e?.updatedAt,
  }));
 

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

   const getAllBikesQueryResult = UserApi?.useGetAllBikesQuery();

   const allBikes = getAllBikesQueryResult?.data?.data;

 

  const getPaymentTransactions = async (zz) => {
    // tryNewPost()
    // alert('ji')

    const res = await get({
      endpoint: `api/company/getPaymentTransactions`,
      auth: true,
    });

    setPayMentTransactions(res?.data?.data)

    // try {
    //   const data = await updateUserUploadMuation({
    //     data: zz,
    //   }).unwrap();
    //   // TODO extra login
    //   console.log(data.data);
    //   enqueueSnackbar(data.message, { variant: "success" });
    //   // redirect();
    // } catch (error) {
    //   console.log(error.data);
    //   enqueueSnackbar(error?.data?.message, "Failed to login", {
    //     variant: "error",
    //   });
    // }
  };

  return (
    <div>
      <ToDoorSearch />
      {/* <div className="flex items-center" style={{ backGroundColor: "#1E1E1E" }}>
        <img src={gigLogo} />
        <Typography variant="h5" className="font-bold ml-4 ">
          GIG LOGISTICS
        </Typography>
      </div> */}
      <Typography variant="h5" className="font-bold  mt-12">
        Wallet
      </Typography>
      <div className="flex items-end mr-3 w-3/6">
        <div className="mr-4">
          <WallCards
            className="mr-3"
            rider={false}
            button={true}
            // big={true}
            green={true}
            name="Available Balance"
            count={numberWithCommas(availableBalance)}
            openModal={openModal}
          />
        </div>
        <div>
          <div
            className="flex-between w-6/6 mb-2 text-xs "
            // style={{ top: "-20px" }}
          >
            <p className="font-bold flextext-xs self-end">PAST 30 DAYS</p>
            <div className="flex items-center">
              <span className="text-xs mr-1 opacity-50">
                <MdRefresh />
              </span>
              <span className="text-xs opacity-50">Refresh</span>
            </div>
          </div>
          {/* Dashboard Cards */}
          <div className="flex ">
            <div className="flex items-center border2 p-2">
              <NewWallCards
                dashboard={true}
                // small={true}
                big={true}
                name="Active Bikes"
                count={allBikes?.length}
              />

              <NewWallCards
                dashboard={true}
                earnings={true}
                cutborder={true}
                name="Earnings"
                count={numberWithCommas(totalEarnings)}
              />
            </div>
          </div>
        </div>

        {/* <WallCards name='Total Raiders' count='116,019'/>
          <WallCards name='Rides in progress' count='13'/>
          <WallCards name='Active vehicles' count='8'/>
          <WallCards name='Earnings' count='3,000,000'/> */}
      </div>

      <Typography variant="h5" className="font-bold mt-12 text-primary-main">
        Cash Out Transactions
      </Typography>
      <div>
        <div
          style={{ border: "1px solid #DADADA" }}
          className=" cursor-pointer px-8 mt-4 py-2 flex border2 min-h-[50%]"
        >
          <div className="w-1/5  p-3 ">Type</div>
          <div className="w-1/5  p-3 ">
            <p className="">Date</p>
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Transaction ID</p>
            {/* <Typography variant="h6">{props.tableArray.company}</Typography> */}
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Amount</p>
            {/* <Typography variant="h6">{props.tableArray.id}</Typography> */}
          </div>
          <div className="w-1/5  p-3 ">
            <p className="">Status</p>

            {/* <Typography variant='h6'>{e.ratings}</Typography> */}
          </div>
        </div>
      </div>
      {tableArray.map((e) => (
        <ManageCompaniesTable tableArray={e} />
      ))}
      <Modal openModal={openModal} closeModal={closeModal} />
      {/* <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div>
                    <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div>
                    <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div> */}
    </div>
  );
}

export default ManageRiders;
