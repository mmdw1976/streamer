import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }
    componentDidMount() {
        // load google apis
        window.gapi.load('client:auth2', () => {
            // load parts of library you want
            window.gapi.client.init({
                // created key of project from console.developers.google
                clientId: '791043712799-dqm1qr6ps440dutovdvgpnvothgjeao4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }
    // helper function to sign in
    onSignIn = () => {
        this.auth.signIn();
    }
    // helper function to sign out
    onSignOut = () => {
        this.auth.signOut();
    }
    // button helper function to check logged in or logged out
    renderAuthButton () {
        if(this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon" />Sign Out
                </button>
            )
        } else {
            return <button className="ui blue google button" onClick={this.onSignIn}>
                <i className="google icon" />Sign In with Google
            </button>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;