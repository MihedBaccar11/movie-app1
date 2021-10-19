import React from 'react'
import{Navbar  }from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import "./Navbar.css"

const NavBar = ({rate ,searchTerm,setRate,setSearchTerm,setHandleShow} ) => {

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleshow = () => {
        setHandleShow(true);
    };

    return (
    <div class="navbar">
        <Navbar style={{background:'#80d0c7',height:70, borderRadius:20}} variant="dark" >
        <div className="form">
            
            <div className="starplusinput"> 
            <StarRatingComponent name="rate" className="reactstars" starCount={5}
                    value={rate}
                    color2={"#fafa48"}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    } />

            <input type="text" placeholder="Search" className="input" value={searchTerm} onChange={handleChange} />
            
            <button className="Add_btn" onClick={handleshow} >Add Movie</button>
            
            </div>   
        </div>
        </Navbar>
    </div>
    )
}

export default NavBar
