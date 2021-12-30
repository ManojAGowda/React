function Header(){
    return <h1>I M HEADER</h1>
}
function Content(props){
    console.log(props);
    return <h2>I M CONTENT {props.userName} {props.uId} {props.firstName} {props.secondName}</h2>
}
function Footer({person}){
    return <h1>I M FOOTER {person.firstName} {person.secondName}</h1>

}

ReactDOM.render(<div>
    <Header brand="Volvo" price="122"/>
    <Content firstName="manoj" secondName="gowda"/>
    <Content userName="bella" uId='1111'/>
    <Footer person={{firstName:"adam",secondName:"chris"}}/>
 </div>,document.getElementById('container'))

