import { useState, useEffect } from 'react';

export default function TimeEntryForm({ onSubmit, editingEntry, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (editingEntry) {
      setTitle(editingEntry.title);
      setDescription(editingEntry.description);
      setStartTime(editingEntry.startTime);
      setEndTime(editingEntry.endTime);
    } else {
      setTitle('');
      setDescription('');
      setStartTime('');
      setEndTime('');
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, startTime, endTime });
    if (!editingEntry) {
      setTitle('');
      setDescription('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type="time"
        placeholder="Start Time"
        value={startTime}
        onChange={e => setStartTime(e.target.value)}
        required
      />
      <input
        type="time"
        placeholder="End Time"
        value={endTime}
        onChange={e => setEndTime(e.target.value)}
        required
      />
      <button type="submit">{editingEntry ? 'Update' : 'Add'} Entry</button>
      {editingEntry && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>}
    </form>
  );
} 