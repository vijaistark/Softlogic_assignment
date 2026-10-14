import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(name);
  }

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>Your name: {result}</h3>
    </div>
  );
}

export default App;