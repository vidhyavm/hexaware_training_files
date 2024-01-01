package com.hexaware.restapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.restapi.dto.EmployeeDTO;
import com.hexaware.restapi.entity.Employee;
import com.hexaware.restapi.repository.EmployeeRepository;


@Service
public class EmployeeServiceImp implements IEmployeeService {

	
	
	private EmployeeRepository repo;
	
	@Autowired
	public EmployeeServiceImp(EmployeeRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Employee addEmployee(EmployeeDTO employeeDTO) {
		Employee employee=new Employee();
		employee.setEmployeeName(employeeDTO.getEmployeeName());
		employee.setSalary(employeeDTO.getSalary());
		return repo.save(employee);
	}

	@Override
	public EmployeeDTO getById(int employeeId) {
		Employee employee=repo.findById(employeeId).orElse(new Employee());
		EmployeeDTO employeeDTO=new EmployeeDTO();
		
		employeeDTO.setEmployeeId(employee.getEmployeeId());
		employeeDTO.setEmployeeName(employee.getEmployeeName());
		employeeDTO.setSalary(employee.getSalary());
		return employeeDTO;
	}

	@Override
	public List<Employee> getAllEmployees() {
		
		return repo.findAll();
	}

}
