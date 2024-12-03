import React, { useState, useEffect } from "react";
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
  const [maskedEmail, setMaskedEmail] = useState("");
  const [isEmailMasked, setIsEmailMasked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    if (existingData.contactInfo?.email) {
      const email = existingData.contactInfo.email;
      setMaskedEmail("*".repeat(email.length));
      formik.setFieldValue("email", email);
      setIsEmailMasked(false);
    }
  }, []);

  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);

    const updatedValues = { ...formik.values, [field]: value };
    setContactInfo(updatedValues);

    const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
    existingData.contactInfo = updatedValues;
    localStorage.setItem("quote-data", JSON.stringify(existingData));

    if (field === "email") {
      setIsEmailMasked(false);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem] relative ">
      <Image src={quoteForm3} alt="Teena" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col mt-[20px]">
        <div className="text-halfBlack font-normal text-[18px] text-center">
          Get $1 Million Coverage for as Low as{" "}
          <span className="mt-2 font-normal text-green-600">$20/month!</span>
          <br />
          Share Your Details to Unlock Quotes.
        </div>
      </div>
      <div className="flex justify-center items-center py-[20px] pb-0 ">
        <form style={{ width: "350px" }} className="flex flex-col ">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                variant="outlined"
                placeholder="Your Name"
                // label="Name"
                value={formik.values.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  style: {
                    borderColor: "#494949",
                    height: "3.5rem",
                    borderRadius: "6px",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: {
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#494949",
                    background: "white",
                    padding: "0 18px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} className="relative">
              <PhoneInput
                country={"ca"}
                value={formik.values.phone}
                onChange={(phone) => handleFieldChange("phone", phone)}
                inputStyle={{
                  height: "3.5rem",
                  width: "100%",
                  borderRadius: "6px",
                  border: "2px solid  #cdd2da",
                }}
                specialLabel="Mobile no"
              />
              <Typography
                variant="caption"
                className="absolute bottom-[-9px] bg-white right-[15px]  text-black font-medium "
              >
                We don't spam
              </Typography>
              {formik.touched.phone && formik.errors.phone && (
                <Typography color="error" variant="caption">
                  {formik.errors.phone}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                placeholder="Your Email"
                // label="Email"
                type="text"
                value={isEmailMasked ? maskedEmail : formik.values.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  style: {
                    border: "1px solid  #e5e7eb",
                    height: "3.5rem",
                    borderRadius: "6px",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  style: {
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#494949",
                    background: "white",
                    padding: "0 18px",
                  },
                }}
              />
            </Grid>
            <Link
              href={"#"}
              onClick={(e) => {
                e.preventDefault();
                handleModalToggle();
              }}
              className="w-full text-right text-[13px] mt-[10px] cursor-pointer text-[#0066ff]"
            >
              Why we need your contact details?
            </Link>
          </Grid>
        </form>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black w-full h-full bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalToggle}
        >
          <div
            className="bg-white w-[90%] h-[30vh] sm:w-[400px] rounded-lg shadow-lg p-6 relative flex justify-center items-center flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl w-full text-center mb-4 text-primary ">
              Why do we need your contact info?
            </h2>
            <p className="text-halfBlack text-sm leading-relaxed">
              We use it to understand your needs better and provide tailored
              advice. Our licensed experts are here to help answer any questions
              you have, with no sales pressure or unwanted calls—just
              unbiased guidance.
            </p>
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleModalToggle}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInformation;
