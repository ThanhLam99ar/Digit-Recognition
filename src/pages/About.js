import * as React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, TextField } from '@mui/material';

export default function Digit() {
    return ( 
        
        <Container sx={{ p:1}}>
            <Grid container sx={{justifyContent:'center'}}>
                <Box sx={{width:'70%', justifyContent: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius a est vitae placerat. 
                In sodales est risus, quis convallis sem consequat a. Sed elit ex, consectetur at diam id, semper mollis dui. 
                Vestibulum at lobortis est. Ut sit amet ultricies felis. Maecenas tempus cursus molestie. Donec tristique ultrices ornare.
                Sed bibendum dolor ut scelerisque blandit. Praesent malesuada augue a porta rhoncus. 
                Proin lobortis nisi eget elit commodo, vitae vulputate odio gravida. Curabitur quis purus eget mi efficitur lacinia. <br/><br/>
                Aliquam porttitor dignissim felis, id ornare lorem viverra ac. Vivamus vitae libero ante. 
                Phasellus a est id turpis molestie accumsan. Nullam cursus quam ut commodo fringilla. 
                Vivamus commodo, lectus sit amet venenatis rhoncus, sapien mi lobortis ipsum, et sagittis nisl felis sit amet est. Proin non ultrices nisi.
                Morbi maximus, dolor quis pulvinar pellentesque, nisl augue pellentesque augue, eu congue purus velit at velit. 
                Duis fermentum condimentum ipsum, non laoreet eros auctor at. Nam turpis nisl, tincidunt in arcu non, dapibus maximus purus. 
                Nullam ut vehicula orci, quis cursus odio. Nulla laoreet orci purus, vel lobortis ante pellentesque in. Duis non elit sed mi luctus ultricies.

                Integer finibus congue nisl, non viverra lacus sollicitudin quis.<br/><br/>
                Maecenas imperdiet augue elit, sit amet semper mi congue ut. Duis venenatis nibh non euismod semper. 
                Quisque molestie neque arcu, ac rhoncus eros lobortis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                Donec nec urna quam. Morbi augue neque, porttitor eu enim vel, varius varius urna. 
                Phasellus in pharetra metus, ac commodo ligula. Sed posuere nisl porttitor ornare auctor. 
                Phasellus volutpat ante sit amet massa pulvinar, id porta lectus fringilla. 
                Ut pharetra pulvinar metus, eget rhoncus augue eleifend eget. 
                Curabitur urna arcu, pulvinar at tempus nec, molestie in sapien. 
                Morbi porta vestibulum erat, sit amet iaculis enim condimentum sed. Etiam ac interdum metus. Maecenas ac facilisis tellus.
                </Box>
            </Grid>
        </Container>
    );
}
//ReactDOM.render(<Hi />, document.getElementById('root'))