import  React,{Component} from 'react';

import '../Home.css';

class Comment extends Component{
    constructor(props){
      super(props)
    }
		render(){
		return(

<div className="Comment main colour">




 <div className="grid-item-profile">

       
     

    <h6>{this.props.data.username}</h6>
        <p>{this.props.data.content}</p>
        </div>

      </div>

      	)
                
			
	  }
	}
		
	

	

export default Comment;