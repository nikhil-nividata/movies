import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from './index.module.css'

function index({ theme, movie }) {
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
                    {movie.overview}
                </p>
            </Card.ImgOverlay>
        </Card>
    )
}


export default index