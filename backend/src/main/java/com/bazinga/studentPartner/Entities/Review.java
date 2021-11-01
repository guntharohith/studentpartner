package com.bazinga.studentPartner.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="reviews")
public class Review {
    @Id
    @GeneratedValue
    private int reviewId;
    private String review;
    private int rating;
    private String email;
    private int publicResourceId;

    public Review(String review, int rating, String email, int publicResourceId) {
        this.review = review;
        this.rating = rating;
        this.email = email;
        this.publicResourceId = publicResourceId;
    }

    public Review(){
        super();
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPublicResourceId() {
        return publicResourceId;
    }

    public void setPublicResourceId(int publicResourceId) {
        this.publicResourceId = publicResourceId;
    }
}
