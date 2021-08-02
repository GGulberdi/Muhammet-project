
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/Main'
import Projects from './components/Projects'
import Index from './components/Index'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        </header>
         <body>
        <Switch>
        <Route exact path="/"
          render={()=><Index/>}>
          </Route>
          <Route exact path="/main"
          render={()=><Main/>}>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
          
                  </Switch>
   </body>
    </Router>

    <Footer/>

    
       </div>
  );
}

export default App;
