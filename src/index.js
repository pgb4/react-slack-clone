import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import firebase from './firebase'
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
// import { setupMaster } from 'cluster';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(() => {}, composeWithDevTools())

class Root extends React.Component {
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                // console.log(user)
                // setupMaster(user)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <Switch>
                <Route exact path ="/" component={App} />
                <Route path ="/register" component={Register} />
                <Route path ="/login" component={Login} />
            </Switch>
        )
    }
}

const RootWithAuth = withRouter(Root)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
