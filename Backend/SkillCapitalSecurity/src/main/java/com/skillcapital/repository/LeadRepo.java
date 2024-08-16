package com.skillcapital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillcapital.model.CreateNewLead;

public interface LeadRepo extends JpaRepository<CreateNewLead, Integer> {

}
