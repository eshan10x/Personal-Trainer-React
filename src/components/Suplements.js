import React from 'react';
import '../css/Suplements.css';
import suplement from '../img/suplement.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardimg1 from '../img/logo.png'

function Suplements() {
    return (
        <div class="container">
            <div className='storyhead'>
                <h1>Success Stories</h1>
            </div>
            <div class="row">

                <div class="col">
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={cardimg1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div class="col">
                    <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={cardimg1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    1 of 3
                </div>
                <div class="col">
                    2 of 3
                </div>
                <div class="col">
                    3 of 3
                </div>
            </div>
        </div>

    )
}

export default Suplements
