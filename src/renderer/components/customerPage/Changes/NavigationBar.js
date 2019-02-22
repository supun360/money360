import React, { Component } from 'react';
// import './script/main.js'
// import "./script/jquery-1.10.2.min.js";
// import "./script/jquery-migrate-1.2.1.min.js";
// import "./script/jquery-ui.js.js";
// import "./script/bootstrap.min.js.js";
//import "./script/bootstrap-hover-dropdown.js.js";
// import "./script/html5shiv.js.js";
// import "./script/respond.min.js.js";
// import "./script/jquery.metisMenu.js.js";
// import "./script/main.js";
// import "./script/main.js";
// import "./script/main.js";
// import "./script/main.js";
// import 'http://code.jquery.com/jquery-1.6.4.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js'


class NavigationBar extends Component {
  render() {
    return (
    <div className='NavigationBar'>

        <a id="totop" href="#"><i className="fa fa-angle-up"></i></a>

        <div id="header-topbar-option-demo" className="page-header-topbar">
            <nav id="topbar" role="navigation" style={{marginBottom: '0'}} data-step="3" className="navbar navbar-default navbar-static-top">
            <div className="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <a id="logo" href="index.html" className="navbar-brand"><span className="fa fa-rocket"></span><span className="logo-text">Money 360</span><span style={{display: 'none'}} className="logo-text-icon">µ</span></a></div>
            <div className="topbar-main"><a id="menu-toggle" href="#" className="hidden-xs"><i className="fa fa-bars" id="menuIcon" style={{display: 'block', visibility: 'visible'}}></i></a>
                <ul className="nav navbar navbar-top-links navbar-right mbn">
                    <li className="dropdown"><a data-hover="dropdown" href="#" className="dropdown-toggle"><i className="fa fa-bell fa-fw"></i><span className="badge badge-green">3</span></a>
                        
                    </li>

                    <li className="dropdown topbar-user"><a data-hover="dropdown" href="#" className="dropdown-toggle"><img src="images/avatar/48.jpg" alt="" className="img-responsive img-circle"/>&nbsp;<span className="hidden-xs">Robert John</span>&nbsp;<span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-user pull-right">
                            <li><a href="#"><i className="fa fa-user"></i>My Profile</a></li>
                            <li><a href="customer.html"><i className="fa fa-calendar"></i>Customer</a></li>
                            <li><a href="users.html"><i className="fa fa-envelope"></i>Users<span className="badge badge-danger">3</span></a></li>
                            <li className="divider"></li>
                            <li><a href="Login.html"><i className="fa fa-key"></i>Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

    <script src="../src/script/jquery-1.10.2.min.js"></script>
    <script src="../src/script/jquery-migrate-1.2.1.min.js"></script>
    <script src="../src/script/jquery-ui.js"></script>
    <script src="../src/script/bootstrap.min.js"></script>
    <script src="../src/script/bootstrap-hover-dropdown.js"></script>
    <script src="../src/script/html5shiv.js"></script>
    <script src="../src/script/respond.min.js"></script>
    <script src="../src/script/jquery.metisMenu.js"></script>
    <script src="../src/script/jquery.slimscroll.js"></script>
    <script src="../src/script/jquery.cookie.js"></script>
    <script src="../src/script/icheck.min.js"></script>
    <script src="../src/script/custom.min.js"></script>
    <script src="../src/script/jquery.news-ticker.js"></script>
    <script src="../src/script/jquery.menu.js"></script>
    <script src="../src/script/pace.min.js"></script>
    <script src="../src/script/holder.js"></script>
    <script src="../src/script/responsive-tabs.js"></script>
    <script src="../src/script/jquery.flot.js"></script>
    <script src="../src/script/jquery.flot.categories.js"></script>
    <script src="../src/script/jquery.flot.pie.js"></script>
    <script src="../src/script/jquery.flot.tooltip.js"></script>
    <script src="../src/script/jquery.flot.resize.js"></script>
    <script src="../src/script/jquery.flot.fillbetween.js"></script>
    <script src="../src/script/jquery.flot.stack.js"></script>
    <script src="../src/script/jquery.flot.spline.js"></script>
    <script src="../src/script/zabuto_calendar.min.js"></script>
    <script src="../src/script/index.js"></script>

    <script src="../src/script/highcharts.js"></script>
    <script src="../src/script/data.js"></script>
    <script src="../src/script/drilldown.js"></script>
    <script src="../src/script/exporting.js"></script>
    <script src="../src/script/highcharts-more.js"></script>
    <script src="../src/script/charts-highchart-pie.js"></script>
    <script src="../src/script/charts-highchart-more.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.8/jquery.slimscroll.min.js"></script>

    <script src="../src/script/main.js"></script>

        </div>
        </div>
    );
  }
}

export default NavigationBar;