import React from "react";
import './NewsCard.css'

export default class VideosCard extends React.Component {



    render(){

        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href="https://www.youtube.com/watch?v=7FWdlYB7H0o" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://i.ytimg.com/vi/7FWdlYB7H0o/maxresdefault.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>SURPRISING BEST FRIEND WITH LAMBORGHINI!!</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://www.youtube.com/watch?v=ZpaAJN5YnsY" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://i.ytimg.com/vi/ZpaAJN5YnsY/maxresdefault.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>Emma Chamberlain Goes Boxing & Shopping in L.A. | 24 Hours With | Vogue</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://www.youtube.com/watch?v=kuOEpC4u6Tg">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://i.ytimg.com/vi/kuOEpC4u6Tg/maxresdefault.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>A DAY IN MY LIFE</p>
                        </div>
                    </a>
                </div>

                 

            </div>
        )
    }
}