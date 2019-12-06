import React from "react";
import logo from "./logo.svg";
import Header from './Components/Header/Header'
import Headline from './Components/Headline/Headline'
import "./app.scss";


const tempArr=[{
  fName : "Anna",
  lName : "Samoylenko",
  email : "annaswan@mail.ru",
  age:24,
  onlineStatus: true
}]

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Header/>
      <section className="main">
      <Headline tempArr = {tempArr} header="Posts" desc="Click the button to render posts"/>
      </section>
      </div>
    );
  }
}

export default App;
