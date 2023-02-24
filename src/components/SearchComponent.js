import { useState } from "react";
import { Button } from "@mui/material";
import employeeList from "../data";

const SearchComponent = ({ handleSearchResults }) => {
  const [searchtext, setSearchtext] = useState("");
  const resetSearchText = () => {
    setSearchtext("");
  };

  const handleSearch = (key) => {
    const results = employeeList.filter((employee) =>
      (employee.firstName + employee.lastName)
        .toLowerCase()
        .includes(key.toLowerCase())
    );
    handleSearchResults(results);
    resetSearchText();
  };

  return (
    <div className="search-component">
      <div>
        <input
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
        />
      </div>
      <Button
        variant="text"
        className="search-btn"
        onClick={() => handleSearch(searchtext)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchComponent;
