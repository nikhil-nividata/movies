import { React, useState } from 'react'
import Styles from './index.module.css'
import Card from 'react-bootstrap/Card'
import { Button, FormControl, Row, Col } from 'react-bootstrap'


function Index({ theme, reviews }) {
    const [rating, setRating] = useState(0);
    const [guestKey, setGuestKey] = useState('')
    const [diableRating, setDisable] = useState(false)
    const handleChange = (e) => {
        setRating(e.target.value)
    }
    const rateMovie = async (e) => {
        if (setDisable)
            return
        if (guestKey === '') {
            const guestKey = (await (await fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=a54b9323e376a437bb50a12ac3a0b311')).json()).guest_session_id
            setGuestKey(guestKey)
        }
        try {
            const value = Number.parseFloat(rating)
            if (isNaN(value))
                return
            await fetch(`https://api.themoviedb.org/3/movie/546121/rating?api_key=a54b9323e376a437bb50a12ac3a0b311&guest_session_id=${guestKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value })
            })
            setDisable(true)

        } catch (error) {

        }
    }
    return (
        <div>
            <h1
                className={"mt-3 ml-3 ml-md-2" + (theme.theme === "light" ? "" : " text-white")}>
                Reviews
            </h1>

            <Row
                className="ml-3 mt-2"
            >
                <Col xs={6}>
                    <FormControl
                        disabled={diableRating}
                        type="text"
                        onChange={handleChange}
                        variant='dark'
                        className={(theme.theme === "light" ? "" : "text-white")}
                    />
                </Col>
                <Button
                    onClick={rateMovie}
                    className="ml-3">
                    Rate
                </Button>
            </Row>

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

export default Index
