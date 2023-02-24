import React, { useState } from "react";
import "./App.css";
import EmployeeDisplay from "./components/EmployeeDisplay";
import SearchComponent from "./components/SearchComponent";
import employeeList from "./data";
import { Button } from "@mui/material";

function App() {
  const [displayList, setDisplayList] = useState(employeeList);

  // Functionality 3
  const handleSubmit = () => {
    console.log(displayList);
  };

  return (
    <div className="App">
      <header>
        <div>
          <p>Deutschbank Assignment</p>
        </div>
      </header>
      <section>
        {/* Functionality 2 */}
        <SearchComponent handleSearchResults={setDisplayList} />
        <Button variant="text" className="submit-btn" onClick={handleSubmit}>
          Submit
        </Button>
        {/* <div className="submit">
          
        </div> */}
      </section>
      <main>
        {/* Functionality 1 */}
        <EmployeeDisplay data={displayList} />
      </main>
      <footer>
        <div>
          <p>
            &copy; Sushree Mohanty, Feb 2023 | for evaluation purposes by
            Deutsche bank
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
