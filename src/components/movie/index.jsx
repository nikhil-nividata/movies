import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import styles from './index.module.css'
import MovieDetailCard from './movieDetailCard'

class Movie extends Component {
    constructor(props) {
        super(props)
        const { match } = this.props
        this.state = {
            id: match.params.id,
            isLoading: true,
            movie: {}
        }
    }

    async componentDidMount() {
        const { id } = this.state
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US`)
        const movie = await response.json()
        this.setState({
            isLoading: false,
            movie
        })
    }
    // "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path
    render() {
        const { theme } = this.props
        const { id, isLoading, movie } = this.state
        return (
            <>
                {
                    (isLoading) ?
                        (<div className="h-50 d-flex justify-content-center align-items-end"> <Spinner animation="border" /> </div>)
                        : (
                            <>
                                <MovieDetailCard
                                    theme={theme}
                                    movie={movie}
                                />
                            </>
                        )
                }
            </>
        )
    }
}


export default Movie