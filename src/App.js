import * as React from 'react'
import { useState, useReducer } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TodoManager from './components/TodoManager'
import TodoList from './components/TodoList'
import { makeStyles } from "@mui/styles"
import './App.css'

const TODO = {
  add : "adding",
  delete : "deleting",
  edit : "editing",
  toggle : "toggling",
  addaftertoggle : "readding"
}

function returnDate(){
  let date = new Date()
  return date.toLocaleDateString()
}

function returnTime(){
  let date = new Date()
  return date.toLocaleTimeString()
}

const Styles = makeStyles({
  Box : {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
  },

  App : {
      backgroundImage: "url('https://picsum.photos/id/25/5616/3744')",
    
      height: 'fit-content',
      overflow: 'scroll',
    
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
  },

  addedCard: {
      borderRadius: '10px !important',
      backgroundColor: "#ffb9a7 !important"
  },

  addedCardList: {
    borderRadius: '10px !important',
    backgroundColor: "#b2edff !important"
  },

  add: {
    '&:focus': {
      '& .addIcon': {
        borderRadius: '50%',
        backgroundColor: "#008080",
        color: "#ffffff"
      }
    }
  },

  textArea: {
    border: '3px solid rgb(255, 95, 164)',
    borderRadius: '6px',
      '&:focus': {
        outlineWidth: '3px',
        outlineStyle: 'solid',
        outlineColor: "#f8287b"
      }
  },

  focusedIcon: {
    '&:focus': {
    outlineWidth: '4px',
    outlineStyle: 'solid',
    outlineColor: 'rgb(253, 81, 78)'
    }
  },

  Icon: {
    height: '50px',
    width: '50px',
    borderRadius: '50%'
  },

  TasksMANAGER: {
    borderRadius: '10px',
    backgroundColor: "#ffb9a7"
  }
});

export default function App(){

    const [input, setInput] = useState('')
    const [edited, setEdited] = useState('')
    const [Id, setId] = useState(0)
    const [todoList, TasksManager] = useReducer(fn, [])

    function fn(todoList, e){
  
      switch(e.option){
      
        case "adding" :
          todoList = [...todoList, {taskname : e.payload, id : (returnDate() + '#' + returnTime() + '#' +  new Date().getMilliseconds() + '#' + Math.random()), done : false, disabled : true}]
          setInput('')
          return todoList
    
        case "deleting" :
          return todoList = todoList.filter(g => g.id !== e.payload.id)
          
        case "editing" :
        return todoList = todoList.map(function(g){
              if(g.id === e.payload.id){
                  setId(g.id)
                  setEdited(g.taskname)
                  return {...g, disabled : false}
                }
                
              else
                   return {...g, disabled :true}
        })
          
        case "toggling" :
          return todoList = todoList.map(g => g.id === e.payload.id ? ( g.done === false ? {...g, done : true} : {...g, done : false} ) : ( g.done === true ? {...g, done : true} : {...g, done : false} ))
          
        case "readding" :
          return todoList = todoList.map(g => g.id === e.payload.id ? {...g, taskname : edited, disabled : true} : {...g})
  }
}


return (<>

<div className={Styles().App}>

  <Box className={Styles().Box} sx={{ width: '100vw', height: '100vh'}}>
      
  <Grid container>

      <Grid container xs={3}>
          <Grid className={Styles().Box} item xs={12} >
          <TodoManager TODO={TODO} input={input} setInput={setInput} TasksManager={TasksManager} Styles={Styles}/>
      </Grid>

  </Grid>

  <Grid container rowSpacing={10} xs={9} columnSpacing={{ xs: 0.1 }}>

        { todoList.map(e => <TodoList listmembers={e} TasksManager={TasksManager} TODO={TODO} edited={edited} setEdited={setEdited} Id={Id} Styles={Styles}/>) }

  </Grid></Grid></Box></div>
</>)
}