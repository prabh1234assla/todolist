import * as React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton } from '@mui/material'

import { pink, red, teal } from '@mui/material/colors'

import TimerIcon from '@mui/icons-material/Timer'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn'

import {TextareaAutosize} from '@mui/base'

import '../App.css'




export default function TodoManager({TODO, input, setInput, TasksManager, Styles}){

return (
<><Card className={Styles().addedCard} sx={{ maxWidth: 400, overflow: 'scroll' }} elevation={9}>

    <CardHeader

          avatar={
            <Avatar sx={{ bgcolor: pink[500], width: 58, height: 56 }}>
              <TimerIcon sx={{fontSize: 56}} />
            </Avatar>
          }

          action={
            <IconButton className={Styles().add} sx={{height: 56, width: 56}}>
              <DataSaverOnIcon className='addIcon' sx={{color: teal[600], fontSize: 56}} onClick={() => TasksManager({option : TODO.add, payload : input})}/>
            </IconButton>
          }

          titleTypographyProps={{fontSize: 30, fontFamily: 'Comfortaa', fontWeight: 'bolder', color: pink[600]}}

          title="add a task"

    />

    <CardMedia
          component="img"
          image="https://picsum.photos/id/360/1925/1280"
          alt="flower pic"
          height="190"
    />

    <CardContent>
        <TextareaAutosize className={Styles().textArea} style={{ width: 360, fontFamily: 'Comfortaa', fontWeight: 'bolder', color: pink[600], fontSize: 20 }} value={input} onChange={e => setInput(e.target.value)}/>
    </CardContent>

</Card>
</>

)}