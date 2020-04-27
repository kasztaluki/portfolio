/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../../styles/layouts/Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="main_content">
        <div className="content">
          <h1>Prace nad stroną <br/>WebDevChallenge.pl trwają!</h1>
          <p><span>Cześć, tu Łukasz!</span>Powiedziałem sobie &quot;CHALLENGE ACCEPTED&quot; i tworzę stronę poświęconą programowaniu. Mówiąc konkretniej historii mojej drogi do
            stania się zawodowym web developerem. W moim przypadku od zera do bohatera. Aktualnie studiuję na
            Politechnice Gdańskiej kierunek &quot;Programowanie i bazy danych&quot;, a swoją wiedzę rozwijam w technologiach:
            HTML, CSS, JavaScript, C++, Java, SQL. Dowiesz się tutaj kim jestem, zobaczysz moje projekty programistyczne
            oraz znajdziesz sposób aby się ze mną skontaktować. Już teraz zapraszam Cię do odwiedzenia mojego
            Githuba, Linkedina bądź do kontaktu mailowego albo telefonicznego:<br/><br/>
            <span>mail: lukasz.grabowski.pg@gmail.com <br />|| tel. 791 964 564.</span><br/>
            Pracuję nad tym, aby strona pojawiła się tutaj jak najszybciej.</p>
          <h2>Keep calm, be patient, get back here later!</h2>
        </div>
      </div>
    );
  }
}

export default Main;
