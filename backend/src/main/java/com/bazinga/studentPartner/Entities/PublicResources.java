package com.bazinga.studentPartner.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name="publicResources")
public class PublicResources {
    @Id
    @GeneratedValue
    private int publicResourceId;
    private String category;
    private String des;
    private String link;
    private String review;
    private String rating;
    @JsonIgnore
    @ManyToOne
    private UserEntity userEntity;

    public PublicResources(String category, String des, String link,String review,String rating, UserEntity userEntity) {
        this.category = category;
        this.des = des;
        this.link = link;
        this.review = review;
        this.rating = rating;
        this.userEntity = userEntity;
    }

    public PublicResources(){
        super();
    }

    public int getPublicResourceId() {
        return publicResourceId;
    }

    public void setPublicResourceId(int publicResourceId) {
        this.publicResourceId = publicResourceId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDes() {
        return des;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
}
