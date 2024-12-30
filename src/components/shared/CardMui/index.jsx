import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

export default function CardMui({ data, index }) {
    console.log('data', data)

    const titleStyle = {
        "overflow": "hidden", "display": "-webkit-box", "maxHeight": "4rem", "WebkitLineClamp": "1", "WebkitBoxOrient": "vertical", "textOverflow": "ellipsis", "whiteSpace": "normal"
    }
    const contentStyle = {
        "overflow": "hidden", "display": "-webkit-box", "maxHeight": "4rem", "WebkitLineClamp": "2", "WebkitBoxOrient": "vertical", "textOverflow": "ellipsis", "whiteSpace": "normal"
    }
    return (

        <Card key={index} className='w-[345px] sm:w-full md:w-full lg:w-full xl:w-full' sx={{ maxWidth: '100%', margin: '0 auto', }}>
            <Link to={data.link}>
                <CardActionArea>
                    <CardMedia
                        style={{ height: '250px' }}
                        component="img"
                        height="140"
                        image={data.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={titleStyle} title={data.title}>
                            {data.title}
                        </Typography>
                        <Typography style={contentStyle} variant="body2" sx={{ color: 'text.secondary' }}>
                            {data.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}
