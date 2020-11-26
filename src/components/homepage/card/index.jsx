import React from 'react'
import Card from 'react-bootstrap/Card'
import Styles from './index.module.css'
import { Link } from 'react-router-dom'

export default function index({ theme, movie }) {
    return (
        <Link to={`/movie/${movie.id}`}>
            <Card
                style={{
                    backgroundColor: theme === 'light' ? 'rgb(229,229,229)' : 'rgb(23,30,36)'
                }}
                className={`${Styles.cardStyle} border-0`}
            >
                <Card.Img
                    alt="Movie Poster"
                    src={"https://image.tmdb.org/t/p/w342" + movie.poster_path}
                />
                <Card.ImgOverlay
                    className={Styles.cardOverlay}
                >
                    <Card.Title as="h6">{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}
