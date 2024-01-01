package com.hexaware.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.restapi.entity.Employee;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee,Integer>{
	
	

}
