//class component

class Header extends React.Component{
    render(){
        return <h1>I M HEADER</h1>
    }
}
//Content Component

class Content extends React.Component{
    render()
    {
        return <h2>{this.props.Component}{this.props.firstName}{this.props.secondName}</h2>
    }
}

//Footer Component
class Footer extends React.Component{
    render(){
        return <h1>I M FOOTER</h1>
    }
}

ReactDOM.render(<div>
    <Header/>
    <Content Content=""/>
    <Footer/>
</div>,document.getElementById("container"))
