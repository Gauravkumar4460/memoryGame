import { useState } from 'react'
import './App.css'
import { FrontPage } from './Templates.jsx';
import PropTypes from 'prop-types';

function App({onClick}) {
    const [gameOver,setGameOver] = useState(false);
    const [counter,setCounter] = useState(0);
    const [selectedImageId,setSeletedImageId] = useState([]);
    
    const addImageId = (id) => {
      setSeletedImageId(prevItem => [...prevItem,id]);
      console.log(`id inserted: ${id}`);
    }
    function handleImageClick(e){
      if(selectedImageId.find(id =>  id === e.target.id)){
            setGameOver(true);
      }else{
        setCounter(counter+1);
        addImageId(e.target.id);
      }
    }
    if(gameOver){
      return (
        <div style={{fontFamily:'cursive',fontSize:'xx-larger',display:'flex', flexDirection:'column', gap:'50px', justifyContent:'center', alignItems:'center', backgroundColor:'beige', width:'80vw', height:'80vh',margin:'50px auto'}}>
        <h1 style={{fontFamily:'cursive', fontSize:'xx-larger'}}>Score : {counter}</h1>
        <button onClick={onClick} className='playAgain-button'> play Again </button>
        </div>
      )
    }
    return(
      <FrontPage handleImgClick={handleImageClick} counter={counter}/>
    )
}
App.propTypes = {
  onClick : PropTypes.func.isRequired,
}
export default App
