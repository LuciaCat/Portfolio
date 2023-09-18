import html5 from "../assets/img/html5.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import cSharp from "../assets/img/cSharp.svg";
import java from "../assets/img/java.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html5} alt="logoHtml" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="LogoCss" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="LogoJavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="LogoJava" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={cSharp} alt="LogoCSharp" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="LogoReact" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}