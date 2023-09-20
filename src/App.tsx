import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='nope'>NOOOO</Link>
          </li>
          <li>
            <Link to='componentized'>COMPONENTIZADO</Link>
          </li>
          <li>
            <Link to='context'>CONTEXT</Link>
          </li>
          <li>
            <Link to='redux'>REDUX</Link>
          </li>
          <li>
            <Link to='jotai'>JOTAI</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
