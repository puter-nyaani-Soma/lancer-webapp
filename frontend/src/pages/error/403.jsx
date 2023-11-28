import React from "react";

const ForbiddenPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-5xl font-extrabold font-varela text-neon">
          403
        </div>
        <p className="text-2xl font-semibold font-poppins text-white">
          You are not authorized.
        </p>
        <p className="text-lg font-poppins text-white">
          You tried to access a page you did not have prior authorization for.
        </p>
      </div>
      <div className="door-frame">
        <div className="door">
          <div className="rectangle"></div>
          <div className="handle"></div>
          <div className="window">
            <div className="eye"></div>
            <div className="eye eye2"></div>
            <div className="leaf"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
