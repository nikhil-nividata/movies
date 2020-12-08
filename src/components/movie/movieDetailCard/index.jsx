import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from './index.module.css'

function index({ theme, movie, videoDetails, ifHeight, ifWidth }) {
    return (
        <div
            className={`mx-sm-2 mt-md-2 text-white`}
            style={{
                height: 'auto'
            }}>
            <Container fluid>
                <Row>
                    <Col
                        md={4}
                        className={`${styles.cardOverlay} py-3 w-100 d-flex flex-column`}
                    >
                        <h2>
                            {movie.original_title}
                        </h2>
                        <p>
                            {movie.overview}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <iframe
                                    className="mt-3"
                                    height={ifHeight}
                                    width={ifWidth}
                                    title="Trailer"
                                    src={`https://www.youtube.com/embed/${videoDetails.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </Col>
                    <Col
                        style={{
                            backgroundImage: `url(${"https://image.tmdb.org/t/p/w780" + movie.backdrop_path})`,
                            backgroundSize: 'cover',
                            minHeight: "70vh"
                        }}
                        md={8}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default index