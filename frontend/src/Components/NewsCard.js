import React from "react";
import './NewsCard.css'

export default class NewsCard extends React.Component {



    render(){

        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href="https://www.cnn.com/2019/08/21/politics/us-economy-recession-trump/index.html" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://cdn.cnn.com/cnnnext/dam/assets/190820172627-02-trump-0915-super-tease.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>Trump's attempt to outrun a recession might make things worse</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://www.politico.com/story/2019/08/21/federal-scientists-opioid-crisis-1673694" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://static.politico.com/ab/60/54c9b7324c6a947bb88387399990/190819-opioids-ap-773.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>Federal scientists warned of coming opioid crisis in 2006</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <a href="https://thehill.com/homenews/campaign/458161-polls-suggest-sanders-may-be-underestimated" target="_blank">
                        <div className="content-overlay"></div>
                        <img className="content-image" src="https://thehill.com/sites/default/files/sandersbernie_081919getty_lead.jpg"/>
                        <div className="content-details fadeIn-top">
                            <p>Polls suggest Sanders may be underestimated | TheHill</p>
                        </div>
                    </a>
                </div>

                 

            </div>
        )
    }
}