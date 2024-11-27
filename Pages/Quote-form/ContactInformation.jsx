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
const ContactInformation = ({ setContactInfo }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
    const updatedValues = { ...formik.values, [field]: value };

    setContactInfo(updatedValues);

    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.contactInfo = updatedValues;
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
        <form style={{ width: "40%" }} className="flex flex-col gap-[20px]">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                variant="outlined"
                placeholder="Name"
                value={formik.values.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  style: { borderColor: "#494949", height: "3.2rem" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                placeholder="Email"
                value={formik.values.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  style: { borderColor: "#494949", height: "3.2rem" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <PhoneInput
                country={"ca"}
                value={formik.values.phone}
                onChange={(phone) => handleFieldChange("phone", phone)}
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
