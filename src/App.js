import './App.css';
import React, { Component } from 'react'
import LightsOn from './assets/on-bulb.svg'
import LightsOff from './assets/off-bulb.svg'
import NavBar from './components/common/navbar'
import HomePage from './components/homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './components/movie'

//// API KEY a54b9323e376a437bb50a12ac3a0b311

const apiKey = "a54b9323e376a437bb50a12ac3a0b311"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: this.lightTheme,
      isLoading: true,
      trendingMovies: [],
      popularMovies: []
    }
  }

  lightTheme = {
    theme: 'light',
    appColor: 'rgb(229,229,229)',
    navbarColor: 'rgb(96,48,230)',
    bulbIcon: LightsOn
  }

  darkTheme = {
    theme: 'dark',
    appColor: 'rgb(23,30,36)',
    navbarColor: 'rgb(28,41,53)',
    bulbIcon: LightsOff
  }

  toggleTheme = () => {
    let newTheme
    if (this.state.theme.theme === 'light')
      newTheme = this.darkTheme
    else
      newTheme = this.lightTheme
    this.setState({
      theme: newTheme,
    })
  }


  render() {
    const { theme } = this.state
    return (
      <Router>
        <div
          style={{
            height: '110vh',
            backgroundColor: theme.appColor
          }}
        >
          <NavBar theme={theme} toggleTheme={this.toggleTheme} />
          <Switch>
            <Route path="/"
              exact
              render={
                (props) => <HomePage {...props} theme={theme} />
              } />
            <Route exact path="/movie/:id"
              render={
                (props) => <Movie {...props} theme={theme} />
              }
            />
          </Switch>
        </div>
      </Router>

    )
  }
}


export default App;
