import { useEffect, useState } from 'react';
import TimeEntryList from './TimeEntryList';
import TimeEntryForm from './TimeEntryForm';

export default function TimeManager() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    fetch('/api/times')
      .then(res => res.json())
      .then(data => setEntries(data));
  }, []);

  const addEntry = async (entry) => {
    const res = await fetch('/api/times', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    const newEntry = await res.json();
    setEntries([...entries, newEntry]);
  };

  const updateEntry = async (id, entry) => {
    const res = await fetch(`/api/times/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    const updated = await res.json();
    setEntries(entries.map(e => (e.id === id ? updated : e)));
    setEditingEntry(null);
  };

  const deleteEntry = async (id) => {
    await fetch(`/api/times/${id}`, { method: 'DELETE' });
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <div>
      <TimeEntryForm
        onSubmit={editingEntry ? (entry) => updateEntry(editingEntry.id, entry) : addEntry}
        editingEntry={editingEntry}
        onCancel={() => setEditingEntry(null)}
      />
      <TimeEntryList
        entries={entries}
        onEdit={setEditingEntry}
        onDelete={deleteEntry}
      />
    </div>
  );
} 