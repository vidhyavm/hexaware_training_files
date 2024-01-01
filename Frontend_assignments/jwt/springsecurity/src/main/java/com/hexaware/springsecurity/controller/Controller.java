package com.hexaware.springsecurity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
 @GetMapping("/hello")
 public String sayHello() {
	 return "hello friends!";
	 
 }
}
