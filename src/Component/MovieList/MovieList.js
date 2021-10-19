import React from 'react'
import{Card } from 'react-bootstrap';
import "../MovieList/MovieList.css"
import StarRatingComponent from "react-stars";
import AddMovie from '../AddMovie/AddMovie';

const  MovieList = ({MovieData}) =>{
    return (
        <div className="cardItems">
            <img className="img" src={MovieData.posterurl} alt="lalélwah" />
            <Card.Body className='bodyCard'>
                <Card.Title className="title">{MovieData.title}</Card.Title>
                <Card.Text className='description'>
                    {MovieData.description}<br />
                    </Card.Text>    
                    <div className="rate">
                    Rate :
                <StarRatingComponent
                    name="rate"
                    editing={false}
                    starCount={5}
                    value={MovieData.rating}
                />
            </div>
            </Card.Body>
            
        </div>
    )
}

export default MovieList
