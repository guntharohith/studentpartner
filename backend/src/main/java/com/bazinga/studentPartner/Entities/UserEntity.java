package com.bazinga.studentPartner.Entities;

import javax.persistence.*;
import java.util.List;


@Entity(name="users")
public class UserEntity {
    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private boolean active;
    private String role;
    @OneToMany( fetch = FetchType.LAZY,mappedBy = "userEntity", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<LearningPath> learningPaths;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "userEntity", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Note> notes;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "userEntity", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<PublicResources> publicResources;

    public UserEntity(String email,String firstName, String lastName, String password, boolean active, String role) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = active;
        this.role = role;
    }

    public UserEntity(){
        super();
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<LearningPath> getLearningPaths() {
        return learningPaths;
    }

    public void setLearningPaths(List<LearningPath> learningPaths) {
        this.learningPaths = learningPaths;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    public List<PublicResources> getPublicResources() {
        return publicResources;
    }

    public void setPublicResources(List<PublicResources> publicResources) {
        this.publicResources = publicResources;
    }
    //
//    public UserEntity(String firstName, String lastName, String email, String password, boolean active, String role) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.password = password;
//        this.active = active;
//        this.role = role;
//    }
//
//    public UserEntity(){
//
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public boolean isActive() {
//        return active;
//    }
//
//    public void setActive(boolean active) {
//        this.active = active;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }

}