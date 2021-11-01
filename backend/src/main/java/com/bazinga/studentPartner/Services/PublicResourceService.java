package com.bazinga.studentPartner.Services;

import com.bazinga.studentPartner.Entities.PublicResources;
import com.bazinga.studentPartner.Repo.PublicResourceRepo;
import com.bazinga.studentPartner.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PublicResourceService {
    @Autowired
    private PublicResourceRepo publicResourceRepo;

    @Autowired
    private UserRepo userRepo;

    public PublicResources savePublicResource(PublicResources publicResources){
        return publicResourceRepo.save(publicResources);
    }

    public PublicResources fetchPublicResource(int id){
        return publicResourceRepo.findById(id).orElse(null);
    }

    public List<PublicResources> fetchPublicResources(String email){
        return userRepo.findByEmail(email).getPublicResources();
    }
    public List<PublicResources> fetchAll(){
        return publicResourceRepo.findAll();
    }


    public void deletePublicResource(int id){
        publicResourceRepo.deleteById(id);
    }
}
