export default function TimeEntryList({ entries, onEdit, onDelete }) {
  if (entries.length === 0) return <p>No time entries yet.</p>;
  return (
    <ul>
      {entries.map(entry => (
        <li key={entry.id} style={{ marginBottom: 12 }}>
          <strong>{entry.title}</strong> ({entry.startTime} - {entry.endTime})<br />
          <span>{entry.description}</span><br />
          <button onClick={() => onEdit(entry)}>Edit</button>
          <button onClick={() => onDelete(entry.id)} style={{ marginLeft: 8 }}>Delete</button>
        </li>
      ))}
    </ul>
  );
} 