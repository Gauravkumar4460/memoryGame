import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';



function FrontPage({handleImgClick,counter}){
    
    return (
        <div className='outerCell'>
          <h1 style={{fontFamily:'cursive'}} className='firstHeading'>Memory Game</h1>
          <h4 style={{fontFamily:'cursive'}} className='secondHeading'>Get points by clicking on an Image but dont click on any Image
           more than once! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Points  : {counter}</h4>
          <GridWithTemp handleClick={handleImgClick}/>
      </div>
    )
}

function GridWithTemp({handleClick}){
    
    const randomPos = [];
    for(let i=0;i<16;i++){
        const num = Math.floor(Math.random()*(15-0+1)) + 0;
        if(randomPos.includes(num)){
            i--;
            continue;
        }else{
            randomPos.push(num);
        }
    }
    return (
        <div className="gridTemp">
            <GridItem onclick={handleClick} id={randomPos[0]} key={0}/>
            <GridItem onclick={handleClick} id={randomPos[1]} key={1}/>
            <GridItem onclick={handleClick} id={randomPos[2]} key={2}/>
            <GridItem onclick={handleClick} id={randomPos[3]} key={3}/>

            <GridItem onclick={handleClick} id={randomPos[4]} key={4}/>
            <GridItem onclick={handleClick} id={randomPos[5]} key={5}/>
            <GridItem onclick={handleClick} id={randomPos[6]} key={6}/>
            <GridItem onclick={handleClick} id={randomPos[7]} key={7}/>

            <GridItem onclick={handleClick} id={randomPos[8]} key={8}/>
            <GridItem onclick={handleClick} id={randomPos[9]} key={9}/>
            <GridItem onclick={handleClick} id={randomPos[10]} key={10}/>
            <GridItem onclick={handleClick} id={randomPos[11]} key={11}/>

            <GridItem onclick={handleClick} id={randomPos[12]} key={12}/>
            <GridItem onclick={handleClick} id={randomPos[13]} key={13}/>
            <GridItem onclick={handleClick} id={randomPos[14]} key={14}/>
            <GridItem onclick={handleClick} id={randomPos[15]} key={15}/>
            
        </div>
    )
}

function GridItem({onclick,id}){
    const [gifItem,setGifItem] = useState([]);

    useEffect(()=> {
        async function getGif() {
            const apiKey = 'nMAF4XH62oJbhOvD6L6zNG2rLZLxkJQ1';
            const limit = 16;
            const query = 'black butler';
            const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}&rating=g`;
            try{
                const response = await fetch(url);
                const data = await response.json();
                setGifItem(data.data);
            }catch(error) {
                console.log('Error fetching data from Giphy!!',error);
            }
        }
        getGif();
},[]);
if (gifItem.length === 0) {
    return null;
}
    return (
        <div className='gif-name'>
            <button className='gridItem'
            onClick={onclick}
            id={id}
            style={{background:`url(${gifItem[id].images.fixed_height.url})`}}>
            </button>
            <h5 className='imageName'>{gifItem[id].title}</h5>
        </div>
    )
}
FrontPage.propTypes = {
    handleImgClick : PropTypes.func.isRequired,
    counter : PropTypes.number.isRequired,
}
GridWithTemp.propTypes = {
    handleClick : PropTypes.func.isRequired,
};
GridItem.propTypes = {
    onclick : PropTypes.func.isRequired,
    id : PropTypes.number.isRequired,
}
export {FrontPage};
