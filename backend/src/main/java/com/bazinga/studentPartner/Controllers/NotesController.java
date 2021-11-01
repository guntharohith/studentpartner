package com.bazinga.studentPartner.Controllers;

import com.bazinga.studentPartner.Entities.Note;
import com.bazinga.studentPartner.Repo.NoteRepo;
import com.bazinga.studentPartner.Services.NoteService;
import com.bazinga.studentPartner.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class NotesController {
    @Autowired
    private NoteService noteService;

    @Autowired
    private UserService userService;

    @PostMapping("/add-note")
    public Note createNote(@RequestBody Note note,Principal principal){
        note.setUserEntity(userService.fetchUser(principal.getName()));
        return noteService.saveNote(note);
    }

    @GetMapping("/get-note/{id}")
    public Note getNote(@PathVariable int id){
        return noteService.findNote(id);
    }

    @GetMapping("/get-notes")
    public List<Note> getNotes(Principal principal){
        return noteService.findNotes(principal.getName());
    }
    @DeleteMapping("delete-note/{id}")
    public void deleteNote(@PathVariable int id){
        noteService.removeNote(id);
    }
    @PutMapping("update-note/{id}")
    public void updateNote(@PathVariable int id,@RequestBody Note note){
        noteService.updateNote(id,note.getNoteDes());
    }
}
