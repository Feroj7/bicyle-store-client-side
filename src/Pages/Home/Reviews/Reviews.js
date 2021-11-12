import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const reviewCardStyle = {
        backgroundColor: '#FDF6F0',
        borderRadius: '20px',
        width: '370px'
    }

    return (
        <div className="my-5 py-5">
            <Container>
                <h6 className="text-success">TESTIMONIALS</h6>
                <h1 className="mb-5">Why Our Customer Love Bicycle Store</h1>
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]
                        },
                        900: {
                            plugins: [
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                            ]
                        }
                    }}
                >

                    {
                        reviews.map(review =>
                            <Card style={reviewCardStyle} className="h-100" key={review._id}>
                                <Card.Img style={{ borderRadius: '50%' }} className="w-25 m-auto mt-3" variant="top" src={review?.image} />
                                <Card.Body>
                                    <p>{review.comments}</p>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Rating
                                        className="text-warning"
                                        initialRating={review.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly
                                    ></Rating>
                                </Card.Body>
                            </Card>
                        )
                    }

                </Carousel>
            </Container>
        </div>
    );
};

export default Reviews;