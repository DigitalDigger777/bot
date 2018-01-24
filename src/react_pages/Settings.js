/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import Header from '../react_components/Header';
import SideBar from '../react_components/SideBar';
import PageContainer from '../react_components/PageContainer';
import Config from '../Config';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);

        const config = new Config();

        this.state = {
            ask: null,
            telNotification: null,
            emailNotification: null,
            shopper: window.localStorage.getItem('shopper'),
            baseUrl: config.baseUrl
        };

        this.changeAsk = this.changeAsk.bind(this);
        this.changeTelNotification = this.changeTelNotification.bind(this);
        this.changeEmailNotification = this.changeEmailNotification.bind(this);
    }

    changeAsk(e) {
        this.setState({
            ask: e.target.value
        });
    }

    changeTelNotification(e) {
        this.setState({
            telNotification: e.target.value
        });
    }

    changeEmailNotification(e) {
        this.setState({
            emailNotification: e.target.value
        });
    }

    save(){
        console.log(this.state);
        //redirect to /#/admin/profile
        axios.post(this.state.baseUrl + 'gift-card/rest/shopper/' + this.state.shopper.id, {
            ask:                this.state.ask,
            telNotification:    this.state.telNotification,
            emailNotification:  this.state.emailNotification
        })
            .then(() => {
                //window.location = '/bot-admin/profile';
                this.setState({
                    alert: {
                        open: true,
                        message: 'Save successful'
                    }
                });

                setTimeout(() => {
                    this.setState({
                        alert: {
                            open: false,
                            message: ''
                        }
                    });
                }, 3000);
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
                            <div className="panel-title">Settings</div>
                        </div>
                        <div className="panel-body">
                            <form className="" role="form">
                                <div className="form-group form-group-default required ">
                                    <label>Ask to follow bot</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Tel for notification</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Email for notification</label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                <div className="row">
                                    <div style={{textAlign: 'center'}}>
                                        <button className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
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