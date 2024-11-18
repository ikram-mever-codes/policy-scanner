"use client";
import React from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const Page = () => {
  const policy_lead_type = "Scheduling Meeting";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `https://testing.policyscanner.ca/api/crm/create`,
          {
            method: "POST",
            cache: "no-store",

            headers: {
              Authorization: `Bearer 3fd486ff65855fdadb5512ba8b0b0c7404c35488`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              name: `${values.firstName} ${values.lastName}`,
              phone: values.phone,
              policy_lead_type,
            }),
          }
        );
        console.log(response);
        const data = await response.json();
        if (!response.ok) {
          console.log(data);
        }
        alert(data.message);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Box className="w-full min-h-[80vh] h-max px-[80px] py-[40px] flex justify-center items-center flex-col gap-[30px]">
      <div className="w-full flex justify-start items-center flex-col gap-[20px]">
        <h1 className="font-bold text-[25px] text-center text-halfBlack">
          Schedule a call with one of our Experts
        </h1>
        <div className="text-halfBlack text-center font-medium">
          Please provide your contact information
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "45%" }}
        className="flex flex-col gap-[20px]"
      >
        <Grid item xs={12} sm={6}>
          <Typography>Province</Typography>
          <div className="w-[9rem] mt-[15px] h-[2.8rem] flex justify-center items-center bg-primary text-nowrap text-white px-[20px] py-[5px] gap-[10px] rounded-lg">
            Ontario
          </div>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>First Name</Typography>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              variant="outlined"
              placeholder="eg Eldho"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              InputProps={{
                style: { borderColor: "#494949" },
              }}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#494949",
                  },
                  "&:hover fieldset": {
                    borderColor: "#494949",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#494949",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Last Name</Typography>
            <TextField
              fullWidth
              id="lastName"
              placeholder="eg George"
              name="lastName"
              variant="outlined"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              InputProps={{
                style: { borderColor: "#494949" },
              }}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#494949",
                  },
                  "&:hover fieldset": {
                    borderColor: "#494949",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#494949",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Email</Typography>
            <TextField
              fullWidth
              id="email"
              name="email"
              placeholder="eg eldho@gmail.com"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                style: { borderColor: "#494949" },
              }}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#494949",
                  },
                  "&:hover fieldset": {
                    borderColor: "#494949",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#494949",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <PhoneInput
              country={"ca"}
              value={formik.values.phone}
              onChange={(phone) => formik.setFieldValue("phone", phone)}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputStyle={{
                width: "100%",
                borderColor: "#494949",
              }}
              specialLabel="Phone Number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <Typography color="error" variant="caption">
                {formik.errors.phone}
              </Typography>
            )}
          </Grid>
        </Grid>
        <button
          type="submit"
          className="w-[7rem] h-[2.8rem] flex justify-center items-center text-black font-medium bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg"
        >
          Continue
        </button>
      </form>
    </Box>
  );
};

export default Page;
