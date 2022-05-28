import React from 'react';
import { Card, CardActions, CardMedia, Typography } from '@mui/material';
import backArrow from '../../images/back-arrow.png';
import shut from '../../images/switch.png';
import SingleStation from '../SingleStation/SingleStation';

const Widget = () => {
    return (
        <Card sx={{ width: 545, backgroundColor: 'transparent', py: 5 }}>
            <CardActions sx={{ backgroundColor: '#EDAD61', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '15px', width: '15px', cursor: 'pointer' }}
                    image={backArrow}
                />
                <Typography sx={{ textTransform: 'uppercase', color: '#fff' }} variant="h5" component="div">
                    Stations
                </Typography>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '24px', width: '20px', cursor: 'pointer' }}
                    image={shut}
                />
            </CardActions>

            <SingleStation />
        </Card>
    );
};

export default Widget;