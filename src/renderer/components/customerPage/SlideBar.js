import React, { Component } from 'react';

class SlideBar extends Component {
    render() {
      return (
      <div className='SlideBar'>
        <div id="modal-config" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" data-dismiss="modal" aria-hidden="true" className="close">
                                &times;</button>
                            <h4 className="modal-title">
                                Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et nisl eget
                                porta. Curabitur elementum sem molestie nisl varius, eget tempus odio molestie.
                                Nunc vehicula sem arcu, eu pulvinar neque cursus ac. Aliquam ultricies lobortis
                                magna et aliquam. Vestibulum egestas eu urna sed ultricies. Nullam pulvinar dolor
                                vitae quam dictum condimentum. Integer a sodales elit, eu pulvinar leo. Nunc nec
                                aliquam nisi, a mollis neque. Ut vel felis quis tellus hendrerit placerat. Vivamus
                                vel nisl non magna feugiat dignissim sed ut nibh. Nulla elementum, est a pretium
                                hendrerit, arcu risus luctus augue, mattis aliquet orci ligula eget massa. Sed ut
                                ultricies felis.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-dismiss="modal" className="btn btn-default">
                                Close</button>
                            <button type="button" className="btn btn-primary">
                                Save changes</button>
                        </div>
                    </div>
                </div>
			<div className="common-modal modal fade" id="common-Modal1" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-content">
					<ul className="list-inline item-details">
						<li><a href="http://themifycloud.com">Admin templates</a></li>
						<li><a href="http://themescloud.org">Bootstrap themes</a></li>
					</ul>
				</div>
			</div>
        </div>

        <div id="anim" style={{marginLeft: '85%', display: 'none', position: 'absolute', zIndex: '999'}}>
            <div id="msg" style={{width: '250px', height: '50px', backgroundColor: ' #ec7063'}}>
                <p style={{color: '#fbfcfc', padding: '15px', fontSize: '16px'}}>User not found</p>
            </div>
        </div>

        <div id="suce" style={{marginLeft: '85%', display: 'none', position: 'absolute', zIndex: 999}}>
            <div id="msg" style={{width: '250px', height: '50px', backgroundColor: '#82e0aa'}}>
                <p style={{color: '#273746', padding: '15px', fontSize: '16px'}}>User is their</p>
            </div>
        </div>
        
        <div id="wrapper">
            <nav id="sidebar" role="navigation" data-step="2" data-intro="Template has &lt;b&gt;many navigation styles&lt;/b&gt;"
                data-position="right" className="navbar-default navbar-static-side">
            <div className="sidebar-collapse menu-scroll bg-grey">
                <ul id="side-menu" className="nav">
                    
                     <div className="clearfix"></div>
                    <li className="active" ><a href="#"><i className="fa fa-tachometer fa-fw">
                        <div className="icon-bg bg-orange"></div>
                    </i><span className="menu-title">Dashboard</span></a></li>
                    <li><a href="Layout.html"><i className="fa fa-desktop fa-fw">
                        <div className="icon-bg bg-orange"></div>
                    </i><span className="menu-title">Fixed Deposits</span></a>
                       
                    </li>
                    <li><a href="UIElements.html"><i className="fa fa-send-o fa-fw">
                        <div className="icon-bg bg-green"></div>
                    </i><span className="menu-title">Gold Loans</span></a>
                       
                    </li>
                    <li><a href="Forms.html"><i className="fa fa-edit fa-fw">
                        <div className="icon-bg bg-violet"></div>
                    </i><span className="menu-title">Higher Purchase</span></a>
                      
                    </li>
                    <li><a href="Tables.html"><i className="fa fa-th-list fa-fw">
                        <div className="icon-bg bg-blue"></div>
                    </i><span className="menu-title">Leasing</span></a>
                          
                    </li>
                    <li><a href="DataGrid.html"><i className="fa fa-database fa-fw">
                        <div className="icon-bg bg-red"></div>
                    </i><span className="menu-title">Micro Finance</span></a>
                      
                    </li>
                    <li><a href="Pages.html"><i className="fa fa-file-o fa-fw">
                        <div className="icon-bg bg-yellow"></div>
                    </i><span className="menu-title">Mortgage Loans</span></a>
                       
                    </li>
                    <li><a href="Extras.html"><i className="fa fa-gift fa-fw">
                        <div className="icon-bg bg-grey"></div>
                    </i><span className="menu-title">Personal Loans</span></a>
                      
                    </li>
                    <li><a href="Dropdown.html"><i className="fa fa-sitemap fa-fw">
                        <div className="icon-bg bg-dark"></div>
                    </i><span className="menu-title">Power Draft</span></a>
                      
                    </li>
                    <li><a href="Email.html"><i className="fa fa-envelope-o">
                        <div className="icon-bg bg-primary"></div>
                    </i><span className="menu-title">Savings Accounts</span></a>
                      
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
      );
    }
}

export default SlideBar;