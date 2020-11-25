import './App.css';
import React, { Component } from 'react'
import LightsOn from './assets/on-bulb.svg'
import LightsOff from './assets/off-bulb.svg'
import NavBar from './components/common/navbar'
import MovieCarousel from './components/homepage/carousel'
import Spinner from 'react-bootstrap/Spinner'
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

  async componentDidMount() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1')
    const popularMovies = await response.json()
    response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a54b9323e376a437bb50a12ac3a0b311')
    const trendingMovies = await response.json()
    this.setState({
      isLoading: false,
      popularMovies: popularMovies.results,
      trendingMovies: trendingMovies.results
    })
    console.log(popularMovies.results)
    console.log(trendingMovies.results)
  }

  render() {
    const { theme, isLoading, trendingMovies, popularMovies } = this.state
    return (
      <div
        style={{
          height: '110vh',
          backgroundColor: theme.appColor
        }}
      >
        <NavBar theme={theme} toggleTheme={this.toggleTheme} />
        {
          (isLoading) ?
            (<div className="h-50 d-flex justify-content-center align-items-end"> <Spinner animation="border" /> </div>)
            : (
              <>
                <MovieCarousel theme={theme.theme} label="Trending Movies" movies={trendingMovies} />

                <MovieCarousel theme={theme.theme} label="Popular" movies={popularMovies} />
              </>
            )
        }
      </div>
    )
  }
}


export default App;
