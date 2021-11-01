package com.bazinga.studentPartner.Services;

import com.bazinga.studentPartner.Entities.Note;
import com.bazinga.studentPartner.Repo.NoteRepo;
import com.bazinga.studentPartner.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {
    @Autowired
    private NoteRepo noteRepo;

    @Autowired
    private UserRepo userRepo;

    public Note saveNote(Note note){
        return noteRepo.save(note);
    }

    public Note findNote(int noteId){
        return noteRepo.findById(noteId).orElse(null);
    }


    public List<Note> findNotes(String email){
        return userRepo.findByEmail(email).getNotes();
    }

    public void removeNote(int noteId){
        noteRepo.deleteById(noteId);
    }

    public void updateNote(int noteId,String noteDes){
        noteRepo.editNote(noteId,noteDes);
    }


}
