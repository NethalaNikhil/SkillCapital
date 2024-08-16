package com.skillcapital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.skillcapital.model.Users;
import com.skillcapital.service.UserServices;

@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	private UserServices service;
	
	@PostMapping("/register")
	public ResponseEntity <Users> register(@RequestBody Users user)
	{
		
		return new ResponseEntity<>(service.register(user),HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity <String> login(@RequestBody Users user)
	{
		return new ResponseEntity<>(service.verify(user),HttpStatus.CREATED);
	}
	
	@GetMapping("/loginDetails")
	public ResponseEntity<List<Users>> getAllUsers(){
		return new ResponseEntity<>(service.getAllUsers(),HttpStatus.OK);
	}
	
	@GetMapping("/loginDetails/{id}")
	public ResponseEntity<Users> getUserById(@PathVariable int id){
		Users user = service.getUserById(id);
		if(user !=null)
		{
			return new ResponseEntity<>(user,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(user,HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping("/loginDetails/update")
	public ResponseEntity<Users> UpdateUser(@RequestBody Users user)
	{
		return new ResponseEntity<>(service.UpdateUser(user),HttpStatus.OK);
	}

	@DeleteMapping("/loginDetails/{id}")
	public ResponseEntity <String> DeleteUser(@PathVariable int id) {
		service.DeleteUserById(id);
		return new ResponseEntity<> ("User Deleted Sucessfully",HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/hello")
	 public String sayHello(){
		return "Hello world!";
	    }

}
