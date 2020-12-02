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

    fetchMovieData = async () => {
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

    getIframeWidth() {
        const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(width);

        if (width > 768)
            return width - 18
        else
            return width - 10
    }

    async componentDidMount() {
        this.fetchMovieData()
    }
    // "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path
    render() {
        const ifWidth = this.getIframeWidth()
        console.log(ifWidth);
        const ifHeight = ifWidth * 9 / 16
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
                            <div
                                className="d-flex flex-column"
                            >
                                <div
                                    className={styles.embedded}
                                >
                                    <iframe
                                        className="mt-3"
                                        height={ifHeight}
                                        width={ifWidth}
                                        title="Trailer"
                                        src={`https://www.youtube.com/embed/${videoDetails.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <MovieDetailCard
                                    theme={theme}
                                    movie={movie}
                                    videoDetails={videoDetails}
                                    className={styles.movieDetails}
                                />
                                <div
                                    className={styles.reviews}
                                >
                                    <Reviews
                                        theme={theme}
                                        reviews={reviews}
                                    />
                                </div>
                            </div>
                        )
                }
            </>
        )
    }
}


export default Movie