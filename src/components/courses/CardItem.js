import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '90%',
        margin: '10px auto',
        boxShadow:
            '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    content: {
        display: 'flex',
    },
    avatar: {
        borderRadius: '50%',
        width: '70px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: '1.5rem',
    },
});

const MatCard = ({ course }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div>
                    <img className={classes.avatar} src={course.avatar} alt="avatar" />
                </div>
                <div className={classes.details}>
                    <Typography variant="subtitle1" gutterBottom>
                        {course.first_name} {course.last_name}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        {course.email}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default MatCard;
