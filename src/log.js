import React from "react";

class Log extends React.Component {
    state = {
        error: ""
    }

    setError(message){
       this.setState({error: message}) 
    }
    
    resetError(){
        this.setError("")
    }

    checkValue(value, name){
        if(value) return true;
        this.setError(name + " is empty!")
        return false;
    }

    login(reset) {
        const loginField = document.getElementById('login');
        const passwordField = document.getElementById('pass');
        if(reset) {
            loginField.value = ""
            passwordField.value = ""
            console.clear()
        } else {
            const loginValue = loginField.value;
            const passwordValue = passwordField.value;
            if(this.checkValue(loginValue, "Login") && this.checkValue(passwordValue, "Password")){
                console.log(loginValue)
                console.log(passwordValue)
                this.resetError()
            }
        }
    }

    render(){
        return(
            <div className="log">
                {/*<h1>Log In</h1>*/}
                <div>
                    <label>Login/Username: <input type="text" id="login" placeholder="Type login"></input></label><br></br>
                    <label>Password: <input type="password" id="pass" placeholder="Type password"></input></label><br></br>
                    <button className="but" onClick={this.login.bind(this, false)}>login</button>
                    <button className="but" onClick={this.login.bind(this, true)}>reset</button>
                    {this.state.error ? <div>{this.state.error}</div> : ""}
                </div>
            </div>
        );
    }
}
export default Log;