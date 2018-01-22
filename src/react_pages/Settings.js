/**
 * Created by korman on 21.01.18.
 */

import React from 'react';

export default class Settings extends React.Component {

    render() {
        return(
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
                            <input type="text" className="form-control" required/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}