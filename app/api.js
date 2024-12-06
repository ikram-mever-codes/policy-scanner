const BASE_URL = "https://testing.academylearning.ca/api";

const parseCoverage = (coverageStr) => {
  if (coverageStr.endsWith("M")) {
    return parseFloat(coverageStr.replace("M", "")) * 1000000;
  }
  return Number(coverageStr.replace(/,/g, ""));
};

export const uploadPostData = async (quoteData) => {
  try {
    const policy_lead_type = "Request Quote";
    const response = await fetch(`${BASE_URL}/crm/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer bd32cf16101d1cbf1a1dae7035e3febb49417e41`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: quoteData.contactInfo.name,
        email: quoteData.contactInfo.email,
        phone: Number(quoteData.contactInfo.phone),
        gender: quoteData.gender,
        province: quoteData.province,
        smoker: quoteData.smoker,
        dob: quoteData.dob,
        coverage: parseCoverage(quoteData.coverage),
        policy_lead_type,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log(data);
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
