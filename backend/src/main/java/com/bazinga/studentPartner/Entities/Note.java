package com.bazinga.studentPartner.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity(name="notes")
public class Note {
    @Id
    @GeneratedValue
    private int noteId;
    private String noteName;
    @Lob
    private String noteDes;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(
            referencedColumnName = "email"
    )
    private UserEntity userEntity;

    public Note(String noteName, String noteDes, UserEntity userEntity) {
        this.noteName = noteName;
        this.noteDes = noteDes;
        this.userEntity = userEntity;
    }

    public Note(){
        super();
    }

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
    }

    public String getNoteDes() {
        return noteDes;
    }

    public void setNoteDes(String noteDes) {
        this.noteDes = noteDes;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    //    private String email;
//
//    public Note(String noteName, String noteDes, String email) {
//        this.noteName = noteName;
//        this.noteDes = noteDes;
//        this.email = email;
//    }
//
//    public Note(){
//
//    }
//
//    public int getId() {
//        return noteId;
//    }
//
//    public void setId(int id) {
//        this.noteId = noteId;
//    }
//
//    public String getNoteName() {
//        return noteName;
//    }
//
//    public void setNoteName(String noteName) {
//        this.noteName = noteName;
//    }
//
//    public String getNoteDes() {
//        return noteDes;
//    }
//
//    public void setNoteDes(String noteDes) {
//        this.noteDes = noteDes;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
}
