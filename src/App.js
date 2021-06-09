import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { User } from "./components/Pages/User";
import { Post } from "./components/Pages/Post";
import { Home } from "./components/Pages/Home";
import { Registro } from "./components/Pages/Resgitro";



function App() {
  
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={User} />
            <Route path="/post" component={Post} />
            <Route path="/blog" component={Home} />
            <Route path="/registro" component={Registro} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
