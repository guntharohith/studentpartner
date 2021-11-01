package com.bazinga.studentPartner.Services;

import com.bazinga.studentPartner.Entities.LearningPath;
import com.bazinga.studentPartner.Repo.LearningPathRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningPathService {

    @Autowired
    private LearningPathRepo learningPathRepo;

    public LearningPath saveLearningPath(LearningPath learningPath){
        return learningPathRepo.save(learningPath);
    }

    public List<LearningPath> fetchLearningPaths(){
        return learningPathRepo.findAll();
    }

    public LearningPath fetchLearningPath(int id){
        return learningPathRepo.findById(id).orElse(null);
    }
}
