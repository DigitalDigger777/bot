/**
 * Created by korman on 20.01.18.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import TrackUrlList from './react_pages/TrackUrlList';
import FollowersList from './react_pages/FollowersList';
import Settings from './react_pages/Settings';

const history = createBrowserHistory();

export default class Index extends React.Component {
    render(){
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={TrackUrlList}/>
                    <Route exact path="/followers" component={FollowersList}/>
                    <Route exact path="/settings" component={Settings}/>
                </div>
            </Router>
        );
    }
}

render(<Index />, document.querySelector('#root'));