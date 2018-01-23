/**
 * Created by korman on 20.01.18.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './react_pages/Login';
import TrackUrlList from './react_pages/TrackUrlList';
import FollowersList from './react_pages/FollowersList';
import Settings from './react_pages/Settings';
import Registration from './react_pages/Registration';

const history = createBrowserHistory();

export default class Index extends React.Component {
    render(){
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={TrackUrlList}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/followers" component={FollowersList}/>
                    <Route exact path="/settings" component={Settings}/>
                    <Route exact path="/registration" component={Registration}/>
                </div>
            </Router>
        );
    }
}

render(<Index />, document.querySelector('#root'));