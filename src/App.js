import React from 'react';
import './App.css';
import { Link, Route } from "wouter";

//Components
import GetData from './services/GetData.js';
import Gif from './components/Gif.js';
import Search from './components/Search.js';


class App extends React.Component {
  state = {
    loading: false,
    gifs: [],
    term: '',
    page: 0
  }

  queryApi = () => {
    const term = this.state.term;

    this.setState({loading: true})
    GetData({keyword: term})
      .then(gifs => this.setState({
        gifs: gifs
      }))
    this.setState({loading: false})
  }

  searchData = (term) => {
    this.setState({
      term : term
    }, () => {
      this.queryApi();
    })
  };

  render(){
    if(this.state.loading){
      return (<div>Cargando</div>)
    }
    return (
      <div className="App">
          <Search searchData={this.searchData} />
          <Gif gifs={this.state.gifs} />
      </div>
    )
  }
}

export default App;
