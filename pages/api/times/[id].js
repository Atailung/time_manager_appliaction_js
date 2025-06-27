let times = global.times || [];
let nextId = global.nextId || 1;
global.times = times;
global.nextId = nextId;

export default function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;
  const entryId = parseInt(id);
  const entryIndex = times.findIndex(e => e.id === entryId);

  if (entryIndex === -1) {
    res.status(404).json({ message: 'Entry not found' });
    return;
  }

  if (method === 'GET') {
    res.status(200).json(times[entryIndex]);
  } else if (method === 'PUT') {
    const { title, description, startTime, endTime } = body;
    times[entryIndex] = { id: entryId, title, description, startTime, endTime };
    res.status(200).json(times[entryIndex]);
  } else if (method === 'DELETE') {
    times.splice(entryIndex, 1);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
} 