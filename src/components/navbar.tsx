import * as React from 'react'
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
    },
}));


export const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.title}>
                        <Typography variant="h6" >
                            CoderLab
                        </Typography>
                    </Link>
                    <Link to="/about" className={classes.link}>
                        <Button color="inherit">About</Button>
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

