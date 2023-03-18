
import React, { useState } from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import Modal from "common/Modal";
import { getTextFieldFormikProps } from "utils/FormikUtils";

import { HiOutlineTrash } from "react-icons/hi";
import { TbMessage2, TbPhoneCall } from "react-icons/tb";
import moment from 'moment'
import { MdOutlineKeyboardArrowDown,MdKeyboardArrowRight } from 'react-icons/md';
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from 'common/LoginHeader';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toDoorLogo from 'images/Ellipse 30.png'
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from 'images/Ellipse 56.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Card, CardActions, CardContent, Input, MenuItem, Rating, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WallCards from 'common/WallCards';
import ManageCompanyCard from './ManageCompanyCard';

function ManageCompaniesTable({tableArray}) {
  const [suspend, setSuspend] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState(false);
  const [show, setShow] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const history = useNavigate();
   function numberWithCommas(x) {
     // serPrice.value = x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     //  formState.target_amount=cleanupNumber(serPrice.value)
     return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }


const openModal = (bol)=>{
  setCloseModal(!closeModal)
  setSuspend(bol)

}

  const redirect = () => {

    history('/complete-signUp');
  }


const tableArrayz = [
    {
        image:gigLogo,
        name:"Nickky Samuel jonas  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
    },

    {
        image:gigLogo,
        name:"John jimmy Samuel  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
    }
]


const openBelow =()=>{
    setShow(!show)
}


  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      {/* { props.tableArray.map((e)=> */}
      <div className="">
        <div
          onClick={openBelow}
          style={{ border: "1px solid #DADADA" }}
          className="px-8 w-full flex border2 py-2 min-h-[50%]"
        >
          <div className="w-1/5  p-3 flex items-center">
            <img src={tableArray?.image} className="rounded-full mr-2" />
            <div>
              <p className="font font-semibold">Bank Transfer</p>
              <p className="text-[#767676]">Withdraw</p>
            </div>
          </div>
          <div className="w-1/5  p-3 ">
            <div>
              <p className="font font-semibold">
                {moment(tableArray?.updatedAt).format("ll")}
              </p>
              <p className="text-[#767676]">
                {moment(tableArray?.updatedAt).format("hh:mm:ss")}
              </p>
            </div>
          </div>
          <div className="w-1/5 flex items-center p-3 ">{tableArray?.id}</div>
          <div className="w-1/5 flex items-center  p-3 ">
            N {numberWithCommas(tableArray?.amount)}
          </div>
          <div className="w-1/5  p-3 ">
            <Button
              onClick={openModal}
              className="px-12 bg-primary-main flex items-center h-8"
            >
              successful
            </Button>
          </div>
        </div>

        {/* <Modal
          suspend={suspend}
          openModal={openModal}
          closeModal={closeModal}
        /> */}
      </div>
      {/* )} */}
    </div>
  );
}

export default ManageCompaniesTable;
