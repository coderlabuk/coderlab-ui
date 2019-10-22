import * as React from 'react'
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark
    },
    link: {
        textDecoration: "none",
        color: theme.palette.grey['900'],
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: "none",
        color: theme.palette.grey['900'],
    },
    right: {
        marginLeft: 'auto',
    },
    logo: {
        backgroundColor: "transparent",
        backgroundImage: `url(${require('../assets/logo/coderlab-caps.png')})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50px",
        width: "140px"
    }
}));


export const Navbar = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <AppBar position="static" className={styles.appBar}>
                <Toolbar>
                    {/* <Link to="/" className={styles.left}>
                        <div className={styles.logo}/>
                        <Typography variant="h6" >
                            CODERLAB
                        </Typography>
                    </Link> */}
                    <Link to="/" className={styles.left}>
                        <div className={styles.logo}/>
                    </Link>
                    <div className={styles.right}>
                        <Link to="/about" className={styles.link}>
                            <Button>About</Button>
                        </Link>
                        <Link to="/contact" className={styles.link}>
                            <Button>Contact</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

