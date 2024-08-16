package com.skillcapital.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skillcapital.model.CreateNewLead;
import com.skillcapital.repository.LeadRepo;


@Service
public class CreateNewLeadService {

	@Autowired
	private LeadRepo repo;
	
	public List<CreateNewLead> getAllLeads()
	{
		return repo.findAll();
	}
	
	public CreateNewLead createLead(CreateNewLead createNewLead) {
		return repo.save(createNewLead);
	}
	
    public CreateNewLead UpdateLead(CreateNewLead createNewLead) {
		
		return repo.save(createNewLead);
	}
    
    public void deleteLead(Integer id)
	{
		repo.deleteById(id);;
	}

	public CreateNewLead getLeadById(int id) {
		
		return repo.findById(id).orElse(null);
	}
}
