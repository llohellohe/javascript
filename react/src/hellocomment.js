console.log('HELLO COMMENT LIST')

var CommentBox=React.createClass(
	{
        getInitialState:function(){

        	let commentList=this.loadData();
            return {
            	data:commentList
            }
        },
        loadData(){
        	console.log('load data from server');
        	return [{id:1,name:'yangqi',content:'评论内容1'},{id:2,name:'yangqi',content:'评论内容2'}];
        },

        handlerCommentSubmit:function(id,name,comment){
        	console.log("comment has been added "+comment);

        	let oldData=this.state.data;
        	let newId=oldData.length+1;
        	oldData.push({content:comment,id:newId,name:name});
        	this.setState({data:oldData});

        },
        componentDidMount: function() {
    		this.loadData();
    		
  		},

		render:function(){
			return (
				<div>
					comment box here
					<CommentList data={this.state.data}/>
					<CommentForm onCommentSubmit={this.handlerCommentSubmit}/>
				</div>
			);
		}
	}
);


var CommentList=React.createClass(
	{
        
		render:function(){
			console.log(this.props.data);
			var commentNodes=this.props.data.map((comment)=>{
				console.log(comment.id);
				return (
					<Comment author={comment.name} key={comment.id}>{comment.content}
					</Comment>
					)
			});

			return (
				<div>
					{commentNodes}
				</div>
				)
		}
	}
);


var Comment=React.createClass(
	{
        getInitialState:function(){
            return {}
        },
		render:function(){
			return (
				<div>
					<span>{this.props.id}来自：</span><b>{this.props.author}</b>
					<p>
					内容：{this.props.children}
					</p>
				</div>
			);
		}
	}
);

var CommentForm=React.createClass(
	{
        getInitialState:function(){
            return {content:'',id:1000,name:'yangqi'}
        },
        handleSubmit:function(e){
        	console.log('submit now');
        	e.preventDefault();
        	let id=this.state.id+1;
        	let name=this.state.name;
        	this.props.onCommentSubmit(id,name,this.state.content,);
        },
        onCommentChange:function(e){
        	this.setState({content:e.target.value});
        	console.log("COMMENT CHANGE TO"+this.state.content);
        },
		render:function(){
			return (
				<div>
					<h3>comment form</h3>
					<form className="commentForm" onSubmit={this.handleSubmit}>
						<input id="commentInput" placeholder="comment here" onChange={this.onCommentChange}/>
						<input type="submit" value="Post" />
					</form>
				</div>
			);
		}
	}
);




ReactDOM.render(
	<CommentBox/>,
	document.getElementById('root')
);