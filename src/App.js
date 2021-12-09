
import React, { useState} from 'react';
import ToDoList from './ToDoList';




const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {

    setItems((oldItems) => {
        return [...oldItems, inputList];
    });
    setInputList('');
    
  };

  const deleteItem =(id)=>{

    

    setItems((oldItems) => {
      return oldItems.filter((errElm, index) => {
        return index !== id;

      });
    });
    
  };


  

 return (
   <>

   <div className="main_div">

     
     <div className="center_div">

     <br/>
     <h1>ToDo List</h1>
     <br />

     <input type="text" placeholder="Add a item " onChange={itemEvent} value={inputList} />

     <button onClick={listOfItems}> + </button>

     <ol>
       

       {Items.map((itemval,k) => {
            return <ToDoList key={k} id={k} text={itemval} onclick={deleteItem} />
       })}

       
     </ol>



     </div>
     

   </div>

   </>

 )

};

export default App;
