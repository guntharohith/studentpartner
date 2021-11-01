package com.bazinga.studentPartner.Repo;

import com.bazinga.studentPartner.Entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface NoteRepo extends JpaRepository<Note,Integer> {
    @Transactional
    @Modifying
    @Query("update notes n set n.noteDes = ?2 where n.noteId = ?1")
    public void editNote(int noteId,String noteDes);
}
