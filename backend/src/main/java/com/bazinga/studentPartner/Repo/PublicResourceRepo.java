package com.bazinga.studentPartner.Repo;

import com.bazinga.studentPartner.Entities.PublicResources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PublicResourceRepo extends JpaRepository<PublicResources,Integer> {
}
