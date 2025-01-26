import React, { useState } from "react";
import axios from "axios";

function NoteModal({ question, closeModal, refreshDSAQuestions }) {
    const [newNote, setNewNote] = useState(question.note);

    const handleSaveNote = async () => {
        try {
            await axios.put(
                `http://localhost:5000/${question.id}&dsa`,
                { ...question, note: newNote }
            );
            refreshDSAQuestions();
            closeModal();
        } catch (error) {
            console.error("Error saving note", error);
        }
    };

    return (
        <div className="note-modal-overlay">
            <div className="note-modal">
                <h2>Edit Note</h2>
                <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={handleSaveNote}>Save</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default NoteModal;
