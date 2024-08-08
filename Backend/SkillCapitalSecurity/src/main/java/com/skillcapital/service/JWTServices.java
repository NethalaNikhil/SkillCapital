package com.skillcapital.service;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;
@Service
public class JWTServices {

	private String secretKey = "";
	public JWTServices()
	{
		try {
			KeyGenerator key = KeyGenerator.getInstance("HmacSHA256"); 
			SecretKey value  = key.generateKey();// genereate key and returns secteykey type
			secretKey = Base64.getEncoder().encodeToString(value.getEncoded()); // encode this as string
		} catch (NoSuchAlgorithmException e) { 
			e.printStackTrace();
		}
	}
	public String generateToken(String username) 
	{
		Map<String ,Object> claims = new HashMap<>();
		return Jwts.builder()
                .claims()
                .add(claims) // per particular map we are adding 
                .subject(username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+1000*30*60))
                .and()
                .signWith(getKey())
                .compact(); //generate token 
	}
	private Key getKey() {
		byte[] keyBytes = Decoders.BASE64.decode(secretKey); // covert string into bytes since hmacShaKeyFor accpets only byte
		return Keys.hmacShaKeyFor(keyBytes);
	}

}
