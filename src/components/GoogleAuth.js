import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    

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
                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    // helper function to sign in
    onSignInClick = () => {
        this.auth.signIn();
    }
    // helper function to sign out
    onSignOutClick = () => {
        this.auth.signOut();
    }
    // button helper function to check logged in or logged out
    renderAuthButton () {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />Sign Out
                </button>
            )
        } else {
            return <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon" />Sign In with Google
            </button>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);