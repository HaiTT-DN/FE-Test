import React from "react";

const SearchArea = (props) => {
  const { handleSubmit, handleChange, handleSort } = props;
  return (
    <form className="form-inline" action="" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Search for blog"
        onChange={handleChange}
        aria-label="Search"
      />
      <button
        className="btn btn-primary waves-effect waves-primary my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
      <select
        className="form-select"
        defaultValue="Sort"
        style={{ marginLeft: 10 }}
        onChange={handleSort}
      >
        <option disabled value="Sort">
          Sort
        </option>
        <option value="desc">Oldest</option>
        <option value="asc">Newest</option>
      </select>
    </form>
  );
};

export default SearchArea;
