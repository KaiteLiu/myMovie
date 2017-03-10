var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:this.props.url}).then(function(res){
			_this.setState({
				list: res.subjects
			})
		})
	},
	render:function(){

		if(this.state.list.length>0){
			var lst = [];
			var data = this.state.list;
			var listLen = data.length;
			for(var i =0;i<listLen;i++){
				var detailUrl = "/detail/" + data[i].id;
				lst.push(
					<div className="col-md-3 col-sm-4 col-xs-6 movie" key={i}>
			          <img 
			          src={data[i].images.large} 
			          alt="Generic placeholder image"/>
			          <h4 className="title">{data[i].title}</h4>
			          <p className="average">平均评分:{data[i].rating.average}</p>
			          <p>
			          <NavLink to={detailUrl} className="btn btn-default" role="button">
			         	查看详情 &raquo;</NavLink></p>
			        </div>
				)
			}

		}

		return (
			<div className="container marketing">
		      <div className="row">
		        {lst}
		      </div>
			</div>
		)
	}
});

module.exports = Home;