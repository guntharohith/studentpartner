package com.bazinga.studentPartner.Repo;

import com.bazinga.studentPartner.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity,Integer> {
    public UserEntity findByEmail(String email);

}
