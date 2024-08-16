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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillcapital.model.CreateNewLead;
import com.skillcapital.model.Users;
import com.skillcapital.service.CreateNewLeadService;

@CrossOrigin
@RestController
@RequestMapping("/leads")
public class LeadController {
	
	@Autowired 
	private CreateNewLeadService service;
	
	
	@GetMapping("/getAllLeads")
    public ResponseEntity<List<CreateNewLead>> getAllLeads()
    {
		return new ResponseEntity<>(service.getAllLeads(),HttpStatus.OK);
    }
	
	@GetMapping("/getLeadById/{id}")
	public ResponseEntity<CreateNewLead> getLeadById(@PathVariable int id)
	{
		CreateNewLead lead = service.getLeadById(id);
		if(lead !=null)
		{
			return new ResponseEntity<>(lead,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(lead,HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/createLead")
	public ResponseEntity <CreateNewLead> createLead(@RequestBody CreateNewLead createNewLead)
	{
		return new ResponseEntity<>(service.createLead(createNewLead),HttpStatus.CREATED);
	}
	
	@PutMapping("/updateLead")
	public ResponseEntity <CreateNewLead> UpdateLead(@RequestBody CreateNewLead createNewLead)
	{
		return new ResponseEntity<>(service.UpdateLead(createNewLead),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteLead(@PathVariable Integer id)
	{
		service.deleteLead(id);
		return new ResponseEntity<>("Record deleted successfully",HttpStatus.NOT_FOUND);
	}

	
	
	
}
