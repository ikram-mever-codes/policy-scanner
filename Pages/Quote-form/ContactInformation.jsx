import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import { TextField, Grid, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Link from "next/link";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const ContactInformation = () => {
  const policy_lead_type = "Scheduling Meeting";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      saveToLocalStorage(values);

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
              name: values.name,
              phone: values.phone,
              policy_lead_type,
            }),
          }
        );
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

  const saveToLocalStorage = (values) => {
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.contactInfo = {
      name: values.name,
      email: values.email,
      phone: values.phone,
    };
    localStorage.setItem("quote-data", JSON.stringify(existingData));
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[1rem]">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col">
        <div>
          Lastly, could you provide your contact information so I can unlock
          your quotes?
        </div>
      </div>
      <div className="flex justify-center items-center py-[20px] mb-[2rem]">
        <form
          onSubmit={formik.handleSubmit}
          style={{ width: "40%" }}
          className="flex flex-col gap-[20px]"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                variant="outlined"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  style: { borderColor: "#494949", height: "3.2rem" },
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
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  style: { borderColor: "#494949", height: "3.2rem" },
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
                  height: "3.2rem",
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
            <Link
              href={"#"}
              className="w-full text-right text-[13px] mt-[10px] cursor-pointer text-[#0066ff]"
            >
              Why we need your contact details?
            </Link>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ContactInformation;
