package com.bazinga.studentPartner.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity(name="topic")
public class Topic {
    @Id
    @GeneratedValue
    private int topicId;
    private String topicName;
    @Lob
    private String topicDes;

    @JsonIgnore
    @ManyToOne
    private LearningPath learningPath;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "topic")
    private List<Resource> resources;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "topic")
    private List<Assessment> assessments;

    public Topic(String topicName, String topicDes, LearningPath learningPath, List<Resource> resources, List<Assessment> assessments) {
        this.topicName = topicName;
        this.topicDes = topicDes;
        this.learningPath = learningPath;
        this.resources = resources;
        this.assessments = assessments;
    }

    public Topic(){
        super();
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getTopicDes() {
        return topicDes;
    }

    public void setTopicDes(String topicDes) {
        this.topicDes = topicDes;
    }

    public LearningPath getLearningPath() {
        return learningPath;
    }

    public void setLearningPath(LearningPath learningPath) {
        this.learningPath = learningPath;
    }

    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }

    public List<Assessment> getAssessments() {
        return assessments;
    }

    public void setAssessments(List<Assessment> assessments) {
        this.assessments = assessments;
    }

    //    public Topic(String topicName, String topicDes, int learningPathId) {
//        this.topicName = topicName;
//        this.topicDes = topicDes;
//        this.learningPathId = learningPathId;
//    }
//
//    public Topic(){
//        super();
//    }
//
//    public int getTopicId() {
//        return topicId;
//    }
//
//    public void setTopicId(int topicId) {
//        this.topicId = topicId;
//    }
//
//    public String getTopicName() {
//        return topicName;
//    }
//
//    public void setTopicName(String topicName) {
//        this.topicName = topicName;
//    }
//
//    public String getTopicDes() {
//        return topicDes;
//    }
//
//    public void setTopicDes(String topicDes) {
//        this.topicDes = topicDes;
//    }
//
//    public int getLearningPathId() {
//        return learningPathId;
//    }
//
//    public void setLearningPathId(int learningPathId) {
//        this.learningPathId = learningPathId;
//    }

}
