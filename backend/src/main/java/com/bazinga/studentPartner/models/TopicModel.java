package com.bazinga.studentPartner.models;

import com.bazinga.studentPartner.Entities.Assessment;
import com.bazinga.studentPartner.Entities.Resource;
import com.bazinga.studentPartner.Entities.Topic;

import java.util.List;

public class TopicModel {
    private String topicName;
    private String topicDes;
    private List<Resource> resources;
    private List<Assessment> assessments;

    public TopicModel(String topicName, String topicDes, List<Resource> resources, List<Assessment> assessments) {
        this.topicName = topicName;
        this.topicDes = topicDes;
        this.resources = resources;
        this.assessments = assessments;
    }

   public TopicModel(){
        super();
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
}
