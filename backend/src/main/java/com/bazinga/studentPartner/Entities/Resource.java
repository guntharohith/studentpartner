package com.bazinga.studentPartner.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name="resources")
public class Resource {
    @Id
    @GeneratedValue
    private int resourceId;
    private String resourceLink;
    @JsonIgnore
    @ManyToOne
    private Topic topic;

    public Resource(String resourceLink, Topic topic) {
        this.resourceLink = resourceLink;
        this.topic = topic;
    }

    public Resource(){
        super();
    }

    public int getResourceId() {
        return resourceId;
    }

    public void setResourceId(int resourceId) {
        this.resourceId = resourceId;
    }

    public String getResourceLink() {
        return resourceLink;
    }

    public void setResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }
    //    public Resource(String resourceLink, int topicId) {
//        this.resourceLink = resourceLink;
//        this.topicId = topicId;
//    }
//
//    public Resource(){
//        super();
//    }
//
//    public int getResourceId() {
//        return resourceId;
//    }
//
//    public void setResourceId(int resourceId) {
//        this.resourceId = resourceId;
//    }
//
//    public String getResourceLink() {
//        return resourceLink;
//    }
//
//    public void setResourceLink(String resourceLink) {
//        this.resourceLink = resourceLink;
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
