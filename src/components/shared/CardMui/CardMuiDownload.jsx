import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import './CardMui.css'; // Import CSS file
import { fontSize } from '@mui/system';

export default function CardMuiDownload({ data, index }) {
    const titleStyle = {
        fontSize: '16px',
        overflow: 'hidden',
        display: '-webkit-box',
        maxHeight: '4rem',
        WebkitLineClamp: '1',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        marginBottom: 0
    };

    const contentStyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        maxHeight: '4rem',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
    };

    return (
        <Card
            key={index}
            className="card-container"
            sx={{ maxWidth: '100%', margin: '0 auto', position: 'relative' }}
        >
            <div className="image-container">
                <CardMedia
                style={{height: '200px'}}
                    component="img"
                    height="140"
                    image={data.image}
                    alt={data.title}
                    className="card-image"
                />
                <a
                    href={data.image}
                    download={data.title}
                    className="download-overlay"
                    title={`Download ${data.title}`}
                >
                    <DownloadIcon className="download-icon" />
                </a>
            </div>
            <CardContent style={{paddingBottom: 16}}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={titleStyle}
                    title={data.title}
                >
                    {data.title}
                </Typography>
                <Typography
                    style={contentStyle}
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                >
                    {data.content}
                </Typography>
            </CardContent>
        </Card>
    );
}
