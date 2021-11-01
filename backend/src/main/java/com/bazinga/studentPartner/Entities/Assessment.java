package com.bazinga.studentPartner.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity(name="assessments")
public class Assessment {
    @Id
    @GeneratedValue
    private int assessmentId;
    private String assessmentLink;
    @JsonIgnore
    @ManyToOne
    private Topic topic;

    public Assessment(String assessmentLink, Topic topic) {
        this.assessmentLink = assessmentLink;
        this.topic = topic;
    }

    public Assessment(){
        super();
    }

    public int getAssessmentId() {
        return assessmentId;
    }

    public void setAssessmentId(int assessmentId) {
        this.assessmentId = assessmentId;
    }

    public String getAssessmentLink() {
        return assessmentLink;
    }

    public void setAssessmentLink(String assessmentLink) {
        this.assessmentLink = assessmentLink;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }

    //
//    public Assessment(String assessmentLink, int topicId) {
//        this.assessmentLink = assessmentLink;
//        this.topicId = topicId;
//    }
//
//    public Assessment() {
//        super();
//    }
//
//    public int getAssessmentId() {
//        return assessmentId;
//    }
//
//    public void setAssessmentId(int assessmentId) {
//        this.assessmentId = assessmentId;
//    }
//
//    public String getAssessmentLink() {
//        return assessmentLink;
//    }
//
//    public void setAssessmentLink(String assessmentLink) {
//        this.assessmentLink = assessmentLink;
//    }
//
//    public int getTopicId() {
//        return topicId;
//    }
//
//    public void setTopicId(int topicId) {
//        this.topicId = topicId;
//    }
}
