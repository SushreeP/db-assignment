import { Grid } from "@mui/material";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeDisplay = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="no-results-card" margin={2}>
        <p>No Results Found!</p>
      </div>
    );
  }

  return (
    <Grid container spacing={2} padding={2}>
      {data.map((employee) => (
        <Grid item xs={4} key={employee.id}>
          <EmployeeDetails employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeDisplay;
