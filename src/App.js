import Header from "./Header";
import Home from "./Home";
import Trumpet from "./Trumpet";
import Metronome from "./Metronome";
import PracticeRoom from "./PracticeRoom";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trumpet">
            <Trumpet />
          </Route>
          <Route path="/metronome">
            <Metronome />
          </Route>
          <Route path="/signup">
            <h2>Sign Up</h2>
          </Route>
          <Route path="/practiceroom">
            <PracticeRoom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
