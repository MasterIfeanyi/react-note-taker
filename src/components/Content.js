import { useState } from "react";
import Note from "./Note";
// import { bootstrap } from "bootstrap"

const Content = () => {
  const [note, setNote] = useState("");
  const [listNotes, setListNotes] = useState(
    JSON.parse(localStorage.getItem("To-do")) || []
  );
  const [displayNote, setDisplayNote] = useState("");

  const addItem = (note) => {
    const id = listNotes.length ? listNotes[listNotes.length - 1].id + 1 : 1;
    const newNote = note;
    const myNewNote = { id, newNote };
    const newListNotes = [...listNotes, myNewNote];

    setListNotes(newListNotes);
    localStorage.setItem("To-do", JSON.stringify(newListNotes));
  };

  const handleSubmit = (e) => {
    if (!note) return;
    addItem(note);
    setNote("");
  };

  return (
    <>
      <section className="">
        <h3 className="text-success mt-4 mb-3">Add A New Note</h3>
        <div className="container">
          <div className="input-group input-group-lg mb-3">
            <textarea
              className="form-control"
              placeholder="write a note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => handleSubmit()}
            className="btn btn-danger mb-3"
          >
            Submit
          </button>
        </div>

        <div className="container mb-3">
          <div className="row g-4">
            {listNotes.map((note) => (
              <Note
                key={note.id}
                note={note}
                listNotes={listNotes}
                displayNote={displayNote}
                setDisplayNote={setDisplayNote}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
