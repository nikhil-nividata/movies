import { React, useState } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Styles from './index.module.css'

function ReviewCard({ theme, review }) {
    const [full, setFull] = useState(false)
    return (
        <Card
            className={"mx-md-2 my-3" + (theme.theme === "light" ? "" : " text-white")}
            bg={theme.theme === "light" ? "light" : "dark"}
        >
            <Card.Body>
                <Card.Title>
                    {review.author}
                </Card.Title>
                <Card.Text>
                    Rating: {review.author_details.rating} <br />
                    <div className={Styles.textGrid}>
                        <div
                            className={full ? '' : Styles.hideText}
                        >
                            {review.content}
                            <div
                                className={Styles.showLess}
                                style={{
                                    display: full ? '' : 'none'
                                }}
                                onClick={() => setFull(false)}
                            >
                                Show Less
                            </div>
                        </div>
                        <Button
                            variant="text"
                            className={"m-0 b-0 " + `${Styles.showMore}`}
                            onClick={() => { setFull(true) }}
                            style={{
                                display: full ? 'none' : 'block'
                            }}
                        >More</Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard