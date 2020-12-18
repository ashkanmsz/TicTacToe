import React , { Component } from "react";
import Square from "./Square";
import { Button,styled} from "@material-ui/core";
import './style.css';
import playgame from './tictoctoe.jpg';


const StartBtn = styled(Button)({

  background: 'white',
  borderRadius: 4,
  color: '#000000',
  fontSize: "3vw",
  cursor: 'pointer',
  width: "25vw",
  height: "5vw",
  textDecoration: 'none',
  fontWeight:'bold',
  left:"38.5%",

  '&:hover':{
    background: '#eee',
  },

});


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        isFinished:false,
        isnewGame:true,
    };
  }

  newGame(){
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      isFinished:false,
      isnewGame:true,
    });
  }



  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
 
  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    this.setState ({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;

    var counter=0;

    for (let i = 0; i < this.state.squares.length; i++) {
      if(this.state.squares[i] ==='X' || this.state.squares[i] ==='O')
          counter+=1;
    }

    if (winner) {
      status = 'Winner: ' + winner;
    }
    else if(counter===9){
      status = 'Equal';
    }
    
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    if(!(winner || counter === 9) && !this.state.isnewGame){
        return (
              <div className="container board" > 
                    <div className="board-row"> {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)} </div>
                    <div className="board-row"> {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)} </div>
                    <div className="board-row"> {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)} </div>  
                    <div className="container"> {status} </div> 
              </div>
          );
    }
    else if (this.state.isnewGame){
        return(
                <div>                   
                  <div className="container"> Welcome </div>
                  <img  className="picture" src={playgame} alt="tictoctoe" />
                    <div>
                      <StartBtn className="container" onClick={() => {this.setState({isnewGame : false});}} >
                      Play Game
                      </StartBtn>
                    </div>
                </div>
        );
    }   
   else{
        return(
          <div>
              <div className="container"> {status} </div> 
              <img  className="picture" src={playgame} alt="tictoctoe" />
              <div>
              <StartBtn className="container" onClick={() => {this.newGame()}} >
                New Game
              </StartBtn>
              </div>
          </div>   
        );
    }
  }
}
  export default Board;
 
