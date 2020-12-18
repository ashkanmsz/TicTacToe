import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyLapTop = styled(Button)({
    
    background: 'white',
    borderRadius: 5,
    border: 0,
    color: 'black',
    height:"14vw",
    paddingleft:"35vw",
    width:"14vw",
    boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .7)',
    marginRight: "0.83vw",
    marginTop: "0.83vw",
    fontSize:"15vw",
});

const MyMobile = styled(Button)({
    
    background: 'white',
    borderRadius: 5,
    border: 0,
    color: 'black',
    height:"25vw",
    paddingleft:"35vw",
    width:"25vw",
    boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .7)',
    marginRight: "2vw",
    marginTop: "2vw",
    fontSize:"15vw",
    
});


function IsResponsive(props , matches){
    
    if(!matches){
    return(<MyLapTop className="fontstyle" onClick={props.onClick}> {props.value} </MyLapTop>)
    }else{
    return(<MyMobile className="fontstyle" onClick={props.onClick}> {props.value} </MyMobile>) 
    }
}

function Square(props){

    const matches = useMediaQuery('(max-width:900px)');

    return (
        IsResponsive(props , matches)
    );
}
 
export default Square;

