import { theme } from "../../theme";

const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
    ourteambanner: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        // paddingBottom: '40px',
        height: '350px'
    },
    ourteambannerimg: {
        width: '100%',
        margin: '0',
        objectFit: 'cover',
        height: '100%'
    },

    bannertitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        fontSize: '57px',
        fontWeight: '600',
        textAlign: 'center',
        // background: '#0000000f',
        padding: '30px',
        textTransform: 'uppercase',

        overflow: 'hidden',
        display: '-webkit-box',
        maxHeight: '10rem',
        WebkitLineClamp: '2',
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
    },

    [theme.breakpoints.down('md')]: {
        bannertitle: {
            "top": "40%", "left": "auto", "color": "#FFFFFF", "position": "absolute", "fontSize": "48px", "transform": "none"
        },
        ourteambanner: {
            paddingBottom: '20px'
        },
    },

    [theme.breakpoints.down('sm')]: {
        bannertitle: {
            "top": "40%", "left": "auto", "color": "#FFFFFF", "position": "absolute", "fontSize": "28px", "transform": "none"
        },
        ourteambanner: {
            paddingBottom: '20px'
        },


    },


}));
