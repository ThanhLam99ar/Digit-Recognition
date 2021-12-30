import * as React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { shadows } from '@mui/system';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Digit() {
    return ( 
        <Container sx={{ p:1}}>
            <Container sx={{display:'flex', mt:5}}>
                <Container sx={{justifySelf:'left', backgroundColor:'#ffffff', width:'100%', boxShadow: 3, display:'flex' }}>
                    <Box sx={{color: '#00a1d8', fontFamily:'fantasy' }}>     
                        <img src="images/images.d.gif" width={800}/>
                    </Box>
                    <Typography variant="body2" color="text.secondary" marginLeft={5} py={5} pr={3} mt={12}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species. <br/><br/> 
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica 
                        </Typography>   
                </Container>    
            </Container>
            <Container sx={{display:'flex', mt:5}}>
                <Container sx={{justifySelf:'left', backgroundColor:'#ffffff', width:'100%', boxShadow: 3, display:'flex' }}>
                    <Box sx={{color: '#00a1d8', fontFamily:'fantasy', mt: 3, mb:2 }}>     
                        <img src="images/images.b.png" width={350}/>
                    </Box>
                    <Typography variant="body2" color="text.secondary" marginLeft={5} py={5}>
                                <b> Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica </b> <br/><br/> 
                                Maecenas imperdiet augue elit, sit amet semper mi congue ut. Duis venenatis nibh non euismod semper. 
                Quisque molestie neque arcu, ac rhoncus eros lobortis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Donec nec urna quam. Morbi augue neque, porttitor eu enim vel, varius varius urna. 
                Phasellus in pharetra metus, ac commodo ligula. Sed posuere nisl porttitor ornare auctor. 
                Phasellus volutpat ante sit amet massa pulvinar, id porta lectus fringilla. 
                Ut pharetra pulvinar metus, eget rhoncus augue eleifend eget. 
                Curabitur urna arcu, pulvinar at tempus nec, molestie in sapien. 
                Morbi porta vestibulum erat, sit amet iaculis enim condimentum sed. Etiam ac interdum metus. Maecenas ac facilisis tellus.</Typography>
                </Container>    
            </Container>
            <Container sx={{display:'flex', mt:5}}>
                <Container sx={{justifySelf:'left', backgroundColor:'#ffffff', width:'100%', boxShadow: 3, display:'flex' }}>
                    <Typography variant="body2" color="text.secondary" marginLeft={5} py={5} pr={3}>
                        <b>Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica </b><br/><br/> 
                        Maecenas imperdiet augue elit, sit amet semper mi congue ut. Duis venenatis nibh non euismod semper. 
                        Quisque molestie neque arcu, ac rhoncus eros lobortis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Donec nec urna quam. Morbi augue neque, porttitor eu enim vel, varius varius urna. 
                        Phasellus in pharetra metus, ac commodo ligula. Sed posuere nisl porttitor ornare auctor. 
                        Phasellus volutpat ante sit amet massa pulvinar, id porta lectus fringilla. 
                        Ut pharetra pulvinar metus, eget rhoncus augue eleifend eget. 
                        Curabitur urna arcu, pulvinar at tempus nec, molestie in sapien. 
                        Morbi porta vestibulum erat, sit amet iaculis enim condimentum sed. Etiam ac interdum metus. Maecenas ac facilisis tellus.</Typography>
                    <Box sx={{color: '#00a1d8', fontFamily:'fantasy', mt: 3, mb:2 }}>     
                        <img src="images/images.c.jfif" width={400}/>
                    </Box>   
                </Container>    
            </Container>
            <Container sx={{display:'flex', mt:5}}>
                <Container sx={{justifySelf:'left', backgroundColor:'#ffffff', width:'100%', boxShadow: 3, display:'flex' }}>
                    <Typography variant="body2" color="text.secondary" marginLeft={5} py={5} pr={3}>
                        <b>Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica </b><br/><br/> 
                        Maecenas imperdiet augue elit, sit amet semper mi congue ut. Duis venenatis nibh non euismod semper. 
                        Quisque molestie neque arcu, ac rhoncus eros lobortis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Donec nec urna quam. Morbi augue neque, porttitor eu enim vel, varius varius urna. 
                        Phasellus in pharetra metus, ac commodo ligula. Sed posuere nisl porttitor ornare auctor. 
                        Phasellus volutpat ante sit amet massa pulvinar, id porta lectus fringilla. 
                        Ut pharetra pulvinar metus, eget rhoncus augue eleifend eget. 
                        Curabitur urna arcu, pulvinar at tempus nec, molestie in sapien. 
                        Morbi porta vestibulum erat, sit amet iaculis enim condimentum sed. Etiam ac interdum metus. Maecenas ac facilisis tellus.</Typography>
                    <Box sx={{color: '#00a1d8', fontFamily:'fantasy', mt: 3, mb:2 }}>     
                        <img src="images/images.e.jpg" width={400}/>
                    </Box>   
                </Container>    
            </Container>
        </Container>           
    );
}

//ReactDOM.render(<Hi />, document.getElementById('root'))