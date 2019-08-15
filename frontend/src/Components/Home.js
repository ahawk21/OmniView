import React from "react";
import './Home.css';



export default class Home extends React.Component {

    openNav(){ 
         // Sidebar length
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav(){
         // Sidebar 
        document.getElementById("mySidenav").style.width = "0px";
    }

    render(){
        return(
            <div> 
                
                
                <header>
                <style>{'body { background-color: white; width: 100%; height: 100%; } html {background-color: red; width: 100%; height: 100%;}'}</style>
                    
                </header>
                <body >
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                        <a href="#">News</a>
                            <br></br>
                        <a href="#">Photos</a>
                            <br></br>
                        <a href="#">Video</a>
                            <br></br>
                    </div>

                    <span style={{fontSize: '30px', cursor: 'pointer', width: 'absolute'}} onClick={this.openNav}>&#9776;</span>                
                </body>
            </div>
        )
    }
}