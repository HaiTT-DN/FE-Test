/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchArea from "./SearchArea";

const Nav = (props) => {
  const { handleSubmit, handleChange, handleSort } = props;
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <a href="#" className="navbar-brand">
        Front End test blogs
      </a>
      <SearchArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSort={handleSort}
      />
    </nav>
  );
};

export default Nav;
