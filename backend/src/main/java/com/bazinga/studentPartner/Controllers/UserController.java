package com.bazinga.studentPartner.Controllers;

import com.bazinga.studentPartner.Entities.UserEntity;
import com.bazinga.studentPartner.Services.UserService;
import com.bazinga.studentPartner.models.JwtRequest;
import com.bazinga.studentPartner.models.JwtResponse;
import com.bazinga.studentPartner.utility.JwtUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtility jwtUtility;

    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    public void addUser(@RequestBody UserEntity userEntity) throws Exception{
        UserEntity user = new UserEntity(userEntity.getEmail(),userEntity.getFirstName(),userEntity.getLastName(),userEntity.getPassword(),true,"user");
        userService.createUser(user);
    }

    @PostMapping("/login")
    public JwtResponse authenticate(@RequestBody JwtRequest user) throws Exception {
        UserEntity userEntity = userService.fetchUser(user.getEmail());
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword())
            );
        }
        catch(BadCredentialsException e){
            throw new Exception("Invalid Credentials" + e);
        }

        final UserDetails userDetails = userService.loadUserByUsername(user.getEmail());
        final String token = jwtUtility.generateToken(userDetails);
        return new JwtResponse(token,userEntity.getFirstName() + " " + userEntity.getLastName());
    }
}
