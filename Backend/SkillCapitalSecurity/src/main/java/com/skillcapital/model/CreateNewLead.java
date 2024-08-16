package com.skillcapital.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CreateNewLead {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private Integer cc;
	private Long phone;
	private String email;
	private Double feeCouted;
	private LocalDateTime nextFollowUp;
	private String description;
	
	@Enumerated(EnumType.STRING)
	private BatchTiming batchTiming;
	@Enumerated(EnumType.STRING)
	private LeadStatus leadStatus;
	@Enumerated(EnumType.STRING)
	private LeadSource leadSource;
	@Enumerated(EnumType.STRING)
	private Stack stack;
	@Enumerated(EnumType.STRING)
	private Course course;
	@Enumerated(EnumType.STRING)
	private ClassMode classmode;
	
	
	@Getter
	@AllArgsConstructor
	public enum BatchTiming {
	    SEVEN_AM_TO_EIGHT_AM,
	    EIGHT_AM_TO_NINE_AM,
	    NINE_AM_TO_TEN_AM,
	    TEN_AM_TO_ELEVEN_AM,
	    ELEVEN_AM_TO_TWELVE_PM,
	    TWELVE_PM_TO_ONE_PM,
	    ONE_PM_TO_TWO_PM,
	    TWO_PM_TO_THREE_PM,
	    THREE_PM_TO_FOUR_PM,
	    FOUR_PM_TO_FIVE_PM,
	    FIVE_PM_TO_SIX_PM,
	    SIX_PM_TO_SEVEN_PM,
	    SEVEN_PM_TO_EIGHT_PM,
	    EIGHT_PM_TO_NINE_PM;
	}
	@Getter
	@AllArgsConstructor
	public enum LeadStatus{
		NotContacted,
		Attempted,
		WarmLead,
		ColdLead
	}
	@Getter
	@AllArgsConstructor
	public enum LeadSource{
		 None,
	     WalkIn,
	     StudentReferral,
	     Demo,
	     WebSite,
	     WebsiteChat,
	     InboundCall,
	     GoogleAdWords,
	     FacebookAds,
	     GoogleMyBusiness,
	     WhatsAppDigitalLync		
	}
	@Getter
	@AllArgsConstructor
	public enum Stack{
		LifeSkills,
		StudyAboard,
		HR
	}
	@Getter
	@AllArgsConstructor
	public enum Course{
		HRManager,
		HRBusinessPartner,
		HRGeneralistCoreHR,
		SpokenEnglish,
		PublicSpeaking,
		CommunicationSkills,
		SoftSkills,
		PersonalityDevelopment,
		Aptitude,
		IELTS,
		TOEFL,
		PTE,
		GRE,
		GMAT,
		RecruitmentSpecialist,
		PayrollSpecialist,
		LearningAndDevelopment,
		Others,
		Finance,
		CompetitiveExams
	}
	@Getter
	@AllArgsConstructor
	public enum ClassMode{
		InternationalOnline,
		IndiaOnline,
		BLRClassRoom,
		HYDClassRoom
	}
	
	

}
