import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './index.module.css'
import MovieDetailCard from './movieDetailCard'
import Reviews from './reviews'
class Movie extends Component {
    constructor(props) {
        super(props)
        const { match } = this.props
        this.state = {
            id: match.params.id,
            isLoading: true,
            movie: {},
            reviews: [],
            videoDetails: {},
        }
    }

    async componentDidMount() {
        const { id } = this.state
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US`)
        const movie = await response.json()
        response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US&page=1`)
        const reviews = (await response.json()).results
        response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a54b9323e376a437bb50a12ac3a0b311&language=en-US`)
        const videoDetails = (await response.json()).results[0]
        this.setState({
            isLoading: false,
            movie,
            reviews,
            videoDetails,
        })
    }
    // "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path
    render() {
        const { theme } = this.props
        const { id, isLoading, movie, reviews, videoDetails, rating } = this.state
        return (
            <>
                {
                    (isLoading) ?
                        (<div
                            style={{
                                minHeight: '50vh'
                            }}
                            className="d-flex justify-content-center align-items-end"> <Spinner animation="border" /> </div>)
                        : (
                            <>
                                <MovieDetailCard
                                    theme={theme}
                                    movie={movie}
                                    videoDetails={videoDetails}
                                />

                                <Reviews
                                    theme={theme}
                                    reviews={reviews}
                                />
                            </>
                        )
                }
            </>
        )
    }
}


export default Movie