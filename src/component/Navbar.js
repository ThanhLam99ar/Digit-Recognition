import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '../pages/Home';
import Digit from '../pages/Digit';
import About from '../pages/About';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 4 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Navbar(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Box sx={{ width: '100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%'  }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Box sx={{marginLeft:60}}><img src="images/Logo_Digit-1.png" width={50}/></Box>
              
              <Tab sx={{width:200, marginLeft:20}} label="home" {...a11yProps(1)} />
              <Tab sx={{width:200}} label="digit" {...a11yProps(2)} />
              <Tab sx={{width:200}} label="about" {...a11yProps(3)} />
            </Tabs>
          </Box>
        
          <TabPanel value={value} index={1}>
            <Home/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Digit/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <About/>                                                            
          </TabPanel>
          <TabPanel value={value} index={4}>
            <About/>
          </TabPanel>
        </Box>
      );
    }