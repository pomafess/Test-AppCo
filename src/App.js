import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";
import Header from './client/Header/components/Header'
import Footer from "./client/Footer/components/Footer";

import "./shared/styles/style.scss";

function App() {
  return (
      <Router>
          <Header />
          <Routes />
          <Footer />
      </Router>
  )
}
export default App
