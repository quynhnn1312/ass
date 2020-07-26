import React from "react";
import PropTypes from "prop-types";

function ShowPerPage({ perPage, onHandlePerPage }) {
  const handleChangeValue = (e) => {
    onHandlePerPage(e.target.value);
  };
  return (
    <label>
      Show{" "}
      <select
        name="dataTable_length"
        aria-controls="dataTable"
        className="custom-select custom-select-sm form-control form-control-sm"
        defaultValue={perPage}
        onChange={handleChangeValue}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>{" "}
      entries
    </label>
  );
}

ShowPerPage.propTypes = {};

export default ShowPerPage;
