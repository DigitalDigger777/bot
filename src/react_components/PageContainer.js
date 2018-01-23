/**
 * Created by korman on 22.01.18.
 */

import React from 'react';

export default class PageContainer extends React.Component {
    render(){
        return(
            <div className="page-container">
                {/*<!-- START PAGE HEADER WRAPPER -->*/}
                {/*<!-- START HEADER -->*/}

                {/*<!-- END HEADER -->*/}
                {/*<!-- END PAGE HEADER WRAPPER -->*/}
                {/*<!-- START PAGE CONTENT WRAPPER -->*/}
                <div className="page-content-wrapper">
                    {/*<!-- START PAGE CONTENT -->*/}
                    <div className="content">
                        {/*<!-- START JUMBOTRON -->*/}
                        {/*<!--<div className="jumbotron" data-pages="parallax">-->*/}
                        {/*<!--<div className="container-fluid container-fixed-lg sm-p-l-20 sm-p-r-20">-->*/}
                        {/*<!--<div className="inner">-->*/}
                        {/*<!--&lt;!&ndash; START BREADCRUMB &ndash;&gt;-->*/}
                        {/*<!--<ul className="breadcrumb">-->*/}
                        {/*<!--<li>-->*/}
                        {/*<!--<p>Pages</p>-->*/}
                        {/*<!--</li>-->*/}
                        {/*<!--<li><a href="#" className="active">Barebone template</a>-->*/}
                        {/*<!--</li>-->*/}
                        {/*<!--</ul>-->*/}
                        {/*<!--&lt;!&ndash; END BREADCRUMB &ndash;&gt;-->*/}
                        {/*<!--</div>-->*/}
                        {/*<!--</div>-->*/}
                        {/*<!--</div>-->*/}
                        {/*<!-- END JUMBOTRON -->*/}
                        {/*<!-- START CONTAINER FLUID -->*/}
                        <div className="container-fluid container-fixed-lg">
                            {/*<!-- BEGIN PlACE PAGE CONTENT HERE -->*/}
                            {this.props.children}
                            {/*<!-- END PLACE PAGE CONTENT HERE -->*/}
                        </div>
                        {/*<!-- END CONTAINER FLUID -->*/}
                    </div>
                    {/*<!-- END PAGE CONTENT -->*/}
                    {/*<!-- START FOOTER -->*/}
                    <div className="container-fluid container-fixed-lg footer">
                        <div className="copyright sm-text-center">
                            <p className="small no-margin pull-left sm-pull-reset">
                                <span className="hint-text">Copyright © 2014</span>
                                <span className="font-montserrat">REVOX</span>.
                                <span className="hint-text">All rights reserved.</span>
                                <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> | <a href="#" className="m-l-10">Privacy Policy</a>
                        </span>
                            </p>
                            <p className="small no-margin pull-right sm-pull-reset">
                                <a href="#">Hand-crafted</a>
                                <span className="hint-text">&amp; Made with Love ®</span>
                            </p>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    {/*<!-- END FOOTER -->*/}
                </div>
                {/*<!-- END PAGE CONTENT WRAPPER -->*/}
            </div>
        );
    }
}