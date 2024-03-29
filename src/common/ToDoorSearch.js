import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { MdOutlineSearch } from "react-icons/md";

import useAuthUser from "hooks/useAuthUser";

import { IoMdNotificationsOutline } from "react-icons/io";

import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ToDoorSearch({ hide, pad }) {
  const authUser = useAuthUser();

  const [userId, setUserId] = React.useState(authUser._id);

  const history = useNavigate();

  const redirect = () => {
    history("/profile");
  };

  console.log(authUser)

  const getUserQueryResult = UserApi?.useGetUserQuery({ userId });
  const user = getUserQueryResult?.data;

  return (
    <div>
      <div className="flex justify-between items-center w-full">
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
                  src={user?.profileUrl}
                />
                <div className="cursor-pointer" onClick={redirect}>
                  <Button className="text-white text-base font-bold text-center mb-1">
                    {user?.fname?.toUpperCase()}, {user?.city}
                  </Button>
                  <p
                    className={
                      user?.verified
                        ? "h-6 text-green-400 text-center font-bold"
                        : "h-6 text-red-500 font-bold text-center"
                    }
                  >
                    {user?.verified ? "Verified" : "Unverified"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!hide && <Divider className="mb-8" />}
    </div>
  );
}

export default ToDoorSearch;
