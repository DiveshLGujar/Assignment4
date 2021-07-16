import React,{useState} from 'react';
import Icon from './Components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card,CardBody,Col,Row,Container } from 'reactstrap';

import './App.css';

const grid = new Array(9).fill("");

const App =() => {
  let [playerChosen, setPlayerChosen]= useState(false);
  let [isCross,setIsCross] = useState(true);
  let [winner,setWinner] = useState("");

  const playagain = () =>{
    setPlayerChosen(false);
    setIsCross(true);
    setWinner("");
    grid.fill("");
  }

  const isWinner = ()=>{
    if(grid[0]===grid[1] && grid[0]===grid[2] && grid[0]!==""){
      setWinner(grid[0]);
    }
    else if(grid[3]===grid[4] && grid[3]===grid[5] && grid[3]!==""){
      setWinner(grid[3]);
    }
    else if(grid[6]===grid[7] && grid[6]===grid[8] && grid[6]!==""){
      setWinner(grid[6]);
    }
    else if(grid[0]===grid[3] && grid[0]===grid[6] && grid[0]!==""){
      setWinner(grid[0]);
    }
    else if(grid[1]===grid[4] && grid[1]===grid[7] && grid[1]!==""){
      setWinner(grid[1]);
    }
    else if(grid[2]===grid[5] && grid[2]===grid[8] && grid[2]!==""){
      setWinner(grid[2]);
    }
    else if(grid[0]===grid[4] && grid[0]===grid[8] && grid[0]!==""){
      setWinner(grid[0]);
    }
    else if(grid[2]===grid[4] && grid[2]===grid[6] && grid[2]!==""){
      setWinner(grid[2]);
    }
    else if(!grid.includes("")){
      setWinner("noone");
    }
    
    }

    const firstPlayer=(choice)=>{
      setIsCross(true)
    }

    const chooseCross = ()=>{
      setPlayerChosen(true);
    }
    const chooseCircle = ()=>{
      setIsCross(false)
      setPlayerChosen(true);
    }


  const setItem = (index)=>{
    if(grid[index]=="" && !winner && playerChosen){
      if(isCross){
        grid[index]="cross";
        
      }
      else{
        grid[index]="circle";
      }
      setIsCross(!isCross);
    }
    isWinner();
  }

  
  return (
    <Container className="p-5">
        <Row>
            <Col  md={6} className="offset-md-3">
            
              { playerChosen? (
                (winner!=="")? (
                  <div className='btn'>
                    <h2 className="text-center">{winner+" is the winner!!"}</h2>
                    <Button  onClick={()=>{playagain()}}>Play Again?</Button>
                  </div>
                  ):
                   (
                     isCross? <h2 className="text-center">{"cross's chance"}</h2>:<h2 className="text-center">{"circle's chance"}</h2>
                     )
              ):(
                <div className='btn'>
                <h2 className="text-center">{"Who is the first Player?"}</h2>
                <Button  onClick={()=>{chooseCross()}}>cross</Button>
                <Button  onClick={()=>{chooseCircle()}}>circle</Button>
                </div>
              )
                
                }
            
              <div className="grid">

                {grid.map((value,index)=> 
                <Card onClick={()=>setItem(index)} key={index}>
                  <CardBody className="box" >

                      <Icon choice ={grid[index]}/>

                  </CardBody>                
                </Card>
                )}

              </div>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
