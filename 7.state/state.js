class Greet extends React.Component{
    state={
        firstName:"manoj",
        age:18
    }


render(){
    return<div>
        <h1>Welcome,{this.state.firstName},Age: {this.state.age}</h1>
        <button onClick={()=>{this.changeName()}}>Click to change name</button>
    </div>
}
changeName(){
    console.log("before:",this.state.firstName);
    this.setState({
        firstName:"ashwath",
        age:18
    },()=>{
        console.log("after:",this.state.firstName);
    })
}
}


ReactDOM.render(<Greet/>,document.getElementById('container'))