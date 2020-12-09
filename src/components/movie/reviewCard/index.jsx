import { React, useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Styles from './index.module.css'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

function ReviewCard({ theme, review, eventKey }) {

    const [arrowDown, setArrowDown] = useState(true)
    return (
        <Card
            className={"mx-md-2 my-3" + (theme.theme === "light" ? "" : " text-white")}
            bg={theme.theme === "light" ? "light" : "dark"}
        >
            <div onClick={() => { setArrowDown(!arrowDown) }}>
                <Accordion.Toggle
                    as={Card.Header} eventKey={`${eventKey}`}
                    className={Styles.accordion + " d-flex"}
                >
                    {review.author}
                    <div style={{
                        marginLeft: 'auto'
                    }}>
                        {
                            arrowDown ?
                                <ArrowDownwardRoundedIcon />
                                :
                                <ArrowUpwardRoundedIcon />
                        }
                    </div>
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={`${eventKey}`}>
                <Card.Body>
                    <Card.Text

                    >
                        <p> Rating: {review.author_details.rating} <br />
                        </p>
                        <div
                            className={Styles.reviewContent}
                        >
                            {review.content}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ReviewCard