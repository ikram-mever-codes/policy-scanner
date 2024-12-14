import { Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScheduleACall = ({}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Convert the current time to EST
  const getESTTime = () => {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset();
    const estOffset = 300;
    const estTime = new Date(now.getTime() + (utcOffset - estOffset) * 60000);
    return estTime;
  };

  const generateDates = () => {
    const dates = [];
    const today = getESTTime();
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString(),
      });
    }
    return dates;
  };

  const dates = generateDates();

  const timeSlots = {
    morning: [
      {
        id: "m1",
        time: "09:30 - 11:30",
        icon: "☀️",
        start: "09:30",
        end: "11:30",
      },
      {
        id: "m2",
        time: "11:30 - 13:30",
        icon: "⛅",
        start: "11:30",
        end: "13:30",
      },
    ],
    afternoon: [
      {
        id: "a1",
        time: "13:30 - 15:30",
        icon: "🌤️",
        start: "13:30",
        end: "15:30",
      },
      {
        id: "a2",
        time: "15:30 - 17:30",
        icon: "🌥️",
        start: "15:30",
        end: "17:30",
      },
    ],
    evening: [
      {
        id: "e1",
        time: "17:30 - 19:30",
        icon: "🌆",
        start: "17:30",
        end: "19:30",
      },
      {
        id: "e2",
        time: "19:30 - 21:30",
        icon: "🌙",
        start: "19:30",
        end: "21:30",
      },
    ],
  };

  // Utility to convert time strings to Date objects in EST
  const parseTime = (time) => {
    const [hours, minutes] = time.split(":");
    const now = getESTTime();
    now.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    return now;
  };

  // Check if a time slot has passed in EST
  const isTimeSlotDisabled = (start, end) => {
    if (!selectedDate || selectedDate === getESTTime().getDate().toString()) {
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      return currentTime > endTime;
    }
    return false; // Enable all slots for future dates
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getESTTime());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
              Plan Your Consultation
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Choose a time for your personalized consultation with our expert
            advisor
          </p>

          {/* Date Selection */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-gray-700 font-medium">Select Your Day</h3>
                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full border border-teal-100 flex items-center gap-1">
                  ✨ Available Slots
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {dates.map(({ day, date }) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`
                    p-3 rounded-xl transition-all duration-300
                    ${
                      selectedDate === date
                        ? "bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-lg shadow-teal-500/20 scale-105"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                    }
                  `}
                  >
                    <div className="text-xs opacity-80">{day}</div>
                    <div className="text-lg font-medium">{date}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-3">
              <h3 className="text-gray-700 font-medium">Choose Your Time</h3>
              <div className="flex gap-2 mb-4">
                {["morning", "afternoon", "evening"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimeOfDay(period)}
                    className={`
                    flex-1 px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      timeOfDay === period
                        ? "bg-teal-50 text-teal-700"
                        : "text-gray-500 hover:bg-gray-50"
                    }
                  `}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots[timeOfDay].map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedTime(slot.id)}
                    disabled={isTimeSlotDisabled(slot.start, slot.end)}
                    className={`
                    p-4 rounded-xl transition-all duration-300 flex items-center gap-3 relative
                    ${
                      isTimeSlotDisabled(slot.start, slot.end)
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
                        : selectedTime === slot.id
                        ? "bg-gradient-to-r from-teal-50 to-teal-100 border-teal-200 border-2"
                        : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    }
                  `}
                  >
                    <span className="text-xl">{slot.icon}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {slot.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            className={`
            w-full mt-6 px-4 py-2 rounded-lg transition-all duration-300
            ${
              selectedDate && selectedTime
                ? "bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white shadow-lg shadow-teal-500/20"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
            disabled={!selectedDate || !selectedTime}
          >
            Confirm Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleACall;
