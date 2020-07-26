import React, { useState } from "react";
import PropTypes from "prop-types";

function CategorySearch({ onSubmitSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    if (!onSubmitSearch) return;
    onSubmitSearch(e.target.value);
  };
  return (
    <div id="dataTable_filter" className="dataTables_filter">
      <label>
        Search:
        <input
          type="search"
          className="form-control form-control-sm"
          aria-controls="dataTable"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </label>
    </div>
  );
}

CategorySearch.propTypes = {
  onSubmitSearch: PropTypes.func,
};

CategorySearch.defaultProps = {
  onSubmitSearch: null,
};

export default CategorySearch;
