import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'

interface ImageProps {
    url: string
}

const useStyles = makeStyles(theme => ({
    img: {
        height: '100%',
        width: '100%',
    },
}));


export const Image = (props: ImageProps) => {
    const classes = useStyles(props.url);
    const styles = {backgroundImage: props.url}
    return (
        <img className={classes.img} style={styles}/>
    )
}