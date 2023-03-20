import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import useAuthUser from "hooks/useAuthUser";
import gigLogo from "images/Ellipse 56.png";

import { useNavigate } from "react-router-dom";

function ManageRiders(props) {
  
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

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
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

 

  return (
    <div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
      <div className="flex justify-between my-7">
        <ManageRiders />
        <ManageRiders />
        <ManageRiders />
      </div>
    </div>
  );
}

export default ManageRiders;
