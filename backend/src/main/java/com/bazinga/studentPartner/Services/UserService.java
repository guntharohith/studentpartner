package com.bazinga.studentPartner.Services;

import com.bazinga.studentPartner.Entities.UserEntity;
import com.bazinga.studentPartner.Repo.UserRepo;
import com.bazinga.studentPartner.models.CustomUserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    public void createUser(UserEntity user) {
        userRepo.save(user);
    }


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepo.findByEmail(s);
        if (user == null) {
            throw new UsernameNotFoundException("User not found !!");
        } else {
            return new CustomUserModel(user);
        }
    }


    public UserEntity fetchUser(String email) {
        return userRepo.findByEmail(email);
    }
}