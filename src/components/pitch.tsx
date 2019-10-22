import React, { FunctionComponent } from 'react'; 
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { GridJustification } from '@material-ui/core/grid';

interface Pitch {
    title: string
    description: string
    img: string
    justify: GridJustification
    gradientDirection: string
}

interface PitchProps {}

let panelStyles = makeStyles(theme => ({
    image: (props: Pitch) => ({
        flexGrow: 1,
        padding: theme.spacing(7),
        backgroundColor: "transparent",
        backgroundImage: `linear-gradient(to ${props.gradientDirection}, white 30%, transparent 120%), url(${props.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        minHeight: '500px',
        width: "100%",
    }),
    textContainer: (props: Pitch) => ({
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
        height: "100%",
    }),
    textPanel: {
        maxWidth: '400px',
    }
}))


const PitchPanel: FunctionComponent<Pitch> = (props) => {
    let styles = panelStyles(props)

    return (
        <div className={styles.image}>
            <Grid container justify={props.justify} alignItems="center">
                <Grid item xs={12} sm={6} md={4} lg={4} className={styles.textContainer}>
                    <Typography variant="h4" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="h6">
                        {props.description}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}


export const PitchPanels: FunctionComponent<PitchProps> = () => {
    const pitches: Pitch[] = [
        {
            title: "Data Driven Development",
            description: `Building a data-driven organisation starts with listening to \
            your data and what it is telling you. Everything else will follow from that.`,
            img: require('../assets/img/data-driven.jpg'),
            justify: "flex-start",
            gradientDirection: "right",
        },
        {
            title: "Data Quality before Data Science",
            description: `Data quality is the number one issue that we see preventing clients from\
                achieving their true potential. Ask yourself honestly, do you trust your data?`,
            img: require('../assets/img/shards.jpeg'),
            justify: "flex-end",
            gradientDirection: "left",
        }
    ]
    return (
        <div>
            {pitches.map(pitch => (
                <PitchPanel {...pitch} />
            ))}
        </div>

    )
}