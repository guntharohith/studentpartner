package com.bazinga.studentPartner.Controllers;

import com.bazinga.studentPartner.Entities.PublicResources;
import com.bazinga.studentPartner.Services.PublicResourceService;
import com.bazinga.studentPartner.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.security.Principal;

@RestController
public class PublicResourceController {
    @Autowired
    private PublicResourceService publicResourceService;

    @Autowired
    private UserService userService;

    @PostMapping("/add-public-resource")
    public PublicResources addPublicResource(@RequestBody PublicResources publicResources, Principal principal){
        publicResources.setUserEntity(userService.fetchUser(principal.getName()));
        return publicResourceService.savePublicResource(publicResources);
    }

    @GetMapping("/get-public-resource/{id}")
    public PublicResources getPublicResource(@PathVariable int id){
        return publicResourceService.fetchPublicResource(id);
    }

    @GetMapping("/get-public-resources")
    public List<PublicResources> getPublicResources(Principal principal){
        return publicResourceService.fetchPublicResources(principal.getName());
    }

    @GetMapping("/get-all-public-resources")
    public List<PublicResources> getAllPublicResources(){
        return publicResourceService.fetchAll();
    }

    @DeleteMapping("delete-public-resource/{id}")
    public void removePublicResource(@PathVariable int id){
        publicResourceService.deletePublicResource(id);
    }
}
