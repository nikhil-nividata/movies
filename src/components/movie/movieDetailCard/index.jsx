import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './index.module.css'

function index({ theme, movie, videoDetails }) {
    return (
        <Card
            style={{
                backgroundColor: theme === 'light' ? 'rgb(229,229,229)' : 'rgb(23,30,36)'
            }}
            className={"mx-3 mt-4 border-0"}
        >
            <Card.Img
                className={styles.cardImage}
                src={"https://image.tmdb.org/t/p/w780" + movie.backdrop_path} />
            <Card.ImgOverlay
                className={`${styles.cardOverlay}`}
            >
                <h1
                    className="mt-5"
                >{movie.original_title}</h1>
                <p
                    className="mt-3"
                    style={{
                        fontSize: '20px',
                        fontWeight: '300',
                        maxWidth: '30%'
                    }}
                >
                    {/* {`https://www.youtube.com/embed/${videoDetails.key}`} <br /> */}
                    {movie.overview}
                </p>
                <iframe className="mt-3" title="Trailer" width="560" height="315" src={`https://www.youtube.com/embed/${videoDetails.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Card.ImgOverlay>
        </Card>
    )
}


export default index