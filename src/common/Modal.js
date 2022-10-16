import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiErrorWarningLine } from "react-icons/ri";
import { InputAdornment, TextField } from '@mui/material';
import { MdArrowBackIosNew } from 'react-icons/md';
import { HiSelector } from 'react-icons/hi';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'3%',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({closeModal, openModal, suspend}) {
  const [open, setOpen] = React.useState(false);
  const [ConfirmWithdrawal, setConfirmWithdrawal] = React.useState(false);
  const [Confirm, setConfirm] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        // open={true}
        open={closeModal}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {ConfirmWithdrawal == false && Confirm == false && (
            <Box sx={style}>
              <div className="flex mb-5 text-left ">
                <Typography variant="h5" className="font-bold text-left">
                  Withdraw
                </Typography>
              </div>
              <p className="mb-2">How much do you want to withdraw</p>
              <TextField className="w-full" />
              <div className="mt-10">
                <p className="text-primary-main mb-5">Saved Account Info</p>
                <div className="">
                  <div className="flex items-center justify-between mb-3">
                    <p>Account Number:</p>
                    <Typography variant="h5" className="font-bold">
                      2161542395
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p>Bank</p>
                    <Typography className="font-bold">
                      Guaranty Trust Bank PLC
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p>2161542395</p>
                    <Typography className="font-bold">GIG Logistics</Typography>
                  </div>
                </div>
                <Button
                  onClick={() => setConfirmWithdrawal(true)}
                  className="w-full mb-3 mt-9 bg-primary-main"
                >
                  COnfirm Withdrawal
                </Button>
                <div class="text-center text-primary-main font-bold">
                  <p>Use another account?</p>
                </div>
              </div>
            </Box>
          )}

          {ConfirmWithdrawal && Confirm == false && (
            <Box sx={style}>
              <div className="flex justify-center mb-5 text-left ">
                <Typography variant="h5" className="font-bold">
                  Confirm Withdrawal
                </Typography>
              </div>
              <p className="mb-2 text-center px-8">
                You are transferring{" "}
                <span class="font-bold">NGN200,000.00 </span>
                to <span class="font-bold">TO-DOOR UBA Bank</span>
              </p>

              <div className="mt-10 flex justify-between items-center">
                <div className="flex cursor-pointer">
                  <MdArrowBackIosNew className="mr-1" size={16} />
                  <p>Go Back</p>
                </div>
                <Button
                  onClick={() => setConfirm(true)}
                  className="bg-primary-main"
                >
                  Confirm
                </Button>
              </div>
            </Box>
          )}

          {Confirm && (
            <Box sx={style}>
              <div className="flex justify-center mb-5 text-left ">
                <Typography variant="h5" className="font-bold">
                  Input Account Info
                </Typography>
              </div>
              <div className="text-left my-8">
                <p className="mb-1 text-left text-sm">Bank Name</p>
                <TextField
                  className="w-full bg-[#EBEBEB]"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <HiSelector size={20} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="text-left my-8">
                <p className="mb-1 text-left text-sm">Account Number</p>
                <TextField className="w-full bg-[#EBEBEB]" />
              </div>

              <div className="mt-10 flex justify-between items-center">
                <Button className=" bg-primary-main h-10 w-full mb-8">
                  Save Account Info
                </Button>
              </div>
            </Box>
          )}
        </div>
      </Modal>
    </div>
  );
}
