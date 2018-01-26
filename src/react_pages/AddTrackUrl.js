/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import axios from 'axios';

import Header from '../react_components/Header';
import SideBar from '../react_components/SideBar';
import PageContainer from '../react_components/PageContainer';
import Config from '../Config';

export default class AddTrackUrl extends React.Component {

    constructor(props) {
        super(props);

        const config = new Config();

        this.state = {
            url: null,
            shopper: window.localStorage.getItem('shopper'),
            trackUrlId: typeof props.match.params.id != 'undefined' ? props.match.params.id : 0,
            trackUrl: null,
            token: window.localStorage.getItem('bot_admin_token'),
            baseUrl: config.baseUrl
        };

        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

    save(){
        console.log(this.state);
        //redirect to /#/admin/profile
        axios.post(this.state.baseUrl + 'fb/bot-track-url/' + this.state.trackUrlId, {
            trackUrl: this.state.url,
            token: this.state.token
        })
            .then(() => {
                window.location = '/';
            })
            .catch(error => {

            });
    }


    render() {
        return(
            <div>
                <Header/>
                <SideBar/>

                <PageContainer>
                    <div className="panel panel-transparent">
                        <div className="panel-heading">
                            <div className="panel-title">Add track url</div>
                        </div>
                        <div className="panel-body">
                            <form className="" role="form">
                                <div className="form-group form-group-default required ">
                                    <label>Url</label>
                                    <input type="text" className="form-control" onChange={e => this.changeUrl(e)} required/>
                                </div>
                                <div className="row">
                                    <div style={{textAlign: 'center'}}>
                                        <button className="btn btn-primary" onClick={this.save.bind(this)} type="button">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}