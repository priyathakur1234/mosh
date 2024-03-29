import React, { Component } from 'react';
class Counter extends Component {
   /*state={
        count: this.props.counter.value
        
        
    };
    handleIncrement=()=>{
        //this.props.value=0;
        this.setState({count:this.state.count +1});

    };*/
   
    
    
    render() { 
       // console.log('props',this.props);
    
       
        return(
        
            <div>
               
                <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
                <button onClick={this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm"> 
                Increment
                
                </button>
               < button 
               onClick={()=>this.props.onDelete(this.props.counter.id)}
               className="btn btn-danger btn-sm m-2">
                Delete 
                </button>
            </div>
           
        );
    }
    getBadgeClasses(){
        let classes="badge m-2 badge-";
        classes+=this.props.counter.value===0 ? "warning":"primary";
        return classes;
    }
    formatCount(){
        const{value}=this.props.counter;
        return value===0 ? "zero":value;
    }
}
  

export default Counter;
 
