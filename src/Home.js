import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        width: "15%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "4%",
      }}
    >
      <Link to="/calculator">Calculator</Link>
      <Link to="/userform">UserForm</Link>
    </div>
  );
};

export default Home;
