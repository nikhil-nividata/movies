import React from 'react'
import MovieCard from '../card'
import { Carousel } from 'react-bootstrap'

export default function index({ theme, label, movies }) {
    const width = document.documentElement.offsetWidth
    const count =
        (width > 1600) ? 6 :
            (width > 1200) ? 5 :
                (width > 900) ? 4 :
                    (width > 600) ? 3 :
                        (width > 300) ? 2 : 1
    let arr = new Array(count)
    for (let i = 0; i < count; ++i)
        arr[i] = i + 1
    let movieCount = 0

    const topLevelArray = []
    const containers = (20 % (count - 2) === 0) ? Math.floor(20 / (count - 2)) : (Math.floor(20 / (count - 2)) + 1)
    console.log(containers);
    for (let i = 0; i < containers; ++i) {
        let arr = []
        if (i === 0) {
            for (let j = 0; j < count; ++j)
                arr.push(j)
        } else if (i === containers - 1) {
            let c = 19 - count
            for (let j = 0; j < count; ++j)
                arr.push(c--)
        } else {
            let indx = topLevelArray[i - 1][count - 1] - 1;
            for (let j = 0; j < count; ++j)
                arr.push(indx++)
            if (indx > 20) {
                topLevelArray.push(arr)
                break
            }
        }
        topLevelArray.push(arr)
    }
    return (
        <div
            style={{

            }}
            className="mt-5">
            <h3
                className={"ml-3 " + (theme === "dark" ? "text-white" : "")}
                style={{

                }}
            >
                {label}
            </h3>

            <Carousel
                wrap={false}
                indicators={false}
                autoPlay={false}
            >
                {
                    topLevelArray.map(
                        (arr, indx) => (
                            <Carousel.Item key={`${indx}-tl`}>
                                <div className="d-flex align-items-center justify-content-between pr-3 pl-3">
                                    {
                                        arr.map(
                                            (innerElem) => (
                                                <MovieCard key={innerElem} theme={theme} movie={movies[innerElem]} />
                                            )
                                        )}
                                </div>
                            </Carousel.Item>
                        )
                    )
                }
            </Carousel>


        </div>
    )
}
