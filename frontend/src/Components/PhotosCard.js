import React from "react";
import './NewsCard.css'

export default class PhotosCard extends React.Component {



    render(){

        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href="https://www.travelandleisure.com/worlds-best/united-states-sights-landmarks-cities">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1471539367/chicago-SIGHTSEEING0816.jpg?itok=FJSJTwgj"/>
                        <div className="content-details fadeIn-top">
                            <p>World's Best Cities for Sights and Landmarks in the United States ...</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="http://top20amazingplaces.com/top-5/top-5-the-best-cities-to-visit-in-the-united-states/">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="http://top20amazingplaces.com/wp-content/uploads/2015/08/2-statue-of-liberty-nyc.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>Top 5 the Best Cities to visit in the United States</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://www.grayline.com/tours/new-york-city/new-york-city-night-tour-5870_25_12130_434/" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://cdn.tourcms.com/a/11676/434/1/default.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>New York City Night Tour</p>
                        </div>
                    </a>
                </div>

                 

            </div>
        )
    }
}