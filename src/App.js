import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";


import "./shared/styles/style.scss";

function App() {
  return (
      <Router>
          <Routes />
      </Router>
  )
}
export default App
