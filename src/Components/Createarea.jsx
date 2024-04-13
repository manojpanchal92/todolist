import React, { useState } from 'react'
import './Createarea.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


const Createarea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        props.onAdd(note)
        setNote ({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>

            <form>

                <div>

                    <label>Write a Title for Note</label><br />
                    <input name='title' value={note.title} onChange={handleChange} placeholder='' />

                </div>

                <br />

                <div>

                    <label>Write a Note</label><br />
                    <textarea name='content' rows={3} value={note.content} onChange={handleChange} placeholder=''></textarea>

                </div>

                <Fab onClick={handleSubmit}>
                    <AddIcon />
                </Fab>

            </form>

        </div>
    )
}

export default Createarea