const userName = 'Karishma'
const element = <h1 id="demo">Hello ,{userName} </h1> // when refering to JS variable use {}

let cars = ['audi','benz','lambo','bmw','maruti800']
//wrapping
let carList = <ul>
    {
        cars.map((val,idx)=>{
           return <li key ={val+idx}>{val}</li> 
        })
    }
</ul>

let allItems = React.createElement('div',null,element,carList)

ReactDOM.render(allItems, document.getElementById('container'))