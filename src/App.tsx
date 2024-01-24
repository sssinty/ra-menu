import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" Component={DriftPage} />
          <Route path="/timeattack" Component={TimeAttackPage} />
          <Route path="/forza" Component={ForzaPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}