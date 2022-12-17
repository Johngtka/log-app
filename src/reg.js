import React from "react";

class Reg extends React.Component {
    state = {
        error: ""
    }

    setError(message){
       this.setState({error: message}) 
    }

    resetError(){
        this.setError("")
    }

    check(bool, error){
        if(bool){
            this.setError(error);
            return true;
        }
        return false;
    }

    checkValue(value, name){
        if(value) return true;
        this.setError(name + " is empty!")
        return false;
    }

    register(reset) {
        const nameField = document.getElementById('name')
        const subNameField = document.getElementById('sbname')
        const phoneField = document.getElementById('phone')
        const emailField = document.getElementById('email')
        const loginField = document.getElementById('login')
        const passField = document.getElementById('pass')
        if(reset) {
            nameField.value = ""
            subNameField.value = ""
            phoneField.value = ""
            emailField.value = ""
            loginField.value = ""
            passField.value = ""
            console.clear()
        } else {
            const nameValue = nameField.value
            const subNameValue = subNameField.value
            const phoneValue = Number.parseInt(phoneField.value)
            const emailValue = emailField.value
            const loginValue = loginField.value
            const passValue = passField.value
            if(this.checkValue(nameValue, "Name") &&
            this.checkValue(subNameValue, "Subname") &&
            this.checkValue(phoneValue, "Phone") &&
            this.checkValue(emailValue, "Email") &&
            this.checkValue(loginValue, "Login")&&
            this.checkValue(passValue, "Pass")){
                console.log(nameValue)
                console.log(subNameValue)
                console.log(phoneValue)
                console.log(emailValue)
                console.log(loginValue)
                console.log(passValue)
                this.resetError()
            }
        }
    }

    render(){
        return(
            <div className="reg">
                {/*<h1>Sign In</h1>*/}
                <div>
                    <label>Name: <input type="text" id="name" placeholder="Type name"></input></label><br></br>
                    <label>Subname: <input type="text" id="sbname" placeholder="Type subname"></input></label><br></br>
                    <label>Phone number: <input type="text" id="phone" placeholder="*** *** ***"></input></label><br></br>
                    <label>E-Mail: <input type="text" id="email" placeholder="ex@gmail.com"></input></label><br></br>
                    <label>Login: <input type="text" id="login" placeholder="Max 25 signs"></input></label><br></br>
                    <label>Password: <input type="password" id="pass" placeholder="Max 25 signs"></input></label><br></br>
                    <button className="but" onClick={this.register.bind(this, false)}>sign</button>
                    <button className="but" onClick={this.register.bind(this, true)}>reset</button>
                    {this.state.error ? <div>{this.state.error}</div> : ""}
                </div>
            </div>
        );
    }
}
export default Reg;