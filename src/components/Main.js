import React from 'react';
import Dashboard from './Dashboard';
import { getAuthToken } from '../utils/api';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loaded: false };
    }
    
    refreshSession = async () => {
        let result;
        try{ result = await getAuthToken(); } 
        catch(error) { console.log(error); }
        if(result) {
          const {
              access_token,
              expires_in
          } = result;
          localStorage.setItem('params', JSON.stringify(access_token));
          localStorage.setItem('expiry_time', new Date().getTime() + expires_in * 1000);
          if(!this.loaded) this.setState({ loaded: true });
        }
    }
    
    isValidSession = () => {
        let expiryTime;
        try { expiryTime = JSON.parse(localStorage.getItem('expiry_time')); } 
        catch(error) { expiryTime = '0'; }
        const currentTime = new Date().getTime();
        if(currentTime >= expiryTime && this.loaded) this.setState({ loaded: false });
        return currentTime < expiryTime;
    };

    render() {
        if(!this.isValidSession()) {
          this.refreshSession();
          return (
            <div className="main">
              Loading...
            </div>
          );
        }
        return (
          <div className="main">
            <Dashboard isValidSession={this.isValidSession} refreshSession={this.refreshSession} />
          </div>
        );
    }
}

export default Main;