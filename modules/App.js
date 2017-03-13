var React = require('react');
var NavLink = require('./NavLink');
var IndexLink = require('react-router').IndexLink;

var App = React.createClass({
	getInitialState: function() {
	    return {
	    	value:'search'
	    }
	  },
	handleChange: function(event) {
		var _this = this;
	    _this.setState({
	    	value:event.target.value
	    })
  	},
	render:function(){
		var link = "/search/"+this.state.value;
		console.log(link);
		return (
				 <div className="navbar-wrapper">
      				<div className="container">
						<nav className="navbar navbar-inverse navbar-static-top">
				          <div className="container">
				            <div className="navbar-header">
				              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				                <span className="sr-only">Toggle navigation</span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>
				              <div className="navbar-brand" >电影电影</div>
				            </div>
				            <div id="navbar" className="navbar-collapse collapse">
				              <ul className="nav navbar-nav">
				                <li><IndexLink to="/">首页</IndexLink></li>
				                <li><NavLink to="/about">关于我们</NavLink></li>
				                <li><NavLink to="/contact">联系我们</NavLink></li>
				                <li className="dropdown">
				                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多<span className="caret"></span></a>
				                  <ul className="dropdown-menu">
				                    <li><a href="#">Action</a></li>
				                    <li><a href="#">Another action</a></li>
				                    <li><a href="#">Something else here</a></li>
				                    <li role="separator" className="divider"></li>
				                    <li className="dropdown-header">Nav header</li>
				                    <li><a href="#">Separated link</a></li>
				                    <li><a href="#">One more separated link</a></li>
				                  </ul>
				                </li>

				                 <form className="navbar-form navbar-left">
							        <div className="form-group">
							          <input type="text" className="form-control" placeholder="search" onChange={this.handleChange} id="search" ref="text"/>
							        </div>
							        <button type="button" className="btn btn-default"><NavLink to={link}>搜索</NavLink></button>
							      </form>
				              </ul>
				            </div>
				          </div>
				        </nav>

				        {this.props.children}
						
				         <footer>
					        <p className="pull-right"><a href="#">Back to top</a></p>
					        <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
						 </footer>
					</div>
				</div>
		)
	}
});

module.exports = App;