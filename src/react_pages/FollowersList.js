/**
 * Created by korman on 21.01.18.
 */

import React from 'react';
import Header from '../react_components/Header';
import SideBar from '../react_components/SideBar';
import PageContainer from '../react_components/PageContainer';

export default class FollowersList extends React.Component {

    render() {
        return(
            <div>
                <Header/>
                <SideBar/>

                <PageContainer>
                    <div className="panel panel-transparent">
                        <div className="panel-heading">
                            <div className="panel-title">Followers List</div>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-hover" id="basicTable">
                                    <thead>
                                        <tr>
                                            <th style={{width: '75px'}}>Facebook ID</th>
                                            <th style={{width: '25px'}}>User Name</th>
                                            <th style={{width: '25px'}}>Unfollow</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="v-align-middle">
                                                1516632350
                                            </td>
                                            <td className="v-align-middle">
                                                John Doe
                                            </td>
                                            <td>
                                                <button className="btn"><i className="pg-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1516632363
                                            </td>
                                            <td>
                                                Bob Doe
                                            </td>
                                            <td>
                                                <button className="btn"><i className="pg-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1516632378
                                            </td>
                                            <td>
                                                Eric Doe
                                            </td>
                                            <td>
                                                <button className="btn"><i className="pg-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                1516632452
                                            </td>
                                            <td>
                                                Angela Doe
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
                </PageContainer>
            </div>
        );
    }
}