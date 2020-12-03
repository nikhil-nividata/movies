import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './index.module.css'

function index({ theme, movie, videoDetails }) {
    return (
        <Card
            style={{
                backgroundColor: theme.theme === 'light' ? 'white' : 'rgb(28,41,53)',
                color: theme.theme === 'light' ? 'black' : 'white',
            }}
            bg={theme.theme}
            className={"mx-sm-2 mt-md-2 border-0"}
        >
            <Card.Img
                className={styles.cardImage}
                src={"https://image.tmdb.org/t/p/w780" + movie.backdrop_path} />
            <Card.Body
                className={`${styles.cardOverlay}`}
            >
                <Card.Title
                    className="mt-md-3"
                >{movie.original_title}</Card.Title>
                <Card.Text                >
                    {movie.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export default index