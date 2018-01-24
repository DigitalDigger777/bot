/**
 * Created by korman on 21.01.18.
 */

import React from 'react';

export default class Login extends React.Component {

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
                                    <input type="email" className="form-control" required/>
                                </div>
                                <div className="form-group form-group-default required ">
                                    <label>Password</label>
                                    <input type="password" className="form-control" required/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" style={{textAlign: 'left'}}>
                                        <button className="btn btn-primary">Login</button>
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