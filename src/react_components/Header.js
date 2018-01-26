/**
 * Created by korman on 22.01.18.
 */

import React from 'react';
import MobileControls from './header/MobileControls';

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shopper: JSON.parse(window.localStorage.getItem('bot_admin'))
        };
    }

    render(){
        return(
            <div className="header ">
                {/*<!-- START MOBILE CONTROLS -->*/}
                <MobileControls/>
                {/*<!-- END MOBILE CONTROLS -->*/}
                <div className=" pull-left sm-table hidden-xs hidden-sm">
                    <div className="header-inner">
                        <div className="brand inline">
                            <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
                        </div>
                        {/*<!-- START NOTIFICATION LIST -->*/}
                        {/*<NotificationsList/>*/}
                        {/*<!-- END NOTIFICATIONS LIST -->*/}
                        <a href="#" className="search-link" data-toggle="search"><i className="pg-search"></i>Type anywhere to <span className="bold">search</span></a> </div>
                </div>

                {/*<RightMenuButton/>*/}

                <div className=" pull-right">
                    {/*<!-- START User Info-->*/}
                    <div className="visible-lg visible-md m-t-10">
                        <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
                            <span className="semi-bold">{this.state.shopper.name}</span>
                        </div>
                        <div className="dropdown pull-right">
                            <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="thumbnail-wrapper d32 circular inline m-t-5">
                                <img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
                            </span>
                            </button>
                            <ul className="dropdown-menu profile-dropdown" role="menu">
                                <li>
                                    <a href="#"><i className="pg-settings_small"></i> Settings</a>
                                </li>
                                <li>
                                    <a href="#"><i className="pg-outdent"></i> Feedback</a>
                                </li>
                                <li>
                                    <a href="#"><i className="pg-signals"></i> Help</a>
                                </li>
                                <li className="bg-master-lighter">
                                    <a href="#" className="clearfix">
                                        <span className="pull-left">Logout</span>
                                        <span className="pull-right"><i className="pg-power"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<!-- END User Info-->*/}
                </div>
            </div>
        // <!-- END HEADER -->

        );
    }
}