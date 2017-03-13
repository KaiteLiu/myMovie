var React = require('react');
var NavLink = require('./NavLink');
var style = require('../js/style');
var Home = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost:3000/db'
		}
	},
	getInitialState:function(){
		return {
			listtop:[],
			listcom:[],
			listhot:[]
		}
	},
	componentWillMount:function(){
		var _this = this;

		$.ajax({url:this.props.url}).then(function(res){
			
			_this.setState({
				listtop: res.top250,
				listhot: res.theater,
				listcom: res.coming,


			})
		})
	},
	render:function(){
		if(this.state.listtop.length>0){
			var lstTop = [];
			var data = this.state.listtop;
			var listLen = data.length;
			for(var i =0;i<4;i++){
				var detailUrl = "/detail/" + data[i].id;
				lstTop.push(
					<div className="col-md-3 col-sm-3 col-xs-6 movie" key={i}>
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

		if(this.state.listhot.length>0){
			var lstHot = [];
			var data = this.state.listhot;
			var listLen = data.length;
			for(var i =0;i<4;i++){
				var detailUrl = "/detail/" + data[i].id;
				lstHot.push(
					<div className="col-md-3 col-sm-3 col-xs-6 movie" key={i}>
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
		
		if(this.state.listcom.length>0){
			var lstCom = [];
			var data = this.state.listcom;
			var listLen = data.length;
			for(var i =0;i<4;i++){
				var detailUrl = "/detail/" + data[i].id;
				lstCom.push(
					<div className="col-md-3 col-sm-3 col-xs-6 movie" key={i}>
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
			<div className="content" >
		      <div className="top" >
		        <div className="H4"><h4>电影Top250</h4><NavLink to={"/list/top250"} className = "">查看更多&raquo;</NavLink></div>		      	
		        <div className="text-center">{lstTop}</div>		        
		      </div>

		      <div className="hot" >
		        <div className="H4"><h4>正在热映</h4><NavLink to={"/list/in_theaters"} className = "">查看更多&raquo;</NavLink></div>		      	
		        <div className="text-center">{lstHot}</div>		        
		      </div>

		      <div className="com" >
		        <div className="H4"><h4>即将上映</h4><NavLink to={"/list/coming_soon"} className = "">查看更多&raquo;</NavLink></div>		      	
		        <div className="text-center">{lstCom}</div>		        
		      </div>
			</div>
		  
		)
	}
});

module.exports = Home;