import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Tile from './Tile'

class App extends Component {

  state = {
    hogs: []
  }

  componentDidMount = () => {
    console.log("mount")
    fetch('http://localhost:3001/hogs').then( res => {
      return res.json()
    }).then( result => {
      this.setState({hogs: result})
    })
  }

  sortByName = () => {
    let sortedArr = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({hogs: sortedArr})
  }

  sortByWeight = () => {
    let sortedArr = this.state.hogs.sort((a, b) => (a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] > b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]) ? 1 : -1)
    this.setState({hogs: sortedArr})
  }

  render() {
    console.log("render")
    return (
      <div className="App">
        <div>
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        </div>
        <div className="ui grid container">
          {this.state.hogs.map( hog => {
            return <Tile hog={hog}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;
