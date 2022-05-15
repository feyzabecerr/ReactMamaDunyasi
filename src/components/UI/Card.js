import classes from './Card.module.css';

import { Grid } from '@mui/material';

function Card(props){
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card;