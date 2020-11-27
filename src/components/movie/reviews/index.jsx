import React from 'react'
import Styles from './index.module.css'
import Card from 'react-bootstrap/Card'


export default function index({ theme, reviews }) {
    return (
        <div>
            <h1
                className={"mt-3 ml-3" + (theme.theme === "light" ? "" : " text-white")}>
                Reviews
                                </h1>
            {
                (reviews.length === 0) ?
                    <h5
                        className={"mt-3 ml-3" + (theme.theme === "light" ? "" : " text-white")}
                    >No reviews Yet
                    </h5>
                    :
                    reviews.map(
                        review => (
                            <Card className={"mx-3 my-3" + (theme.theme === "light" ? "" : " text-white")}
                                bg={theme.theme === "light" ? "light" : "dark"}
                            >
                                <Card.Body>
                                    <Card.Title>
                                        {review.author}
                                    </Card.Title>
                                    <Card.Text>
                                        Rating: {review.author_details.rating} <br />
                                        {review.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    )
            }
        </div>
    )
}
