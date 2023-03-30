import React from "react";
import { Link } from "react-router-dom";
function PageNoutFound() {
  return (
    <div className="section-center">
      <h1>Page Not Found 404 😒</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default PageNoutFound;
