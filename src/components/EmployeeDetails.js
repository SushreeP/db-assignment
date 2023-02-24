import { Card } from "@mui/material";

const EmployeeDetails = ({ employee }) => {
  return (
    <Card variant="outlined" className="empdetails">
      <p className="empname">{`${employee.firstName} ${employee.lastName}`}</p>
      <p>
        Contact : {employee.department === "IT" ? employee.tel : employee.email}
      </p>
      <p>Department : {employee.department}</p>
    </Card>
  );
};

export default EmployeeDetails;
