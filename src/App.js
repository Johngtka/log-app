import React from 'react'
import Reg from './reg.js'
import Log from './log.js'
import './index.js'
import './app.css'
import lightImageOff from './pic_bulboff.gif'
import lightImageOn from './pic_bulbon.gif'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
class App extends React.Component {
  state = {
    lightOn: false
  }
  // checkuser() {
  //   if (localStorage.getItem('nu') === null) {
  //   }
  // }
  render() {
    return (
      <div className="App">
        <header><b>LOGGING SYSTEM</b><br></br><i style={{ color: "#ffffff" }}>ENJOY :-)</i></header>
        <main>
          <Router>
            <div id="menu">
              <Link to="/login">Log in</Link>
              <Link to="/register">Sign In</Link>
              <Link to="/App">Back</Link>
            </div>
            <Routes>
              <Route path="register" element={<Reg />}></Route>
              <Route path="login" element={<Log />}></Route>
            </Routes>
          </Router>
          <img id="light" alt="light" src={this.state.lightOn ? lightImageOn : lightImageOff} onClick={() => { this.setState({ lightOn: !this.state.lightOn }) }}></img>
        </main>
        <footer>The page by JG </footer>
      </div>
    );
  }
}
export default App;
