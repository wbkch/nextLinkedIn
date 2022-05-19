import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'no blog found' });
    }
    
    res.status(200).json(JSON.parse(data));
  });
}
