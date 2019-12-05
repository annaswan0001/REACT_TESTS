import React from "react";
import logo from "./logo.svg";
import Header from './Components/Header/Header'
import Headline from './Components/Headline/Headline'
import "./app.scss";

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Header/>
      <section className="main">
      <Headline header="Posts" desc="Click the button to render posts"/>
      </section>
      </div>
    );
  }
}

export default App;
