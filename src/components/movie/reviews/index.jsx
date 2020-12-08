import { React, useState } from 'react'
import Styles from './index.module.css'
import Card from 'react-bootstrap/Card'
import { Button, FormControl, Row, Col, InputGroup, Accordion } from 'react-bootstrap'
import ReviewCard from '../reviewCard'

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

            <InputGroup className="w-25 ml-2">
                <FormControl
                    disabled={diableRating}
                    type="text"
                    onChange={handleChange}
                />
                <InputGroup.Append>
                    <Button
                        onClick={rateMovie}
                    >
                        Rate
                    </Button>
                </InputGroup.Append>
            </InputGroup>

            <Accordion >
                {
                    (reviews.length === 0) ?
                        <h5
                            className={"mt-3 ml-3" + (theme.theme === "light" ? "" : " text-white")}
                        >No reviews Yet
                    </h5>
                        :
                        reviews.map(
                            (review, index) => (
                                <ReviewCard
                                    theme={theme}
                                    review={review}
                                    eventKey={index}
                                />
                            )
                        )
                }
            </Accordion>
        </div>
    )
}

export default Index
