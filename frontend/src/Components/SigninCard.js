import React from 'react';
// import ReactCardFlip from 'react-card-flip';
// import Front from './Front';
// import Back from './Back';
import './SigninCard.css';

export default class SigninCard extends React.Component{

    
    state = {
        username: '',
        password: ''
    }
    
    handleChange = e => {
        this.setState({
            [e.target.text]: e.target.value,
            [e.target.password]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:this.state.username,
                password:this.state.password
            })
        }).then(res=>res.json())
        
        .then(user => {
            if(user.error){
                alert('Incorrect Username or Password. Please try again.')
                this.props.history.push('/sign-in')
            }
            else{
                localStorage.setItem('token',user.auth_token)
                localStorage.setItem('user',user.id)
                this.props.history.push('/browse')
            }
        })
        
    }

    componentDidMount(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    
    render(){
        
        return(
            
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#" onSubmit={this.handleSubmit}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.handleToggle}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={this.handleSubmit}>
                        <h1>Sign in</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <br/>
                        <button onClick={this.handleToggle}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To share and save your favorites, please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome to OmniView!</h1>
                            <p>A revolutionary new way to view trending data</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}