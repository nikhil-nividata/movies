import React, { Component } from 'react'
import MovieCarousel from './carousel'
import Spinner from 'react-bootstrap/Spinner'

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            trendingMovies: [],
            popularMovies: [],
            horrorMovies: [],
            actionMovies: [],
            superHeroMovies: []
        }
    }

    fetchMoviesData = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1')
        const popularMovies = await response.json()
        response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a54b9323e376a437bb50a12ac3a0b311')
        const trendingMovies = await response.json()
        response = await fetch('https://api.themoviedb.org/3/movie/588/similar?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1')
        const horrorMovies = await response.json()
        response = await fetch('https://api.themoviedb.org/3/movie/608/similar?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1')
        const actionMovies = await response.json()
        response = await fetch('https://api.themoviedb.org/3/movie/44912/similar?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1')
        const superHeroMovies = await response.json()
        this.setState({
            isLoading: false,
            popularMovies: popularMovies.results,
            trendingMovies: trendingMovies.results,
            horrorMovies: horrorMovies.results,
            actionMovies: actionMovies.results,
            superHeroMovies: superHeroMovies.results
        })
    }

    async componentDidMount() {
        this.fetchMoviesData()
    }

    render() {
        const theme = this.props.theme
        const { isLoading, trendingMovies, popularMovies, horrorMovies, actionMovies, superHeroMovies } = this.state
        return (
            <>
                {
                    (isLoading) ?
                        (<div
                            style={{
                                minHeight: '100vh'
                            }}
                            className="d-flex justify-content-center align-items-center"> <Spinner animation="border" /> </div>)
                        : (
                            <>
                                <MovieCarousel theme={theme.theme} label="Trending Movies" movies={trendingMovies} />

                                <MovieCarousel theme={theme.theme} label="Popular" movies={popularMovies} />

                                <MovieCarousel theme={theme.theme} label="Horror Movies" movies={horrorMovies} />

                                <MovieCarousel theme={theme.theme} label="Action" movies={actionMovies} />

                                <MovieCarousel theme={theme.theme} label="Superhero Movies" movies={superHeroMovies} />
                            </>
                        )
                }
            </>
        )
    }
}
