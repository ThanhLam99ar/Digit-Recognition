import * as React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, TextField } from '@mui/material';

export default function Digit() {
    return ( 
        
        <Container sx={{ p:1}}>
            <Grid container sx={{justifyContent:'center',backgroundColor:'#ffffff', width:'100%', boxShadow: 3, display:'flex', borderRadius:5 }}>
                <Box sx={{fontSize:40, color: '#00a1d8', fontFamily:'fantasy', mt:5}}>
                            ABOUT DIGIT RECOGINITION 
                </Box>  
                <Box sx={{width:'70%', justifyContent: 'center', textAlign:'justify', pt:10, pb:10}}>

                In recent years, AI-Artificial Intelligence, and more specifically Machine Learning, has emerged as evidence of the fourth industrial revolution.
                 Artificial Intelligence is creeping into every area of our lives without us even realizing it.<br/><br/> 

In the current era, information technology is applied in almost all fields from production and manufacturing to services and entertainment, contributing to the development of the economy.
 Self-driving cars from Google and Tesla, Facebook's self-tagging system in photos, Apple's Siri virtual assistant, Amazon's product recommendation system, Netflix's movie recommendation system,
  Google's AlphaGo Go player Deepmind,…, are just a few of the many applications of AI/Machine Leaning.
<br/><br/>
Machine Learning is a subset of artificial intelligence that is only a small part of its potential and it's always around our lives.
 Simply put, Machine Learning is a subfield of Computer Science that has the ability to learn on it's own based on input without having to be specifically programmed.
  Any technology user today has benefited from machine learing.
<br/><br/>
In this report Handwritten Character Recognition project, is the ability of a computer or device to recognize 
handwriting input from sources such as printed physical documents, photographs, and other devices, or to use hadwriting as direct input to the touch screen and then interpret it as text on the computer. 
<br/><br/>
We'll also look at the popular method of printing text formatting here, namely the Neural Network.
It has an application that adapts to any change from the input. Therefore, it can begiven all the results in the best possible way without you needing to re-engineer the first criteria. 
This concept has its roots in artificial intelligence, whithc is quickly becoming more common in the development of electronic trading systems.
 This is an algorithmic result in machine learning and it can be supported in all kinds of problems. In the project, it is a problem classification and we can apply this model because it is very use to user.
 <br/><br/>
 Handwriting recognition is a machine learning project, based on image classification to help computers recognize handwriting through images.
  Vision makes it easy for humans to recognize numbers, but the brain is new. is to make this complex image processing task easier.
<br/><br/>
However, it becomes a challenging task for the computer to recognize the digits. Simple hunches about how to recognize digits become difficult to express algorithmically.
 Furthermore, there is a significant variation in the spelling from person to person, making it incredibly complicated.
                </Box>
            </Grid>
        </Container>
    );
}
//ReactDOM.render(<Hi />, document.getElementById('root'))