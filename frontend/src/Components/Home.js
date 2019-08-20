import React from "react";
import * as THREE from "three";
import './Home.css';
import Card from "./Card.js"



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
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        animate();
    

    }

    

    render(){
        

        return(
            <div> 
                <header>
                    <style>{''}</style>
                </header>
                <body style={{alignItems: "", flexDirection: "left"}}>

                    {/* align-items: center;
	                flex-direction: column */}
                    

                    <div id="mySidenav" className="sidenav">
                        <h1 style={{color: '#818181'}}>"COUNTRY"</h1>
                        <a class="closebtn" style={{cursor: 'pointer'}} onClick={this.closeNav}>&times;</a>
                            <hr></hr>
                                <h1 style={{color: '#818181'}}>"PICTURE"</h1>
                            <hr></hr>
                                <button style={{width: '25%', textAlign: 'left'}}>News</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Photos</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Video</button>
                                <button style={{width: '25%', textAlign: 'left'}}>Favorites</button>
                            <hr></hr>
                        <a href="#"><strong>News</strong></a>
                            <i class="arrow right"></i>
                                <Card/>
                            <i class="arrow left"></i>
                        <a href="#"><strong>Photos</strong></a>
                            <i class="arrow right"></i>
                                <Card/>
                            <i class="arrow left"></i>
                        <a href="#"><strong>Video</strong></a>
                            <i class="arrow right"></i>
                                <Card/>
                            <i class="arrow left"></i>
                    </div>

                    <span style={{fontSize: '30px', cursor: 'pointer', height: '1px', color: 'white', zIndex: 10}} onClick={this.openNav}>&#9776;</span>                
                </body>
            </div>
        )
    }
}