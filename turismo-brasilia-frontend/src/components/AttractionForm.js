import { useState } from 'react';
import axios from '../services/api';

function AttractionForm({ refreshAttractions }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/attractions', { name, location, description });
      refreshAttractions();
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create attraction');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Attraction</button>
    </form>
  );
}

export default AttractionForm;
