package com.bazinga.studentPartner.Controllers;

import com.bazinga.studentPartner.Entities.Review;
import com.bazinga.studentPartner.Services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @PostMapping("/add-review")
    public Review addReview(@RequestBody Review review, Principal principal){
        review.setEmail(principal.getName());
        return reviewService.saveReview(review);
    }
}
