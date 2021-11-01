package com.bazinga.studentPartner.Services;

import com.bazinga.studentPartner.Entities.Review;
import com.bazinga.studentPartner.Repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepo reviewRepo;

    public Review saveReview(Review review){
        return reviewRepo.save(review);
    }
}
