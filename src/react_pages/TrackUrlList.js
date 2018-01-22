/**
 * Created by korman on 21.01.18.
 */

import React from 'react';

export default class TrackUrlList extends React.Component {

    render() {
        return(
            <div className="panel panel-transparent">
                <div className="panel-heading">
                    <div className="panel-title">Track URLs list</div>
                </div>
                <div className="panel-body">
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
                            <tr>
                                <td className="v-align-middle">
                                    <a href="">drizzle.jjpanda.com</a>
                                </td>
                                <td>
                                    <div className="checkbox check-success">
                                        <input type="checkbox" value="3" id="checkbox1"/>
                                        <label for="checkbox1"></label>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn"><i className="pg-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">jjpanda.com</a>
                                </td>
                                <td>
                                    <div className="checkbox check-success">
                                        <input type="checkbox" value="3" id="checkbox2"/>
                                        <label for="checkbox2"></label>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn"><i className="pg-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">fenglinfl.com</a>
                                </td>
                                <td>
                                    <div className="checkbox check-success">
                                        <input type="checkbox" value="3" id="checkbox3" checked="checked"/>
                                        <label for="checkbox3"></label>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn"><i className="pg-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="">jerryjiang.ca</a>
                                </td>
                                <td>
                                    <div className="checkbox check-success">
                                        <input type="checkbox" value="3" id="checkbox4"/>
                                        <label for="checkbox4"></label>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn"><i className="pg-trash"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}