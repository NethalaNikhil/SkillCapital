package com.skillcapital.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity // for our own security config

public class SecurityConfig {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtFilter jwtFilter;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf(customizer -> customizer.disable());
		http.authorizeHttpRequests(request->request
				.requestMatchers("register","login") // this will skip authentication
				.permitAll()
				.anyRequest().authenticated()); // others authenticate
		
//		http.formLogin(Customizer.withDefaults()); // for default form in postman return frontend code
		http.httpBasic(Customizer.withDefaults()); // for postman
		http.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)); // for every refresh new sessionid will come 
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class); // first jwtFilter then UsernameAut
		return http.build();
		
	}
	
	//to verify username and password by our own
	@Bean // it will be in the cointainer then spring will pick
	public UserDetailsService userDetailsService() {
		return new InMemoryUserDetailsManager();
	}
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
		provider.setUserDetailsService(userDetailsService);
		return provider;
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
}
