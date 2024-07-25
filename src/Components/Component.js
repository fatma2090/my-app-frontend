import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/example`)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
