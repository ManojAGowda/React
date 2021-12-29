//functional component Example

function Header({mobiles}){            
    return <h1 className="example">Mobiles {mobiles}</h1> 
}

function Content(props){ //using props
    return <h3 className="content"> {props.mobileId} {props.Name}</h3>
}

function Footer({person}){    
    return <h1 className="example">Footer {person.firstName} {person.secondName}</h1>
}
ReactDOM.render(<div>
    <Header phone="Mobiles" />
    
    <Content mobileId="01" Name="Iphone"/>
    <Content mobileId="02" Name="Samsung"/>
    <Content mobileId="03" Name="OnePlus"/>
    <Footer  person={{firstName:"Steve"}}/>
</div>, document.getElementById('container'))