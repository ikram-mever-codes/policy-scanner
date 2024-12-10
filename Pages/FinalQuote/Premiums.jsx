import React, { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import logo from "../../assets/canada-life.png";
import "./Head.css";
import { Heart, Brain, Activity, AlertCircle, XCircle } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const Premiums = ({ open, onClose }) => {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("death");
  const [coverage, setCoverage] = useState(500000);
  const [age, setAge] = useState(30);
  const [term, setTerm] = useState(20);

  const rates = {
    ciBase: 0.5,
    ciRopDeath: 0.65,
    ciRopExpiry: 0.8,
  };
  const coverageOptions = [100000, 250000, 500000, 750000, 1000000];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const calculateMonthlyPremiums = () => ({
    ciOnly: (rates.ciBase * coverage) / 1000,
    ciRopDeath: (rates.ciRopDeath * coverage) / 1000,
    ciRopExpiry: (rates.ciRopExpiry * coverage) / 1000,
  });

  const premiums = calculateMonthlyPremiums();

  const getSelectedPremiums = () => {
    const base = {
      monthly: premiums.ciOnly,
      annual: premiums.ciOnly * 12,
      total: premiums.ciOnly * 12 * term,
    };

    const rop =
      activeTab === "death"
        ? {
            monthly: premiums.ciRopDeath,
            annual: premiums.ciRopDeath * 12,
            total: premiums.ciRopDeath * 12 * term,
          }
        : {
            monthly: premiums.ciRopExpiry,
            annual: premiums.ciRopExpiry * 12,
            total: premiums.ciRopExpiry * 12 * term,
          };

    return { base, rop };
  };

  const currentPremiums = getSelectedPremiums();

  const getComparisonData = () => [
    {
      name: "CI Only",
      monthly: currentPremiums.base.monthly,
      annual: currentPremiums.base.annual,
      total: currentPremiums.base.total,
      color: "#1976d2",
      ropAdd: 0,
    },
    {
      name: activeTab === "death" ? "CI + ROP Death" : "CI + ROP Expiry",
      monthly: currentPremiums.rop.monthly,
      annual: currentPremiums.rop.annual,
      total: currentPremiums.rop.total,
      color: activeTab === "death" ? "#2e7d32" : "#9c27b0",
      ropAdd: currentPremiums.rop.monthly - currentPremiums.base.monthly,
    },
  ];

  const CustomBarLabel = (props) => {
    const { x, y, width, height, value, ropAdd } = props;
    return (
      <g>
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight: 500 }}
        >
          ${value.toFixed(2)}
        </text>
        {ropAdd > 0 && (
          <text
            x={x + width / 2}
            y={y + height / 3}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "0.875rem", fill: "#666" }}
          >
            ROP add amount: ${ropAdd.toFixed(2)}
          </text>
        )}
      </g>
    );
  };

  if (!isClient) return null;

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-screen w-[720px] z-[10000] bg-gray-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XCircle size={24} />
          </button>
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
          <div className="w-[24px]" />
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Tabs */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              variant={activeTab === "death" ? "contained" : "outlined"}
              onClick={() => setActiveTab("death")}
              startIcon={<FavoriteIcon />}
            >
              CI with ROP on Death
            </Button>
            <Button
              variant={activeTab === "expiry" ? "contained" : "outlined"}
              onClick={() => setActiveTab("expiry")}
              startIcon={<CalendarTodayIcon />}
            >
              CI with ROP on Expiry
            </Button>
          </Box>

          {/* Comparison Chart */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <HelpOutlineIcon color="primary" />
                Understanding Return of Premium (ROP)
              </Typography>
              <Paper sx={{ p: 2, bgcolor: "grey.50" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  {activeTab === "death" ? (
                    <FavoriteIcon color="error" fontSize="small" />
                  ) : (
                    <CalendarTodayIcon color="primary" fontSize="small" />
                  )}
                  {activeTab === "death"
                    ? "CI with ROP on Death"
                    : "CI with ROP on Expiry"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activeTab === "death"
                    ? `With this option, if you pass away during the policy term without having made a Critical Illness claim, all premiums paid will be returned to your beneficiaries. If you make a CI claim, you'll receive the Critical Illness benefit, and the policy ends with no return of premiums.`
                    : `If you survive the entire policy term without making a Critical Illness claim, all premiums paid will be returned to you at policy expiry. If you make a CI claim at any point, you'll receive the Critical Illness benefit, and the policy ends with no return of premiums.`}
                </Typography>
              </Paper>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card>
            <div className="flex items-center gap-3 my-2 mt-[1.5rem] px-4">
              <label className="font-medium">Select Coverage Amount:</label>
              <select
                className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
              >
                {coverageOptions.map((amount) => (
                  <option key={amount} value={amount}>
                    ${amount.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box>
                  <Box sx={{ height: 320 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={getComparisonData()}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis
                          label={{
                            value: "Monthly Premium ($)",
                            angle: -90,
                            position: "insideLeft",
                          }}
                        />
                        <Bar dataKey="monthly" fill="#1976d2">
                          <LabelList
                            dataKey="monthly"
                            position="center"
                            content={<CustomBarLabel />}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>

                {/* Premium Breakdown */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, bgcolor: "grey.50" }}>
                      <Typography
                        variant="subtitle1"
                        color="primary.main"
                        sx={{ mb: 2 }}
                      >
                        CI Only
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: 1,
                            borderColor: "divider",
                            pb: 1,
                          }}
                        >
                          <Typography>Monthly Premium:</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.base.monthly.toFixed(2)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: 1,
                            borderColor: "divider",
                            pb: 1,
                          }}
                        >
                          <Typography>Annual Premium:</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.base.annual.toFixed(2)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>Total ({term} years):</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.base.total.toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, bgcolor: "grey.50" }}>
                      <Typography
                        variant="subtitle1"
                        color="primary.main"
                        sx={{ mb: 2 }}
                      >
                        {activeTab === "death"
                          ? "CI + ROP Death"
                          : "CI + ROP Expiry"}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: 1,
                            borderColor: "divider",
                            pb: 1,
                          }}
                        >
                          <Typography>Monthly Premium:</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.rop.monthly.toFixed(2)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: 1,
                            borderColor: "divider",
                            pb: 1,
                          }}
                        >
                          <Typography>Annual Premium:</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.rop.annual.toFixed(2)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>Total ({term} years):</Typography>
                          <Typography fontWeight={500} color="primary.main">
                            ${currentPremiums.rop.total.toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>

                {/* Key Benefits */}
                <Paper sx={{ p: 2, bgcolor: "#e3f2fd" }}>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    Key Benefits
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                      <Typography>
                        {activeTab === "death"
                          ? `Returns all premiums ($${currentPremiums.rop.total.toFixed(
                              2
                            )}) if death occurs without CI claim`
                          : `Returns all premiums ($${currentPremiums.rop.total.toFixed(
                              2
                            )}) at policy expiry if no CI claim`}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                      <Typography>
                        Additional cost: $
                        {(
                          currentPremiums.rop.monthly -
                          currentPremiums.base.monthly
                        ).toFixed(2)}{" "}
                        per month
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Premiums;
