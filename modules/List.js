var React = require('react');
var NavLink = require('./NavLink');
var style = require('../js/style');

var Listtop = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://api.douban.com/v2/movie/'
		}
	},
	getInitialState:function(){
		return {
			list:null,
			id:0,
			page:1,
			total:0,
			classID:0
		}
	},
	getData:function(){
		var _this = this;
		var classID = this.props.params.name;
		var page = this.props.params.page||1;

		console.log(this.props.url+this.props.params.name);
		$.ajax({
			type:"GET",
			async:false,
			url:this.props.url+classID,			
			dataType:"jsonp",
			jsonp:"callback",
			data:{
				start:0,
				count:250
			}
			
		}).then(function(res){
		var resultList = res.subjects;
		var total = res.subjects.length;	

			_this.setState({
				classID:classID,
				list:resultList,
				total:total,
				page:page
			})
		})
	},
	componentWillMount:function(){
		this.getData();
	},
	componentWillReceiveProps:function(nextProps){
		if(nextProps.params.page == this.props.params.page){
			this.getData();
		}		
	},
	render:function(){
		var lists = this.state.list;
		var pageList = [];
		var pageListContent;
		var rowList = [];

		if(lists){
			var listsLen = lists.length;
			var pageLstSize= 16;			
			var pageMaxSize = Math.ceil(this.state.total/pageLstSize);

			for(var i =0;i<4;i++){				
				var colList = [];
				for(var j=0;j<4;j++){
					var index = i*4+j;
					if(index<listsLen){
						var detailUrl ="/list/detail/" + lists[index].id;
						colList.push(
							<div className="col-md-3 col-sm-3 col-xs-6 movie" key={index}>
					          <img 
					          src={lists[index].images.large} 
					          alt="Generic placeholder image"/>
					          <h4 className="title">{lists[index].title}</h4>
					          <p className="average">平均评分:{lists[index].rating.average}</p>
					          <p>
					          <NavLink to={detailUrl} className="btn btn-default" role="button">
					         	查看详情 &raquo;</NavLink></p>
					        </div>
							)
					}
				}
				rowList.push(
					<div className='row' key={i}>{colList}</div>
				)
			}

			for(var i=1;i<=pageMaxSize;i++){
				var detailUrl = "/list/" + this.state.classID+"/"+i;
				pageList.push(
					<li key={i}><NavLink to={detailUrl}>{i}</NavLink></li>
				)
			};
			pageListContent = (
				<nav><ul className="pagination">{pageList}</ul></nav>
			)

		}
		return (
			<div className="container">
		      {rowList}
		      {pageListContent}
			</div>
			

		)
	}
});

module.exports =Listtop;