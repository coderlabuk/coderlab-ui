import * as React from 'react';
// import { Link } from "react-router-dom"
import Slider from 'react-slick';

require("slick-carousel/slick/slick.scss")
require("slick-carousel/slick/slick-theme.scss")


// interface ArrowBoxProps {
//     url: string
//     text: string
//     color: string
// }

// const ArrowBox = (props: ArrowBoxProps) => {

//     let hoverClass = props.color === "white" ? "bg-hover-white" : "hover-invert";
//     let borderStyle = `2px solid ${props.color}`;

//     return (
//         <div className="row justify-center align-center" style={{color: props.color || "white"}}>
//             <Link to={url} className={`text-decoration-none ${props.props.color}`}> 
//                 <div className={`text-center padding-y-sm padding-x-md ${hoverClass}`} 
//                     style={{border: borderStyle}}>
//                     <div className="row align-center font-size-lg">
//                         <span>{props.text}</span>&nbsp;&nbsp;<i className="material-icons arrow-R">arrow_forward</i>
//                     </div>
//                 </div>

//             </Link>

//         </div>

//     );
// }



// const getImgStyle = (img: string, bgColor: string)=> {
//     return {
//         backgroundColor: bgColor,
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         height: "500px",
//         width: "100%"
//     }
// }

// interface ImagePanelProps {
//     img: string
//     children: any
//     className: string
//     bgColor: string
// }

// const ImagePanel = (props: ImagePanelProps) => {    
//     return (
//         <div style={getImgStyle(props.img, props.bgColor)}>
//             <div className={`width-100 height-100 ${props.className}`}>
//                 <div className="row justify-center align-center height-100">
//                     <div className="text-center padding-x-sm margin-y-xxl">
//                         {props.children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export const ImageSlider = (props: any) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        pauseOnHover: false
    };

    let unityLogo = <div className="img-unity-logo margin-bottom-lg"></div>;

    const data = [

        {
            id: 1,
            title: "Full stack development",
            subtitle: "Platform engineering, API development, web development and mobile apps",
            img: require("../assets/img/html-fade.png"),
            url: "courses/web",
            bgColor: "#051934" 
        },
        {
            id: 2,
            title: "Video game development",
            subtitle: unityLogo,
            img: require("../assets/img/fantasy.jpg"),
            url: "courses/unity"
        },
        {
            id: 3,
            title: "Machine Learning",
            subtitle: "Give your students the skills they need for the modern world",
            img: require("../assets/img/fantasy.jpg"),
            url: "courses/teacher"
        },
        {
            id: 4,
            title: "Data Analytics",
            subtitle: "Write your first line of code right now!",
            img: require("../assets/img/fantasy.jpg"),
            url: "courses/web"
        },
    
    ]
    return (

        <Slider {...settings}>
            {data.map((panel) => (
                <div key={panel.id}> 
                    {panel.title}
                </div>
            ))}
        </Slider>

        // <Slider {...settings}>
        //     {data.map((panel) => (
        //         <div key={panel.id}> 
        //             <ImagePanel  img={panel.img} className="white overlay-50" bgColor={panel.bgColor}>
        //                 <h1 className="margin-bottom-sm">{panel.title}</h1>
        //                 <h3 className="margin-bottom-lg">{panel.subtitle}</h3>
        //                 {/* <ArrowBox url={panel.url}/> */}
        //             </ImagePanel>
        //         </div>
        //     ))}
        // </Slider>
    )
}

