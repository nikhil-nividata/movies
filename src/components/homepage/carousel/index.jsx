import React from 'react'
import MovieCard from '../card'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Styles from './index.module.css'

export default function Index({ theme, label, movies }) {
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
                overflow: 'hidden'
            }}
            className="mt-5">
            <h3
                className={"ml-3 " + (theme === "dark" ? "text-white" : "")}
                style={{

                }}
            >
                {label}
            </h3>
            <div className={Styles.carouselContainer}>
                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1.5}
                    totalSlides={movies.length}
                    visibleSlides={6}
                    step={6}
                >
                    <ButtonBack
                        className={Styles.backButton}
                    >
                        {'<'}
                    </ButtonBack>
                    <ButtonNext
                        className={Styles.nextButton}
                    >
                        {'>'}
                    </ButtonNext>

                    <Slider style={{ overflow: 'visible' }}>
                        {
                            movies.map(
                                (movie, index) => (
                                    <Slide
                                        style={{
                                            // marginTop: '20px'
                                        }}
                                        key={index}
                                        index={index}>
                                        <MovieCard
                                            style={{
                                                marginTop: '20px',
                                                marginRight: '10px'
                                            }}
                                            theme={theme}
                                            movie={movie} />
                                    </Slide>
                                )
                            )
                        }
                    </Slider>
                </CarouselProvider>
            </div>

            {/* <MovieCard key={innerElem} theme={theme} movie={movies[innerElem]} /> */}

        </div>
    )
}
