let userName = "Manoj"

let user = <h1>I am  {userName} </h1>

let intrests = ["Dance","Football"]

let items =<ul>
    {
        intrests.map((value,index)=>{
            return <li key={value+index}>{value}</li>
        })
    }
</ul>

let allItems = React.createElement('div', null,user,items) 
ReactDOM.render(allItems, document.getElementById('container'))