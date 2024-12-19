// "use client";
// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import Image from "next/image";
// import termLife4 from "../../assets/term-life-4.png";

// const faqs = [
//   {
//     question: "  What is PolicyScanner, and how does it work?",
//     answer: `PolicyScanner is an online life insurance brokerage platform that
//                 Kitchener Ontario, and registered under FSRA.`,
//   },
//   {
//     question:
//       "What makes PolicyScanner different from other online life insurance brokers?",
//     answer: `PolicyScanner is an online life insurance brokerage platform the
//                   offer. We are a proudly 100% Canadian company, headquartered in
//               Kitchener Ontario, and registered under FSRA.`,
//   },
//   {
//     question: "Does PolicyScanner work with insurance companies directly?",
//     answer:
//       "Yes, we work directly with leading insurance companies to ensure the best service.",
//   },
//   {
//     question: "What types of insurance does PolicyScanner offer?",
//     answer:
//       "We offer term life insurance, whole life insurance, critical illness insurance, and mortgage protection.",
//   },
// ];
// const TermLifeFaq2 = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <section className="w-full h-max  bg-foreground2 gap-[3rem] px-[80px] py-[60px] flex justify-center items-center flex-col">
//       <div className="w-[1140px] h-full flex justify-center items-center flex-col ">
//         <div className="w-full h-max flex flex-col justify-start items-center  gap-[1rem]">
//           <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
//             How much coverage do you need?{" "}
//           </h2>
//           <p className="w-full text-left text-dg text-halfBlack">
//             When determining how much term life insurance coverage you need,
//             it's important to analyze your family’s future financial needs.
//             Whether you’re comparing term life insurance quotes or calculating
//             life insurance premiums. The following factors will help you choose
//             the best term life insurance in Canada.
//           </p>
//         </div>
//         <div className="w-full h-[80vh flex justify-between mt-[2rem] items-center gap-[3rem]">
//           <div className="w-full h-full flex justify-center  items-center gap-[2rem] flex-col ">
//             <ul className="flex w-full h-max flex-col justify-center items-start gap-[4px]  px-[0rem] bullets text-dg text-halfBlack ">
//               <li>Future mortgage or rental payments</li>
//               <li>Living costs to maintain a similar quality of life</li>
//               <li>Mortgage protection for your loved ones</li>
//               <li>An inheritance for your loved ones.</li>
//             </ul>
//             <h3 className=" font-semibold text-[22px] text-left w-full">
//               Optional riders for term life insurance
//             </h3>
//             <div className="w-full relative left-[-20px] ">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="w-full  gap-[3rem] border-b-2 mb-2 border-solid border-gray-300 "
//                 >
//                   <Accordion
//                     expanded={expanded === `panel${index}`}
//                     onChange={handleChange(`panel${index}`)}
//                     elevation={0}
//                     square
//                   >
//                     <AccordionSummary
//                       className="bg-foreground2"
//                       expandIcon={
//                         expanded === `panel${index}` ? (
//                           <RemoveIcon className="text-halfBlack text-[25px]" />
//                         ) : (
//                           <AddIcon className="text-halfBlack text-[25px]" />
//                         )
//                       }
//                       aria-controls={`panel${index}d-content`}
//                       id={`panel${index}d-header`}
//                     >
//                       <Typography className="w-full text-[18px] text-left font-medium ">
//                         {faq.question}
//                       </Typography>
//                     </AccordionSummary>
//                     <AccordionDetails className="bg-foreground2">
//                       <Typography className="w-full h-max flex justify-start pb-[5rem] bg-foreground2 items-start font-normal p-[40px] px-0 text-left rounded-xl">
//                         {faq.answer}
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-full h-full flex justify-center items-center">
//             <div className="w-[400px] flex-shrink-0">
//               <Image
//                 src={termLife4}
//                 objectFit="cover"
//                 objectPosition="center"
//                 width={486}
//                 height={476}
//                 alt="What are the types of whole life insurance? (Change)"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TermLifeFaq2;
import React from "react";
import { ChevronDown } from "lucide-react";

const InsuranceCoverageInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">
            How much coverage do you need?
          </h2>
          <p className="text-gray-700 mt-2">
            When determining how much term life insurance coverage you need,
            it's important to analyze your family's future financial needs.
            Whether you're comparing term life insurance quotes or calculating
            life insurance premiums, the following factors will help you choose
            the best term life insurance in Canada.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Factors Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-teal-200 pb-2 mb-4">
                Key Factors to Consider
              </h3>
              <ul className="space-y-3">
                {[
                  "Future mortgage or rental payments",
                  "Living costs to maintain a similar quality of life",
                  "Mortgage protection for your loved ones",
                  "An inheritance for your loved ones",
                ].map((factor, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-700 font-medium">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Riders Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-teal-200 pb-2 mb-4">
                Riders Available with Term Life Insurance Policies
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <strong>Critical Illness Insurance Rider:</strong> It provides
                  a lump-sum amount if you are diagnosed with any of the covered
                  terminal illnesses.
                </li>
                <li className="text-gray-700">
                  <strong>Disability Insurance Rider:</strong> It helps to
                  protect your income in the event of a long-term disability.
                  This provides monthly income during hardship.
                </li>
                <li className="text-gray-700">
                  <strong>Children’s Insurance Rider:</strong> If you want to
                  add your children to your existing term insurance policy, the
                  easiest way is to add them as a rider.
                </li>
                <li className="text-gray-700">
                  <strong>Accidental Death Insurance Rider:</strong> The
                  accidental death insurance rider provides an additional payout
                  on top of the contracted term life insurance amount if the
                  death is caused by an accident.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCoverageInfo;

/* 


"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  InputAdornment,
  Select,
  FormControl,
  InputLabel,
  Box,
  FormHelperText,
  Grid,
  Divider,
  Container,
  Paper,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useParams, useRouter } from "next/navigation";
import Loading from "app/loading";
import {
  editProperty,
  editPropertyInterface,
  getSingleProperty,
} from "api/prop";
import { Property } from "app/Redux/features/propertySlice";
import { ArrowBackIos, ArrowBackIosNew } from "@mui/icons-material";

interface StyledTextFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | boolean;
  InputProps?: object;
}

const PROPERTY_TYPES = [
  "Villa",
  "Apartment",
  "Office",
  "Townhouse",
  "Warehouse",
];

interface StyledPaperProps {
  children: ReactNode;
}

const StyledPaper: React.FC<StyledPaperProps> = ({ children }) => (
  <Paper
    elevation={0}
    sx={{
      padding: "2rem",
      marginBottom: "2rem",
      borderRadius: "12px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
    }}
  >
    {children}
  </Paper>
);

const StyledTextField: React.FC<StyledTextFieldProps> = (props) => (
  <TextField
    {...props}
    variant="outlined"
    InputProps={{
      sx: {
        borderRadius: "8px",
        backgroundColor: "white",
      },
      ...props.InputProps,
    }}
    InputLabelProps={{
      sx: { fontFamily: "Roboto, sans-serif" },
    }}
    fullWidth
  />
);

interface ImageUploadBoxProps {
  preview: string | null;
  onClick: () => void;
}

const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({
  preview,
  onClick,
}) => (
  <Box
    onClick={onClick}
    sx={{
      width: "100%",
      height: "250px",
      border: "2px dashed #d1d5db",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "#f9fafb",
      "&:hover": {
        borderColor: "#319FD4",
        backgroundColor: "#f4f7fb",
      },
    }}
  >
    {preview ? (
      <img
        src={preview}
        alt="Preview"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    ) : (
      <Box textAlign="center">
        <CloudUploadIcon fontSize="large" sx={{ color: "#8F95B2" }} />
        <Typography variant="body1" color="text.secondary">
          Upload or Drag & Drop Cover Image
        </Typography>
      </Box>
    )}
  </Box>
);

const PublishPropertyPage = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );

  const formik = useFormik({
    initialValues: {
      // propertyType: "",
      propertyId: "",
      name: "",
      noOfUnits: 0,
      slug: "",
      coverImage: "",
      about: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        zipCode: "",
        district: "",
      },
      // features: [] as string[],
      // community: "",
      // propertyManager: "",
      socialLinks: {
        instagram: "",
        facebook: "",
        bookingdotcom: "",
        website: "",
      },
    },
    validationSchema: Yup.object({
      // propertyType: Yup.string().required("Property type is required"),
      slug: Yup.string()
        .matches(
          /^[a-z0-9-]+$/,
          "Domain slug can only contain lowercase letters, numbers, and hyphens."
        )
        .required("Domain slug is required"),
      name: Yup.string().required("Property name is required"),
      noOfUnits: Yup.number()
        .required("Number of units is required")
        .positive("Must be a positive number")
        .integer("Must be an integer"),
      address: Yup.object().shape({
        addressLine1: Yup.string().required("Address Line 1 is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        zipCode: Yup.string()
          .required("Postal Code is required")
          .matches(/^[0-9]{5}$/, "Zip Code must be exactly 5 digits"),
      }),
      // features: Yup.array(),
      community: Yup.string(),
      propertyManager: Yup.string(),
      socialLinks: Yup.object().shape({
        instagram: Yup.string()
          .url("Invalid Instagram URL")
          .notRequired()
          .nullable(),
        facebook: Yup.string()
          .url("Invalid Facebook URL")
          .notRequired()
          .nullable(),
        bookingdotcom: Yup.string()
          .url("Invalid Booking.com URL")
          .notRequired()
          .nullable(),
        website: Yup.string()
          .url("Invalid Website URL")
          .notRequired()
          .nullable(),
      }),
    }),
    onSubmit: async (values: editPropertyInterface) => {
      const data = await editProperty(values);
      if (data && data.success) {
        return router.push("/properties");
      }
    },
  });

  const formatDomain = (domain: string) => {
    if (!domain || typeof domain !== "string") {
      return "Invalid domain format";
    }
    const slug = domain.split(/[/.]/).pop();
    return slug || "";
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCoverImagePreview(result);
        formik.setFieldValue("coverImage", file);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleFeatureToggle = (feature: string) => {
  //   const updatedFeatures = formik.values.features.includes(feature)
  //     ? formik.values.features.filter((f) => f !== feature)
  //     : [...formik.values.features, feature];
  //   formik.setFieldValue("features", updatedFeatures);
  // };

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await getSingleProperty(id as string);
      if (data?.success && data.data !== null) {
        setLoading(false);
        console.log(data.data);
        formik.setValues({
          ...formik.values,
          name: data.data?.name || "",
          noOfUnits: data.data?.noOfUnits || 0,
          slug: formatDomain(data.data?.domain || ""),
          propertyId: data.data?.id || "",
          about: data.data?.about || "",
          address: data.data?.address || "",
          coverImage: data.data?.coverImage || "",
        });
        setProperty(data.data);
      } else {
        router.push("/properties");
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!property) {
    router.push("/properties");
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <StyledPaper>
        <Box display="flex" alignItems="center" mb={4}>
          <Button
            startIcon={<ArrowBackIosNew />}
            sx={{
              backgroundColor: "#E0E3EB",
              color: "#333333",
              "&:hover": { backgroundColor: "#d5dae3" },
              borderRadius: "8px",
            }}
          >
            Back
          </Button>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="text.primary"
            ml={2}
          >
            Publish Your Property
          </Typography>
        </Box>

        <form>
          <Box mb={3}>
            <ImageUploadBox
              preview={coverImagePreview}
              onClick={() =>
                document.getElementById("coverImageInput")?.click()
              }
            />
            <input
              type="file"
              id="coverImageInput"
              hidden
              accept="image/*"
              onChange={handleCoverImageChange}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Domain Slug" name="slug" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Property Name" name="name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                label="Number of Units"
                type="number"
                name="noOfUnits"
              />
            </Grid>
          </Grid>

          <Typography variant="h6" mt={4} mb={2}>
            Address
          </Typography>
          <Divider />
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Address Line 1" name="addressLine1" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Address Line 2" name="addressLine2" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField label="City" name="city" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Postal Code" name="zipCode" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField label="Country" name="country" />
            </Grid>
          </Grid>

          <Typography variant="h6" mt={4} mb={2}>
            Social Links
          </Typography>
          <Divider />
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} md={6}>
              <StyledTextField
                label="Instagram"
                name="instagram"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstagramIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                label="Facebook"
                name="facebook"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                label="Booking.com"
                name="bookingdotcom"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PublicIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                label="Website"
                name="website"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Box mt={4} textAlign="right">

            <Button
type="submit"
variant="contained"
              color="primary"
              size="large"
              sx={{ paddingX: "2rem", borderRadius: "8px" }}
            >
              Publish Property
            </Button>
          </Box>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default PublishPropertyPage;

*/
