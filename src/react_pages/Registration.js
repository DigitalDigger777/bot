/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import Core from '../utils/Core';
import Config from '../Config';

export default class Registration extends React.Component {

    constructor(props){
        super(props);

        const config = new Config();

        this.state = {
            name: null,
            email: null,
            password: null,
            retryPassword: null,
            baseUrl: config.baseUrl
        };

        this.updateName             = this.updateName.bind(this);
        this.updateEmail            = this.updateEmail.bind(this);
        this.updatePassword         = this.updatePassword.bind(this);
        this.updateRetryPassword    = this.updateRetryPassword.bind(this);
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    updateRetryPassword(e) {
        this.setState({
            retryPassword: e.target.value
        });
    }

    save() {

        let allowSave = true;

        if (this.state.name === '') {
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Name is empty'
                }
            });
        }

        if (this.state.email === '') {
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Email is empty'
                }
            });
        }

        if (this.state.password === '') {
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Password is empty'
                }
            });
        }

        if (this.state.password && this.state.password !== this.state.retryPassword) {
            allowSave = false;
            this.setState({
                alert: {
                    open: true,
                    message: 'Passwords do not match'
                }
            });
        }

        if (allowSave) {
            this.setState({
                showLoading: true
            });

            axios.post(this.state.baseUrl + 'gift-card/rest/shopper/0', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    this.setState({
                        showLoading: false,
                        showWarningEmail: false
                    });
                    //window.location = '/admin/login';
                    this.setState({
                        alert: {
                            open: true,
                            message: response.data.message
                        }
                    });

                    setTimeout(() => {
                        this.setState({
                            alert: {
                                open: false,
                                message: ''
                            }
                        });
                        window.location = '/bot-admin/login';
                    }, 3000);
                })
                .catch(error => {
                    console.log(error.response.data.message);
                    this.setState({
                        showLoading: false,
                        showWarningEmail: true,
                        showWarningToast: true,
                        warningToastMessage: error.response.data.message
                    });

                    setTimeout(() => {
                        this.setState({
                            showWarningToast: false
                        });
                    }, 3000);
                });
        }
    }

    render() {
        return(
            <div className="panel panel-transparent">
                <div className="panel-heading">
                    <div className="panel-title"></div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-4">
                            <form className="" role="form" style={{width: '50%'}}>
                                <div className="form-group form-group-default required ">
                                    <label>Name</label>
                                    <input type="text" className="form-control" onChange={e => this.updateName(e)} required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Email</label>
                                    <input type="email" className="form-control" onChange={e => this.updateEmail(e)} required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={e => this.updatePassword(e)} required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Retry Password</label>
                                    <input type="password" className="form-control" onChange={e => this.updateRetryPassword(e)} required/>
                                </div>
                                <div className="row">
                                    <div style={{textAlign: 'center'}}>
                                        <button className="btn btn-primary" onClick={this.save.bind(this)}>Register</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}