import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteModal from './NoteModal'; import { CiStar } from "react-icons/ci"; import { FaStar } from "react-icons/fa"; import { MdNoteAlt } from "react-icons/md"; import { MdDelete } from "react-icons/md";

function QuestionDetails({ question, id, refreshDSAQuestions }) {
    console.log(question);
    const { name, link, note, need_revision, rating } = question;
    const [revision, setRevision] = useState(need_revision);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => { setRevision(revision); }, [revision]);

    const toggleNeedRevision = async () => {
        try {
            await axios.put(`http://localhost:5000/${id}&dsa`, { ...question, needRevision: !revision });
            setRevision((revision) => !revision); // react doesn't updates the state quickly
            refreshDSAQuestions();
        } catch (error) {
            setRevision((revision) => !revision);
            console.error("Error updating question", error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:5000/${id}&dsa`);
            refreshDSAQuestions();
        }
        catch (error) { console.error("Error deleting question", error); }
    };

    const ratingMap = { 1: "Easy", 2: "Medium", 3: "Hard", }
    const colorMap = { 1: "#089C8B", 2: "#FFC01E", 3: "#FF375F" }
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = (e) => { setIsModalOpen(false); };

    return (
        <div className="question-details-container">
            <div className="question-details-header">
                {question.name}
            </div>
            <a href={link} className="question-details-link" target="_blank" rel="noopener noreferrer" > Link </a>
            
            <MdNoteAlt onClick={openModal} className="react-icon question-details-note" style={{}} />
            
            <div className={`question-details-revision ${!revision ? "no-revision" : ""}`}>
                {question.need_revision ? (<FaStar className='react-icon' onClick={toggleNeedRevision} />) : (<CiStar className="react-icon" onClick={toggleNeedRevision} />)}
            </div>
            
            <div className="question-details-rating" style={{ color: colorMap[rating] }}>
                {`${ratingMap[rating]} `}
            </div>
            
            <MdDelete className="react-icon" onClick={handleDeleteClick} />
            {isModalOpen && (<NoteModal question={question} closeModal={closeModal} refreshDSAQuestions={refreshDSAQuestions} />)}
        </div>
    );
}

export default QuestionDetails;
