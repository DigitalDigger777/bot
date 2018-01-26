/**
 * Created by korman on 23.01.18.
 */

import React from 'react';


export default class RightMenuButton extends React.Component {
    render() {
        return (
            <div className=" pull-right">
                <div className="header-inner">
                    <a href="#" className="btn-link icon-set menu-hambuger-plus m-l-20 sm-no-margin hidden-sm hidden-xs" data-toggle="quickview" data-toggle-element="#quickview"></a>
                </div>
            </div>
        );
    }
}