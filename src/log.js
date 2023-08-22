import React from 'react';
class Log extends React.Component {
    state = {
        error: '',
        message: '',
    };

    setError(message) {
        this.setState({ error: message });
    }

    resetError() {
        this.setError('');
    }
    checkValue(value, name) {
        if (value) return true;
        this.setError(name + ' is empty!');
        return false;
    }

    login(reset) {
        const loginField = document.querySelector('#login');
        const passwordField = document.querySelector('#pass');
        if (reset) {
            loginField.value = '';
            passwordField.value = '';
            console.clear();
        } else {
            const login = loginField.value;
            this.checkValue(login, 'Login');
            const password = passwordField.value;
            this.checkValue(password, 'Password');
            const users = JSON.parse(localStorage.getItem('users'));
            if (login && password) {
                if (login in users) {
                    if (users[login].passValue === password) {
                        this.setState({ message: 'User is correct' });
                    } else {
                        this.setState({
                            message: 'Check your login or password',
                        });
                    }
                } else {
                    this.setState({ message: 'Not found user' });
                }
                this.resetError();
            }
        }
    }

    render() {
        return (
            <div className="log">
                {/*<h1>Log In</h1>*/}
                <div>
                    <label>
                        Login:{' '}
                        <input
                            type="text"
                            id="login"
                            placeholder="Type login"
                        ></input>
                    </label>
                    <br></br>
                    <label>
                        Password:{' '}
                        <input
                            type="password"
                            id="pass"
                            placeholder="Type password"
                        ></input>
                    </label>
                    <br></br>
                    <button
                        className="but"
                        onClick={this.login.bind(this, false)}
                    >
                        login
                    </button>
                    <button
                        className="but"
                        onClick={this.login.bind(this, true)}
                    >
                        reset
                    </button>
                    {this.state.error ? <div>{this.state.error}</div> : ''}
                    {this.state.message ? <div>{this.state.message}</div> : ''}
                </div>
            </div>
        );
    }
}
export default Log;
