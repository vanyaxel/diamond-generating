import React from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';
import { Box, Typography, Divider } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import image from '../../Assets/images/new-request.png'
import { Link } from 'react-router-dom';

const NewPetition = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Crear solicitudes' />
                <Box style={{ display: 'flex', alignItems: 'center', height:'550px', justifyContent:'space-evenly'}}>
                    <Box>
                        <img src={image}/>
                    </Box>
                        <Divider orientation="vertical" style={{backgroundColor:'#DADADA', height:'450px'}} />
                    <Box style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Link to="/crear-solicitudes2">
                            <AddCircleOutlineIcon style={{color:'#1D376C', fontSize:'80px'}} />
                        </Link>
                        <Typography style={{color:'#1D376C', fontSize:'24px', marginTop:'20px'}}>
                            Crear solicitud
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
     );
}
 
export default NewPetition;