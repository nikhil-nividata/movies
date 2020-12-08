import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
        if (width >= 1600)
            return width * 0.28
        if (width >= 1200)
            return width * 0.24
        if (width >= 992)
            return width * 0.22
        else if (width > 768)
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
                            <div>
                                <div
                                    className={`mx-sm-2 mt-md-2 text-white`}
                                    style={{
                                        // backgroundImage: `url(${"https://image.tmdb.org/t/p/w780" + movie.backdrop_path})`,
                                        height: 'auto'
                                    }}>
                                    <Container fluid>
                                        <Row>
                                            <Col md={4} className={styles.cardOverlay}>
                                                <h2>
                                                    {movie.original_title}
                                                </h2>
                                                <p>
                                                    {movie.overview}
                                                </p>
                                                <iframe
                                                    className="mt-3"
                                                    height={ifHeight}
                                                    width={ifWidth}
                                                    title="Trailer"
                                                    src={`https://www.youtube.com/embed/${videoDetails.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </Col>
                                            <Col
                                                style={{
                                                    backgroundImage: `url(${"https://image.tmdb.org/t/p/w780" + movie.backdrop_path})`,
                                                    backgroundSize: 'cover',
                                                    height: "60vh"
                                                }}
                                                md={8}>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

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