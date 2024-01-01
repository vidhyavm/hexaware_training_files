package com.hexaware.restapi.service;

import java.util.List;

import com.hexaware.restapi.dto.EmployeeDTO;
import com.hexaware.restapi.entity.Employee;

public interface IEmployeeService {

	public Employee addEmployee(EmployeeDTO employeeDTO);
	
	public EmployeeDTO getById(int employeeId);
	
	public List<Employee> getAllEmployees();
}
