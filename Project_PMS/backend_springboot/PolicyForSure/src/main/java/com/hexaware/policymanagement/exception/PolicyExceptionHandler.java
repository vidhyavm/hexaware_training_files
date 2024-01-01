package com.hexaware.policymanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class PolicyExceptionHandler 
{
	@ResponseBody
	@ExceptionHandler({Exception.class})
	public ResponseEntity<String> handleAnyExp(Exception e)
	{
		return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
	}
	

	
}
