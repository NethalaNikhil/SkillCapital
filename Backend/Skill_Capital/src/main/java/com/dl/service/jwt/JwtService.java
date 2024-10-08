package com.dl.service.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

<<<<<<< HEAD
	 private static final Logger logger = LoggerFactory.getLogger(JwtService.class);

	    @Value("${spring.app.jwtSecret}")
	    private String jwtSecret;

	    @Value("${spring.app.jwtExpirationMs}")
	    private int jwtExpirationMs;
    
    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public String extractId(String token){return  extractClaim(token, Claims::getId);}

    public String generateToken(Map<String, Object> extraClaims,
            UserDetails userDetails){
        return Jwts.builder().setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000* 60 * 24))
=======
    private static final Logger logger = LoggerFactory.getLogger(JwtService.class);

    @Value("${spring.app.jwtSecret}")
    private String jwtSecret;

    @Value("${spring.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    @Value("${app.jwtExpirationInMsRememberMe}")
    private int jwtExpirationInMsRememberMe;

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String extractId(String token) {
        return extractClaim(token, Claims::getId);
    }

    public String generateToken(Map<String, Object> extraClaims,
            UserDetails userDetails) {
        return Jwts.builder().setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
>>>>>>> giri
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

<<<<<<< HEAD
    public boolean isTokenValid(String token, UserDetails userDetails){
=======
    public boolean isTokenValid(String token, UserDetails userDetails) {
>>>>>>> giri
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

<<<<<<< HEAD
    public boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token){
        return  extractClaim(token, Claims::getExpiration);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
=======
    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
>>>>>>> giri
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

<<<<<<< HEAD
    private Claims extractAllClaims(String token){
=======
    private Claims extractAllClaims(String token) {
>>>>>>> giri
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

<<<<<<< HEAD
    private Key getSignInKey(){
=======
    private Key getSignInKey() {
>>>>>>> giri
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
