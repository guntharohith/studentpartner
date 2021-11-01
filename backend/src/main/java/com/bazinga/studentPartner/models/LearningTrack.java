package com.bazinga.studentPartner.models;

import com.bazinga.studentPartner.Entities.Topic;

import java.util.List;

public class LearningTrack {
    private String name;
    private String category;
    private String type;
    private List<Topic> topics;

    public LearningTrack(String name, String category, String type,  List<Topic> topics) {
        this.name = name;
        this.category = category;
        this.type = type;
        this.topics = topics;
    }

    public LearningTrack(){
        super();
    }


    public String getName() {
        return name;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public List<Topic> getTopics() {
        return topics;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


}
