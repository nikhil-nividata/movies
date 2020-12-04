import React from 'react'
import MovieCard from '../card'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Styles from './index.module.css'

export default function Index({ theme, label, movies }) {
    const width = document.documentElement.offsetWidth
    const count =
        (width > 1600) ? 8 :
            (width > 1200) ? 7 :
                (width > 900) ? 5 :
                    (width > 600) ? 3 :
                        (width > 400) ? 2 : 1
    const [natWidth, natHeight] =
        (width > 1600) ? [1, 1.42] :
            (width > 1200) ? [1, 1.35] :
                (width > 900) ? [1, 1.5] :
                    (width > 600) ? [1.3, 1.5] :
                        (width > 400) ? [1, 1.4] : [1, .8]

    return (
        <div
            style={{
                overflow: 'hidden'
            }}
            className="mt-2 mt-md-3">
            <h3
                className={"ml-3 " + (theme === "dark" ? "text-white" : "")}
                style={{

                }}
            >
                {label}
            </h3>
            <div className={Styles.carouselContainer}>
                <CarouselProvider
                    naturalSlideWidth={natWidth}
                    naturalSlideHeight={natHeight}
                    totalSlides={movies.length}
                    visibleSlides={count}
                    step={count}
                >
                    <ButtonBack
                        className={`${Styles.customButton} ${Styles.backButton}`}
                    >
                        {'<'}
                    </ButtonBack>
                    <ButtonNext
                        className={`${Styles.customButton} ${Styles.nextButton}`}
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
        </div>
    )
}
