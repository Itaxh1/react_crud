import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          CRUD APPLICATION
        </h1>
      
    <div class="form">
      <label>Movie Name</label>
      <input  type="text" name="Movie Name" />
      <label>Review</label>
      <input type="text" name="Review" />
      <button>Submit</button>

    </div>
    </div>
   
  );
}

export default App;
