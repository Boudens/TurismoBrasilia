import axios from "axios";

function AttractionList({ attractions, refreshAttractions }) {
    const handleDelete = async (id) => {
      try {
        await axios.delete(`/api/attractions/${id}`);
        refreshAttractions();
      } catch (error) {
        console.error('Failed to delete attraction');
      }
    };
  
    return (
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.id}>
            {attraction.name} - {attraction.location}
            <button onClick={() => handleDelete(attraction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default AttractionList;
  