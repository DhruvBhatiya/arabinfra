import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // Import PDF Icon
import './CardMui.css'; // Import CSS file
import HomeWorkIcon from '@mui/icons-material/HomeWork';

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

    // Check if file is a PDF
    const isPdf = data.image.toLowerCase().endsWith('.pdf');
    const isDwg = data.image.toLowerCase().endsWith('.dwg');

    return (
        <Card
            key={index}
            className="card-container"
            sx={{ maxWidth: '100%', margin: '0 auto', position: 'relative' }}
        >
            <div className="image-container">
                {/* If it's a PDF, show the PDF icon, else show the image */}
                {isPdf ? (
                    <div className="pdf-icon-container flex justify-center items-center">
                        <PictureAsPdfIcon fontSize="large" className="pdf-icon " style={{ width: 100, height: 100, color: 'red' }} />
                    </div>
                ) :
                    isDwg ?
                        <div className="pdf-icon-container flex justify-center items-center">
                            <HomeWorkIcon fontSize="large" className="pdf-icon " style={{ width: 100, height: 100 }} />
                        </div>
                        :

                        (
                            <CardMedia
                                style={{ height: '100px' }}
                                component="img"
                                height="140"
                                image={data.image}
                                alt={data.title}
                                className="card-image"
                            />
                        )}

                <a
                    href={data.image}
                    download={data.title}
                    className="download-overlay"
                    title={`Download ${data.title}`}
                >
                    <DownloadIcon className="download-icon" />
                </a>
            </div>
            <CardContent style={{ paddingBottom: 16 }}>
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
