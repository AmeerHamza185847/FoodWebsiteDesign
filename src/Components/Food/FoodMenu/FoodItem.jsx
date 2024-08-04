import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const FoodItem = ({ foodImg, burgerNames, price }) => {
    return (

        <div className='foodItem'>
            <Card sx={{
                width: 500,
                height: 150,
                padding: '10px 15px',
                display: 'flex',
            }}>
                <CardMedia
                    sx={{ borderRadius: 2, width: 70, height: 70,}}
                    component="img"
                    alt="green iguana"
                    image={foodImg}
                />
                <CardContent
                sx={{padding:'0px 15px'}}>
                    <Typography sx={{fontSize:'1.4rem'}} gutterBottom variant="h6" component="div">
                        {burgerNames}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Button sx={{marginTop:'10px', backgroundColor:'crimson',padding:'0px 7px'}} variant="contained">Order Now</Button>
                </CardContent>
            </Card>
        </div>
    )
}


