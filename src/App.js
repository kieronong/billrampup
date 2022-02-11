import React from 'react';
import './App.css';

function App() {

  const [breed, setBreed] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("https://images.dog.ceo/breeds/hound-afghan/n02088094_3252.jpg");

  function handleChange(event) {
    setBreed(event.target.value);
  }

  function handleSubmit(event) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
      .then(response => response.json())
      .then(data => setImageUrl(data.message));
    event.preventDefault();
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label>
          Breed:
          <textarea value={breed} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
    <img src={imageUrl}></img>
    </div>
  );

  
}

export default App;
