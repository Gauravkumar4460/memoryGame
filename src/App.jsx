import { useState } from 'react'
import './App.css'
import { FrontPage } from './Templates.jsx';

function App() {
    const [counter,setCounter] = useState(0);
    const [selectedImageId,setSeletedImageId] = useState([]);

    
    const addImageId = (id) => {
      setSeletedImageId(prevItem => [...prevItem,id]);
      console.log(`id inserted: ${id}`);
    }
    function handleImageClick(e){
      if(selectedImageId.find(id =>  id === e.target.id)){
            setCounter(0);
            setSeletedImageId([]);
      }else{
        setCounter(counter+1);
        addImageId(e.target.id);
      }
    }
    return(
      <FrontPage handleImgClick={handleImageClick} counter={counter}/>
    )
}

export default App
