package com.skillcapital.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.skillcapital.model.Users;
import com.skillcapital.repository.UserRepo;

@Component
public class DefaultUserInitializer implements CommandLineRunner {
	
	
	@Autowired
    private UserRepo userRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        String defaultUsername = "admin";
        String defaultPassword = "admin";

        // Check if the default user already exists
        if (userRepository.findByUsername(defaultUsername) == null) {
            // Create the default user
            Users defaultUser = new Users();
            defaultUser.setId(1); // Make sure this ID is unique and not used by other users
            defaultUser.setUsername(defaultUsername);
            defaultUser.setPassword(passwordEncoder.encode(defaultPassword)); // Ideally, password should be encoded

            // Save the default user
            userRepository.save(defaultUser);
            System.out.println("Default user created.");
        } else {
            System.out.println("Default user already exists.");
        }
    }
}

