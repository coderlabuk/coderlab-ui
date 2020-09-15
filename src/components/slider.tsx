import React, { FunctionComponent } from 'react'; 
import Slider from 'react-slick';
import { Typography, makeStyles } from '@material-ui/core'
import graphNetwork from "../assets/img/graph-network.jpg";
import htmlFade from "../assets/img/html-fade.png";
import visualizeData from "../assets/img/visualize-data.jpg";

interface Panel {
    id: number
    title: string
    subtitle: any
    img: string
    bgColor?: string
    url?: string
}

type ImageProps = {
    img: string
    bgColor?: string
    url?: string
}

const useStyles = makeStyles({
    image: (props: ImageProps) => ({
        backgroundColor: props.bgColor ? props.bgColor : "transparent",
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        width: "100%"
    }),
    overlay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textContainer: {
        textAlign: 'center',
    }
})

const ImagePanel: FunctionComponent<ImageProps> = props => { 
    const styles = useStyles(props)   
    return (
        <div className={styles.image}>
            <div className={styles.overlay}>
                <div className={styles.textContainer}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export const ImageSlider = (props: any) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        pauseOnHover: false
    };

    const data: Panel[] = [
        {
            id: 3,
            title: "Join the Data Revolution",
            subtitle: "Helping enterprises achieve digital transformation",
            img: visualizeData,
            url: "",
        },
        {
            id: 4,
            title: "Unified Data Science and Analytics",
            subtitle: "Great Data Science starts with great data",
            img: graphNetwork,
            url: "",
        },
        {
            id: 1,
            title: "Full stack development",
            subtitle: "APIs, Application Development and Cloud Native Platforming",
            img: htmlFade,
            bgColor: "#051934",
            url: "",
        },  
    ]

    return (
        <Slider {...settings}>
            {data.map((panel) => (
                <div key={panel.id}> 
                    <ImagePanel  img={panel.img} bgColor={panel.bgColor}>
                        <Typography variant="h2" component='h1' gutterBottom>{panel.title}</Typography>
                        <Typography variant='h5' component='h3'>{panel.subtitle}</Typography>
                    </ImagePanel>
                </div>
            ))}
        </Slider>
    )
}

