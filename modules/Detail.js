var React = require('react');
var NavLink = require('./NavLink');
var style = require('../js/style');


var Detail = React.createClass({
	getDefaultProps:function(){//获取默认属性
		return {
			url:'http://api.douban.com/v2/movie/subject/'
		}
	},
	getInitialState:function(){
		return {
			detailMsg:null,
			id:0,
			page:1
		}
	},
	getData:function(){
		var _this = this;
		var page = this.props.params.page;
		var id = this.props.params.id;
		console.log(this.props.params.id);
		$.ajax({
			type:"GET",
			async:false,
			url:this.props.url+id,			
			dataType:"jsonp",
			jsonp:"callback",
			
		}).then(function(res){			
			_this.setState({
				detailMsg:res,
				id:id,
				page:page
			})
		})
	},
	componentWillMount:function(){
		this.getData();
	},
	componentWillReceiveProps:function(){
		this.getData();
	},
	render:function(){
		var data = this.state.detailMsg;
		
		var page = this.state.page;
		var detail;
		if(data){//data格式是对象
			
			var data=data;
			

				
				console.log(data.casts);	
					var act=[];
					data.casts.map(function(item){	//获取主演					
						 act.push(item.name+'/');
						return act;
					})
					var aka=[];
					data.aka.map(function(item){	//获取其他名称					
						 aka.push(item+'/');
						return aka;
					})
					var genres=[];
					data.genres.map(function(item){	//获取类型					
						 genres.push(item+'/');
						return genres;
					})
					detail = (
						<div className="detailIndex">
							<div className="starter-template" style={style.starterTemplate}>								
						        <h1>
						        	<span>{data.title}/{data.original_title}</span>
						        	<span>({data.year})</span>
						        </h1>
						        <div className="out" style={style.out}>
							        <img src={data.images.medium} style={style.marginRight}/>
							        <div id="movieIfo">
							        	<p><span style={{color:'#838380'}}>其他名称：</span>{aka}</p>
							        	<p><span style={style.span}>导演：</span>{data.directors[0].name}</p>
								        <p><span style={style.span}>类型：</span>{genres}</p>
								        <p><span style={style.span}>平均得分：</span>{data.rating.average}</p>
								        <p><span style={style.span}>主演：</span>{act}</p>
								        							        
							        </div>

						        </div>	
						        <p><span style={style.span}>剧情：</span>{data.summary}</p>					        
						        
						    </div>
					    </div>
					)			
			
		}
		
		return (
			<div className="detail">
				{detail}
			</div>
		)
	}
});

module.exports = Detail;