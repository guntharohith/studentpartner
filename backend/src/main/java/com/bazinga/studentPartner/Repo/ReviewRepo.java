package com.bazinga.studentPartner.Repo;

import com.bazinga.studentPartner.Entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review,Integer> {
}
