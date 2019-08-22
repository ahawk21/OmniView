import React from "react";
import './NewsCard.css'

export default class NewsCard extends React.Component {

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

    // {this.state.allNews.length ? this.state.allNews[0].urlToImage : " "}
    render(){
        // console.log (this.state.allNews)
        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href={this.state.allNews.length ? this.state.allNews[0].url : " "}>
                    <div className="content-overlay"></div>
                        <img className="content-image" src={this.state.allNews.length ? this.state.allNews[0].urlToImage : " "} alt=""/>
                    <div className="content-details fadeIn-top">
                    <p>{this.state.allNews.length ? this.state.allNews[0].title : " "}</p>
                </div>
                </a>
                </div>
                    <div className="content">
                    <a href={this.state.allNews.length ? this.state.allNews[1].url : " "}>
                    <div className="content-overlay"></div>
                        <img className="content-image" src={this.state.allNews.length ? this.state.allNews[1].urlToImage : " "} alt=""/>
                    <div className="content-details fadeIn-top">
                    <p>{this.state.allNews.length ? this.state.allNews[1].title : " "}</p>
                </div>
                </a>
                </div>
                    <div className="content">
                    <a href={this.state.allNews.length ? this.state.allNews[2].url : " "}>
                    <div className="content-overlay"></div>
                        <img className="content-image" src={this.state.allNews.length ? this.state.allNews[2].urlToImage : " "} alt=""/>
                    <div className="content-details fadeIn-top">
                    <p>{this.state.allNews.length ? this.state.allNews[2].title : " "}</p>
                </div>
                </a>
                </div>
            </div>
        )
    }
}