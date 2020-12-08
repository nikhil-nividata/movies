import { React, useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Styles from './index.module.css'

function ReviewCard({ theme, review, eventKey }) {
    const [full, setFull] = useState(false)
    return (
        <Card
            className={"mx-md-2 my-3" + (theme.theme === "light" ? "" : " text-white")}
            bg={theme.theme === "light" ? "light" : "dark"}
        >

            <Accordion.Toggle as={Card.Header} eventKey={`${eventKey}`}>
                {review.author}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={`${eventKey}`}>
                <Card.Body>
                    <Card.Text>
                        Rating: {review.author_details.rating} <br />
                        <div className={Styles.textGrid}>
                            <div>
                                {review.content}
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ReviewCard