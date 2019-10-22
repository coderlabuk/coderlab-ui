import React, { FunctionComponent } from 'react'; 
import { Container, Typography, Grid, makeStyles} from '@material-ui/core';
import { Staff } from './staff'

interface AboutProps {}

const useStyles = makeStyles(theme => ({
    h1: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),

    },
    h2: {
        marginBottom: theme.spacing(3),
    },
    pageContainer: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
        maxWidth: '700px',
    },
}))

export const About: FunctionComponent<AboutProps> = () => {
    let styles = useStyles()

    return (
        <Container className={styles.pageContainer}>
            <Grid container spacing={5} direction="column">
                <Grid item>
                    <Typography className={styles.h1} variant="h3" component="h1" gutterBottom>
                        About CoderLab
                    </Typography>
                    <Typography>
                        CoderLab is a software consltancy that delivers high quality bespoke projects  
                        in Machine Learning, Big Data, API development and Web Application development. 
                        Between us we have over 30 years experience in shipping code and we know how
                        to deliver commercial engineering projects on time and in budget. 
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography  className={styles.h2} variant="h5" component="h3" gutterBottom>
                        Our approach
                    </Typography>
                    <Typography>
                        Our approach is to focus on delivering achievable projects over medium-sized time scales. 
                        Typically our projects last from 6-12 months and within that time 
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography className={styles.h2} variant="h5" component="h3" gutterBottom>
                        Our staff
                    </Typography>
                    <Staff />
                </Grid>
            </Grid>

        </Container>
    )
}





