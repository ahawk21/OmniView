import React from "react";
import './AllNews.css';


export default class AllNews extends React.Component {

    state = {
        allNews: {}
        }
    
        componentDidMount(){
            fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=690fa31d41294903a26d44c79027f795')
                .then(res => res.json())
                .then(newsData => {
                // console.log(newsData)
                this.setState({
                allNews: newsData.articles
                })
                // console.log(newsData.articles[0].title)
            })
        }

    render(){

        console.log(this.state.allNews)
        return(
            <div>
                <h1 id="page">News</h1>
                    <hr/>
                        <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[0].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[0].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[0].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                        <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[1].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[1].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[1].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[2].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[2].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[2].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[3].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[3].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[3].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[4].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[4].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[4].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[5].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[5].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[5].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[6].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[6].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[6].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[7].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[7].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[7].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[8].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[8].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[8].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>

                    <div style={{display: "flex"}} className="content">
                            <a href={this.state.allNews.length ? this.state.allNews[9].url : " "}>
                            <div className="content-overlay"></div>
                                <img className="content-image" src={this.state.allNews.length ? this.state.allNews[9].urlToImage : " "} alt=""/>
                            <div className="content-details fadeIn-top">
                            <p>
                                {this.state.allNews.length ? this.state.allNews[9].title : " "}
                            </p>
                        </div>
                            </a>
                    </div>
            </div>
        )
    }
}