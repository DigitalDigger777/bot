/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import axios from 'axios';

import Header from '../react_components/Header';
import SideBar from '../react_components/SideBar';
import PageContainer from '../react_components/PageContainer';
import Config from '../Config';

export default class TrackUrlList extends React.Component {

    constructor(props) {
        super(props);

        const config = new Config();

        this.state = {
            items: [],
            token: window.localStorage.getItem('bot_admin_token'),
            baseUrl: config.baseUrl
        };
    }

    componentWillMount() {
        axios.get(this.state.baseUrl + 'fb/bot-track-url/0', {
            params: {
                method: 'LIST',
                token: this.state.token
            }
        })
            .then(response => {
                console.log(response);
                this.setState({
                    items: response.data
                });
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
                            <div className="panel-title">Track URLs list</div>
                        </div>
                        <div className="panel-body">
                            <div className="panel">
                                <div className="panel-body">
                                    <a className="btn btn-primary" href="/add-track-url">Add Url</a>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover" id="basicTable">
                                    <thead>
                                    <tr>
                                        <th style={{width: '70px'}}>Url</th>
                                        <th style={{width: '30px'}}>Is ignored</th>
                                        <th style={{width: '30px'}}>Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.items.map((item, key) => {
                                        return <tr key={key}>
                                                    <td className="v-align-middle">
                                                        <a href={item.url}>{item.url}</a>
                                                    </td>
                                                    <td>
                                                        <div className="checkbox check-success">
                                                            <input type="checkbox" value="3" id="checkbox1" checked={item.isIgnore ? 'checked' :''}/>
                                                            <label for="checkbox1"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="btn"><i className="pg-trash"></i></button>
                                                    </td>
                                                </tr>
                                    })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}