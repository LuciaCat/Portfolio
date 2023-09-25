import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Jr. Web Developer", "Jr. Fullstack Developer", "Jr. Frontend Developer", "Jr. Backend Developer", "Assistente Tecnico"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Benvenut* nel mio Portfolio</span>
                <h1>{`Ciao! Io sono Lucia`} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Jr. Web Developer", "Jr. Fullstack Developer", "Jr. Frontend Developer", "Jr. Backend Developer", "Assistente Tecnico"]'><span className="wrap">{text}</span></span></h1>
                  <p> 
                    La mia passione per l'informatica mi ha spinto a seguire corsi dedicati alla programmazione
                    Front-end e Back-end, attraverso i quali ho sviluppato solide conoscenze di progettazione e 
                    programmazione. Durante questi corsi, ho acquisito competenze nell'utilizzo di linguaggi 
                    come HTML, CSS, JavaScript, C#, Java e framework come React, Bootstrap e ASP.NET. Inoltre, 
                    ho sviluppato una buona familiarità con software di progettazione e design come Figma e 
                    Canva, che mi hanno permesso di creare interfacce utente accattivanti e intuitive. 
                    Conoscenza approfondita del sistema Windows e macOS, del pacchetto Office 365.
                    Sono una persona orientata all'obiettivo e all'azione, sempre motivata a imparare e 
                    migliorare le mie competenze nel campo dell'informatica.  
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}