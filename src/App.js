import React, {useState} from 'react';
import './App.css';
import { GoPlus } from 'react-icons/go';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const App = () => {

   const [itemToAdd, setItemToAdd] = useState("");
   const [addItem, setAddItem] = useState([]);
   
  const addItemFun = () => {
    if(!itemToAdd){

    }else {
      setAddItem([...addItem,itemToAdd]);
      setItemToAdd('');
    }
}

const deleteFun = (indexx) => {
  const upDatedValue = addItem.filter((element,index)=> {
    return index !== indexx;
  })
  setAddItem(upDatedValue);
}

  return (
    <div className="App">

    <div className="container">
    <h1>ToDo-List</h1>

    <Input type="text" className="myInput" placeholder="Enter Item" value={itemToAdd}
    onChange={(e)=>setItemToAdd(e.target.value)}  endAdornment= { <InputAdornment position="end"><GoPlus className="goplus" onClick={addItemFun} /></InputAdornment> } ></Input>
   

     
     <h1 className="Check">Your Check List:</h1>
     
     
     {
       addItem.map((result,index) => {
         return (
           <ul className="check_delete" key={index}>
             <li>
             <h3 >{result} <DeleteOutlineIcon className="deleteIcon" onClick={()=>deleteFun(index) } /></h3>
             </li>
           </ul>
         )
        })
     }
     
    
    </div>
    </div>
  )

}

export default App;