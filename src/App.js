import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Pokedex from "./components/pokedex";
import Info from './components/info';

function App() {
  return (
    <Router>
      <div className="App">
        Nav...
        <Routes>
          <Route path="/" exact element={<Pokedex/>} />
          <Route path="/info" element={<Info/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
