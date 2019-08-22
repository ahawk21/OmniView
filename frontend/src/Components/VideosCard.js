import React from "react";
import './NewsCard.css'

export default class VideosCard extends React.Component {

    state = {
        allVideos: {}
        }
        
    componentDidMount(){
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&chart=mostPopular&maxResults=3&regionCode=us&key=AIzaSyCXHvGgqT8olD5AGdLKSEpet1Fn3LAkv-w')
            .then(res => res.json())
            .then(videoData => {
            this.setState({
                allVideos: videoData.items
            })
            // console.log(this.state.allVideos[0].id)
        })
    }

    render(){

        return(
            <div style={{display: "flex"}}>
                <div className="content">
                    <a href={this.state.allVideos.length ? `https://www.youtube.com/watch?v=${this.state.allVideos[0].id}` : " "}>
                        <div className="content-overlay"></div>
                        <img className="content-image" src={ this.state.allVideos.length ? `https://i.ytimg.com/vi/${this.state.allVideos[0].id}/maxresdefault.jpg` : "" } alt="" />
                        <div className="content-details fadeIn-top">
                            <p>{this.state.allVideos.length ? `${this.state.allVideos[0].snippet.title}` : ""}</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                <a href={this.state.allVideos.length ? `https://www.youtube.com/watch?v=${this.state.allVideos[1].id}` : " "}>
                        <div className="content-overlay"></div>
                        <img className="content-image" src={ this.state.allVideos.length ? `https://i.ytimg.com/vi/${this.state.allVideos[1].id}/maxresdefault.jpg` : "" } alt="" />
                        <div className="content-details fadeIn-top">
                            <p>{this.state.allVideos.length ? `${this.state.allVideos[1].snippet.title}` : ""}</p>
                        </div>
                    </a>
                </div>
                <div className="content">
                <a href={this.state.allVideos.length ? `https://www.youtube.com/watch?v=${this.state.allVideos[2].id}` : " "}>
                        <div className="content-overlay"></div>
                        <img className="content-image" src={ this.state.allVideos.length ? `https://i.ytimg.com/vi/${this.state.allVideos[2].id}/maxresdefault.jpg` : "" } alt="" />
                        <div className="content-details fadeIn-top">
                            <p>{this.state.allVideos.length ? `${this.state.allVideos[2].snippet.title}` : ""}</p>
                        </div>
                    </a>
                </div>

                 

            </div>
        )
    }
}