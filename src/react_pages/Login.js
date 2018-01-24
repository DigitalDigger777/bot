/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import Config from '../Config';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        const config = new Config();

        this.state = {
            email: null,
            password: null,
            baseUrl: config.baseUrl
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    componentDidMount() {
        const token = this.state.token;

        if (token) {
            axios.post(this.state.baseUrl + 'shopper-admin/rest/login', {
                token: token
            })
                .then(response => {
                    console.log(response);

                    window.localStorage.setItem('shopper_token', response.data.token);
                    window.localStorage.setItem('shopper', JSON.stringify({
                        id: response.data.id,
                        name: response.data.name,
                        logo: response.data.image
                    }));
                    window.location = '/admin/profile';
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        alert: {
                            open: true,
                            message: <span id="message-id">Login or password incorrect</span>
                        }
                    });
                });
        }
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    login() {

        this.setState({
            showLoading: true
        });


        axios.post(this.state.baseUrl + 'shopper-admin/rest/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                window.localStorage.setItem('bot_admin_token', response.data.token);
                window.localStorage.setItem('bot_admin', JSON.stringify({
                    id:     response.data.id,
                    name:   response.data.name,
                    logo:   response.data.image
                }));
                window.location = '/settings';

            })
            .catch(error => {
                console.log(error);
                this.setState({
                    alert: {
                        open: true,
                        message: <span id="message-id">Login or password incorrect</span>
                    }
                });
            });
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
                                    <label>Email</label>
                                    <input type="email" className="form-control" onChange={e => this.changeEmail(e)} required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={e => this.changePassword(e)} required/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" style={{textAlign: 'left'}}>
                                        <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
                                    </div>
                                    <div className="col-md-6" style={{textAlign: 'right'}}>
                                        <a className="btn btn-primary" href="/registration">Sign Up</a>
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