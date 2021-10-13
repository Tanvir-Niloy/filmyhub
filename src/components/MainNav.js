import React ,{useState,useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import {Box,BottomNavigation,BottomNavigationAction,makeStyles} from '@material-ui/core';
import {WhatshotOutlined,Movie,TvOutlined,Search} from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
      width: '100%',
      position:'fixed',
      bottom:0,
      backgroundColor:"#2d313a",
      zIndex:100
    }
  });


export default function SimpleBottomNavigation() {

  const classes = useStyles();
  const history = useHistory()
  const [value, setValue] = React.useState(0);


  useEffect(() => {
  
       if(value===0){

          history.push('/')

       }else if(value===1){

        history.push('/movies')
       }
       else if(value===2){

        history.push('/series')

       }else if(value===3){

        history.push('/search')
       }


  }, [value,history])

  return (
    <Box > 
      <BottomNavigation
       value={value}
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       showLabels
       className={classes.root}
      >
        <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotOutlined />} />
        <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<Movie />} />
        <BottomNavigationAction style={{color:"white"}} label="Tv Series" icon={<TvOutlined />} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<Search />} />
      </BottomNavigation>
    </Box>

  );
}