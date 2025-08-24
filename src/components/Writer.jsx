import React, { useState, useEffect } from 'react';
import Notes from './Notes';
import writer from '/writer.png'; // adjust path if needed

const colors = ['#FBB6CE', '#FED7AA', '#F6E05E', '#90CDF4', '#9AE6B4', '#D6BCFA', '#FBD38D'];
const LOCAL_STORAGE_KEY = 'sticky-notes-app';

const ColorPicker = ({ color, onChange }) => (
  <div className="flex gap-2 flex-wrap">
    {colors.map((c) => (
      <button
        key={c}
        onClick={() => onChange(c)}
        className={`lg:w-6 lg:h-6 w-12 h-12 rounded-full border-2 ${
          color === c ? 'border-black' : 'border-transparent'
        }`}
        style={{ backgroundColor: c }}
        aria-label={`Pick color ${c}`}
        type="button"
      />
    ))}
  </div>
);

const Writer = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', text: '', color: colors[0] });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const openModal = () => {
    setNewNote({ title: '', text: '', color: colors[0] });
    setShowModal(true);
  };

  const handleAddNote = () => {
    if (!newNote.title.trim() || !newNote.text.trim()) return;

    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newNote.title,
        text: newNote.text,
        color: newNote.color,
        x: 50,
        y: 50,
      },
    ]);
    setShowModal(false);
  };

  const updateNoteText = (id, newText) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const moveNote = (id, x, y) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, x, y } : note))
    );
  };

  return (
    <div className="border h-[700px] w-[900px] border-gray-700 rounded-2xl flex flex-col items-end backdrop-blur-lg bg-[rgba(255,255,255,0.15)]">
      <button
        onClick={openModal}
        className="border bg-[rgba(255,255,255,0.1)] lg:px-4 rounded-4xl text-white lg:mx-5 lg:my-4 cursor-pointer hover:scale-110 transition-all px-8 text-4xl lg:text-2xl mx-10 my-8 "
      >
        Add Note
      </button>

      <div
        className="h-full w-full rounded-b-2xl bg-center bg-cover relative overflow-hidden"
        style={{ backgroundImage: `url(${writer})` }}
      >
        {notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            x={note.x}
            y={note.y}
            color={note.color}
            onChange={updateNoteText}
            onDrag={moveNote}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white border p-6 rounded-xl w-[500px] flex flex-col gap-4">
            <h2 className="lg:text-xl text-4xl font-semibold text-purple-700">New Note</h2>
            {/* Make sure font size is at least 16px (text-base) to prevent zoom */}
            <input
              type="text"
              placeholder="Note title"
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              className="border p-2 rounded text-4xl lg:text-base"
            />
            <textarea
              rows={4}
              placeholder="Your note..."
              value={newNote.text}
              onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
              className="border p-2 rounded resize-none text-4xl lg:text-base"
            />
            <div className="flex flex-col gap-1">
              <span className="lg:text-sm text-2xl font-medium text-gray-700">Pick Color:</span>
              <ColorPicker
                color={newNote.color}
                onChange={(color) => setNewNote({ ...newNote, color })}
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 lg:text-base text-2xl"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNote}
                className="bg-purple-600 text-white lg:text-base text-2xl px-3 py-1 rounded hover:bg-purple-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Writer;
