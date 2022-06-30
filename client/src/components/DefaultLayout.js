import React from "react";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>SheyCars</h1>
        </div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};
