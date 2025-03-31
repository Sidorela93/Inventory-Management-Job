import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchTerm } from "../redux/jobsiteSlice";

function SearchBar() {
  const searchTerm = useSelector((state) => state.jobsites.searchTerm);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search a jobsite"
      value={searchTerm}
      onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
      className="form-control"
    />
  );
}

export default SearchBar;
