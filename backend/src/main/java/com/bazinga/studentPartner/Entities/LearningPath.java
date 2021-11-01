package com.bazinga.studentPartner.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name="learningPath")
public class LearningPath {
    @Id
    @GeneratedValue
    private int learningPathId;
    private String name;
    private String category;
    private String type;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "learningPath")
    private List<Topic> topics;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(
            referencedColumnName = "email"
    )
    private UserEntity userEntity;

    public LearningPath(String name, String category, String type, UserEntity userEntity) {
        this.name = name;
        this.category = category;
        this.type = type;
        this.userEntity = userEntity;
    }

    public LearningPath(){
        super();
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getLearningPathId() {
        return learningPathId;
    }

    public void setLearningPathId(int learningPathId) {
        this.learningPathId = learningPathId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    //
//    public LearningPath(String name, String category, String type, String email) {
//        this.name = name;
//        this.category = category;
//        this.type = type;
//        this.email = email;
//    }
//
//    public LearningPath(){
//        super();
//    }
//
//    public int getLearningPathId() {
//        return learningPathId;
//    }
//
//    public void setLearningPathId(int learningPathId) {
//        this.learningPathId = learningPathId;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }
//
//    public String getType() {
//        return type;
//    }
//
//    public void setType(String type) {
//        this.type = type;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
}
