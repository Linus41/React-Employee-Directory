import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchBy from "./components/SearchBy"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    department: "",
    employeeName: ""
  };
  
  handleDeptChange = event => {
    const department = event.target.value
    console.log(department)
    // should change the state to only include employees with selected department 
    this.setState({
      department: department
    });
    
  };

  handleEmpChange = event => {
    const employeeName = event.target.value
    console.log(employeeName)
    // should change the state to only include employees with selected department 
    this.setState({
      employeeName: employeeName
    });
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <SearchBy 
        deptChange={this.handleDeptChange}
        employeeName={this.handleEmpChange}
        employees={this.state.employees}></SearchBy>
        
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            department={employee.department}
            location={employee.location}
            
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
