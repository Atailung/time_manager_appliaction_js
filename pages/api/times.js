let times = [];
let nextId = 1;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(times);
  } else if (req.method === 'POST') {
    const { title, description, startTime, endTime } = req.body;
    const newEntry = { id: nextId++, title, description, startTime, endTime };
    times.push(newEntry);
    res.status(201).json(newEntry);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 