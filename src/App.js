import { useState } from 'react';
import './App.css';
import Createarea from './Components/Createarea';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notes from './Components/Notes';

function App() {

  const [notes, setNotes] = useState([]);

function addNote(newNotes){
  setNotes(preNotes=>{
    return [
      ...preNotes,
      newNotes
    ]
  })
}

function deleteNote(id){
  setNotes(preNotes=>{
    return preNotes.filter((each,index)=>{
      return index !==id;
    })
  })
}



  return (
    <div className="App">
      <Header />
      <Createarea onAdd={addNote} />
      {
        notes.map((eachNote,index)=>{
          return (
            <Notes 
              key = {index}
              id = {index}
              title = {eachNote.title}
              content = {eachNote.content}
              onDelete = {deleteNote}
            />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
