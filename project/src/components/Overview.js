// src/components/Overview.js
import React from "react";
import InfoSection from "./InfoSection";

const Overview = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col items-center justify-center bg-blue-200  text-lg shadow-xl rounded-lg w-[60%] px-5 py-7 space-y-4">
        <h2 className="font-bold text-3xl underline">Overview of the System</h2>
        <InfoSection />
      </div>
    </div>
  );
};

export default Overview;
