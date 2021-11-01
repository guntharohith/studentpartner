package com.bazinga.studentPartner.Controllers;

import com.bazinga.studentPartner.Entities.*;
import com.bazinga.studentPartner.Services.LearningPathService;
import com.bazinga.studentPartner.Services.UserService;
import com.bazinga.studentPartner.models.LearningTrack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.security.Principal;

@RestController
public class LearningPathController {

    @Autowired
    private UserService userService;
    @Autowired
    private LearningPathService learningPathService;

    @PostMapping("/add-learning-path")
    public LearningPath addLearningPath(@RequestBody LearningTrack learningTrack, Principal principal){
        UserEntity userEntity = userService.fetchUser(principal.getName());
        LearningPath learningPath = new LearningPath(
                learningTrack.getName(), learningTrack.getCategory(), learningTrack.getType(),userEntity
        );
        List<Topic> topics = learningTrack.getTopics();
        for(Topic topic : topics){
            topic.setLearningPath(learningPath);
            for(Resource resource : topic.getResources()){
                resource.setTopic(topic);
            }
            for(Assessment assessment : topic.getAssessments()){
                assessment.setTopic(topic);
            }
        }
        learningPath.setTopics(topics);
        return learningPathService.saveLearningPath(learningPath);
    }

    @GetMapping("/get-learning-paths")
    public List<LearningPath> getLearningPaths(){
        return learningPathService.fetchLearningPaths();
    }

    @GetMapping("/get-learning-path/{id}")
    public LearningPath getLearningPath(@PathVariable int id){
        return learningPathService.fetchLearningPath(id);
    }
}
