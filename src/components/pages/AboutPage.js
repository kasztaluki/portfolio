import React from 'react';

const FactSection = () => {


    return
        <div className="FactSection">
        </div>
}

const AboutPage = () => {

    return
        <div>
            <section>
                <h1>O mnie</h1>
            </section>
            <section>
                <h2>Challenge accepted</h2>
                <h3>Wyzwaniem jest znalezienie pierwszej pracy jako junior web developer.<br />
                Jednym z etapów jest budowa strony wizytówki według własnego autorskiego pomysłu.</h3><br />
                <p>Nazywam się Łukasz Grabowski. Strona WebDevChallenge.pl została przeze mnie<br />
                stworzona z myślą o własnym rozwoju oraz prezentacji mojej wiedzy i umiejętności<br />
                w postaci portfolio. Aktualnie jestem w trakcie poszukiwania pracy jako junior web developer.<br />
                Mam nadzieję, że strona na której się znajdujesz sprawi, że zaprosisz mnie na rozmowę,<br />
                gdzie już w "realu" będę mógł Ci zaprezentować swoje umiejętności. Strona napisana z wykorzystaniem<br />
                React.js, Redux, webpack, ... .
                </p>
            </section>
            <section>
                <div>
                    <h2>Kilka faktów...</h2>
                    <slider >tu będą się wyświetlały slajdy - fakty z nauki hakowania</slider>
                </div>
            </section>
        </div>
};

export default AboutPage;