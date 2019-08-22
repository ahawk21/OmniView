import React from "react";
import * as THREE from "three";
import './Home.css';
import NewsCard from "./NewsCard.js"
import PhotosCard from "./PhotosCard.js"
import VideosCard from "./VideosCard.js"



export default class Home extends React.Component {

    openNav(){ 
        document.getElementById("mySidenav").style.width = "600px";
    }

    closeNav(){
        document.getElementById("mySidenav").style.width = "0px";
    }

    componentDidMount(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        camera.position.z = 5;
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        var geometry = new THREE.SphereGeometry( 1, 35, 35 );
        var material = new THREE.MeshBasicMaterial( {color: 0x00BFFF} );
        var sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );

        var animate = function () {
          requestAnimationFrame( animate );
          sphere.rotation.x += 0.5;
          sphere.rotation.y += 0.5;
          sphere.rotation.z += 0.5;
          renderer.render( scene, camera );
        };
        animate();
    

    }

    

    render(){
        

        return(
            <div> 
                <header>
                   
                </header>
                <body style={{alignItems: "", flexDirection: "left"}}>

                    {/* align-items: center;
	                flex-direction: column */}
                    

                    <div id="mySidenav" className="sidenav">
                        <h1 style={{color: '#818181'}}>United States</h1>
                        <a class="closebtn" style={{cursor: 'pointer'}} onClick={this.closeNav}>&times;</a>
                            <hr></hr>
                                {/* <h1 style={{color: '#818181'}}>"PICTURE"</h1> */}
                                <img style={{width: "600px", height: "300px"}} src="https://i.pinimg.com/originals/2b/0d/0d/2b0d0d2f6c011e199aa58549223907a6.jpg" alt=""/>
                            <hr></hr>
                                <button style={{width: '25%', textAlign: 'left'}}>News</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Photos</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Video</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Favorites</button>
                            <hr></hr>
                        <a href="#"><strong>News</strong></a>
                                <NewsCard/>
                        <a href="#"><strong>Photos</strong></a>
                                <PhotosCard/>
                        <a href="#"><strong>Video</strong></a>
                                <VideosCard/>
                    </div>

                    <span style={{fontSize: '30px', cursor: 'pointer', height: '1px', color: 'white', zIndex: 10}} onClick={this.openNav}>&#9776;</span>                
                </body>
            </div>
        )
    }
}