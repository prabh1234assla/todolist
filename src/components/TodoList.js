import * as React from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Grid } from '@mui/material'

import { pink, teal } from '@mui/material/colors'

import TimerIcon from '@mui/icons-material/Timer'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone'

import {TextareaAutosize} from '@mui/base'

import '../App.css'


function getDate(e){
    e = e.split('#')
    console.log(e)
    return e[0]
}

function getTime(e){
    e = e.split('#')
    console.log(e)
    return e[1]
}

export default function TodoList({listmembers, TasksManager, TODO, edited, setEdited, Id, Styles}){

    return(<>

    <Grid className={Styles().Box} sx={{overflow: 'scroll'}} item xs={4} md={4} sm={12} >

        <Grid item xs={11} md={11} sm={12} sx={{minWidth: 20}}>

            <Card className={Styles().addedCardList} sx={{overflow: 'scroll', maxWidth: 500 }} elevation={8} >
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: pink[500], width: 58, height: 56 }}>
                        <TimerIcon sx={{fontSize: 56}} />
                    </Avatar>
                    }

                    action={
                    <IconButton className={Styles().add} sx={{height: 56, width: 56}}>
                        <DataSaverOnIcon className='addIcon' sx={{color: teal[300], fontSize: 56}} onClick={() => listmembers.disabled ? null : TasksManager({option : TODO.addaftertoggle, payload : listmembers}) }/>
                    </IconButton>
                    }

                    titleTypographyProps={{fontSize: 30, fontFamily: 'Comfortaa', fontWeight: 'bolder', color: pink[700]}}
                    subheaderTypographyProps={{fontSize: 20, fontFamily: 'Comfortaa', fontWeight: 'bolder', color: teal[400]}}

                    title={getDate(listmembers.id)}
                    subheader={getTime(listmembers.id)}

                    />

            <CardMedia
                component="img"
                image="https://picsum.photos/id/152/3888/2592"
                alt="CardMedia Image Example"
                height="140"
                title="CardMedia Image Example"
            />

      <CardContent>

      <TextareaAutosize className={Styles().textArea} value={listmembers.disabled ? listmembers.taskname : edited} style={{width: 460, fontFamily: 'Comfortaa', fontWeight: 'bolder', color: pink[600], fontSize: 20, color : (listmembers.disabled ? pink[200] : pink[600]), textDecoration : (listmembers.done ? 'line-through' : 'none')}} id={listmembers.id} onChange={e => (listmembers.id === Id) ? setEdited(e.target.value) : null}/>

      </CardContent>

      <CardActions>

            <IconButton className={Styles().focusedIcon} >
            <DeleteIcon className={Styles().Icon} sx={{bgcolor: 'rgb(254, 88, 88)', color: '#fafafa',  fontSize: 45}} onClick={() => TasksManager({option : TODO.delete, payload : listmembers})}/>
            </IconButton>

            <IconButton className={Styles().focusedIcon}>
            <FileDownloadDoneIcon className={Styles().Icon} sx={{bgcolor: 'rgb(254, 88, 88)', color: '#fafafa', fontSize: 45}} onClick={() => TasksManager({option : TODO.toggle, payload : listmembers})} />
            </IconButton>

            <IconButton className={Styles().focusedIcon}>
            <DriveFileRenameOutlineIcon className={Styles().Icon} sx={{bgcolor: 'rgb(254, 88, 88)', color: '#fafafa', fontSize: 45}} onClick={() => TasksManager({option : TODO.edit, payload : listmembers})} />
            </IconButton>
            
    </CardActions>

    </Card>
    </Grid>
    </Grid></>)
}