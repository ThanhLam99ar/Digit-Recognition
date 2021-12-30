import * as React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';

export default function Digit() {
    return ( 
        
        <Container sx={{ p:1}}>
            <Container sx={{display:'flex'}}>
                <Container sx={{justifySelf:'left', width:'100%', height:500, backgroundColor:'#ffffff', 
                                boxShadow: 3, borderRadius:5, display:'flex' }}>   
                    <Box sx={{width:400,display:'flex',flexDirection: 'column', mr:25, ml:10}}>
                        <Box sx={{fontSize:40, color: '#00a1d8', fontFamily:'fantasy', mt:5, ml:5}}>
                            DIGIT RECOGINITION
                        </Box>
                        <Button sx={{borderRadius: 10,pl:10, pr:10,mt:10, width:'80%'}}variant='outlined'>Choose file</Button>
                        <Button sx={{borderRadius: 10,pl:10, pr:10,mt:4, mb: 5, width:'80%'}}variant='outlined'>Scan</Button> 
                        <TextField label="Your number" color="primary" focused />
                    </Box>
                    <Box sx={{ width:350, height:350, backgroundColor:'#d7d7d7', borderRadius:5, boxShadow: 6, mt: 5}}> </Box>
                </Container>   
            </Container>
        </Container>
    );
}
//ReactDOM.render(<Hi />, document.getElementById('root'))