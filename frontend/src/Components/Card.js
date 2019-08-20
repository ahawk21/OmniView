import React from "react";
import './Card.css'

export default class Card extends React.Component {

    render(){

        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
                        <div className="content-details fadeIn-top">
                            <p>SAMPLE 1</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
                        <div className="content-details fadeIn-top">
                            <p>SAMPLE 2</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
                        <div className="content-details fadeIn-top">
                            <p>SAMPLE 3</p>
                        </div>
                    </a>
                </div>

                 

            </div>
        )
    }
}