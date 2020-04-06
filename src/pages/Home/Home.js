import React, {useEffect, useState} from "react";
import "./Home.scss";
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {RecognisedBy} from "./RecognisedBy/RecognisedBy";
import {Sponsors} from "./Sponsors/Sponsors";
import {Registration} from "./Registration/Registration";
import {Savings} from "./Saving/savings";
import {Benefits} from "./Benefits/Benefits";
import {StandardsComponent} from "./Standard/StandardsComponent";

const footerLinks = [
  {
    href: "/faq.html",
    title: "FAQ"
  },
  {
    href: "/about_us.html",
    title: "Impressum"
  },
  {
    href: "privacy.html",
    title: "Datenschutz"
  }
];

function getRangeFromArray(array, range) {
  return array.filter((item, index) => {
    return index < range;
  });
}

export function Home() {
  const [isChatAvailable, setIsChatAvailable] = useState(true);
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();

  // [1,2,3].map(number => number + 1)
  // [1,2,3].map(function(number) { return number + 1})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => {
        setTodo(json);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todoList => {
        setTodos(getRangeFromArray(todoList, 3));
      });
  }, []);

  function setChatStatus(event) {
    if (isChatAvailable) {
      setIsChatAvailable(false);
    } else {
      setIsChatAvailable(true);
    }
  }

  const [isImgAvailable, setIsImgAvailable] = useState(true);
  function setImgStatus(event) {
    if (isImgAvailable) {
      setIsImgAvailable(false);
    } else {
      setIsImgAvailable(true);
    }
  }


  /*Here ends Ex 4*/


  return (
    <div>
      <section className="first-screen">
        <HomeHeader />
        {/*COMPONENT WITH LOGO AND ANOTHER COMPONENT FOR MENU*/}
        <h1 className="tag-line">
          {" "}
          Wenn deine Bank nur <br />
          so smart wäre. <br />
        </h1>
        <button className="registration-button" onClick={setImgStatus}>
          trial
        </button>
        {isImgAvailable && (
          <img
            className="laptop-image"
            src="img/computer-image.png"
            alt="laptop"
          />
        )}
        <p className="subtitle">
          Mit <strong>intelligenter, selbstlernender Finanz-AI</strong>{" "}
          optimierst du deine Ausgaben <br />
          und holst{" "}
          <strong>
            mehr aus deinen Einkäufen.
            <br />
          </strong>
        </p>
        <button className="registration-button" onClick={setChatStatus}>
          Kostenlos registrieren
        </button>
        <img className="sponsors-image" src="img/sponsors.png" alt="sponsors" />
        {isChatAvailable && (
          <img className="floating-element" src="img/floating-element.png" />
        )}
      </section>
      {/*Here ends the yellow page and everything in white background begins*/}

      <section className="second-screen">
        <RecognisedBy /> {/*COMPONENT WITH THE BRAND NAMES IN BLACK AND WHITE*/}
        {/*HERE BEGINS THE HEADER AND THE P*/}
        <h1 className="sparen-header">
          Sparen kann <br />
          so einfach sein.
          <br />
        </h1>

        {todo && (
          <div>
            <div>Todo: {todo.title}</div>
            <div>Completed: {todo.completed.toString()}</div>
          </div>
        )}
        {todos &&
          todos.map(todo => (
            <div key={todo.id}>
              <div>Todo: {todo.title}</div>
              <div>Completed: {todo.completed.toString()}</div>
            </div>
          ))}
        <p className="mission-statement">
          {" "}
          Unsere Mission ist es, dass du dir mehr leisten kannst, ohne mehr
          <br /> Aufwand. Einmal mit deinem Bankkonto verknüpft, analysiert die{" "}
          <br />
          GeldBoost Technologie deine Ausgaben und gibt dir intelligente <br />
          Spartipps.
        </p>
        {/*HERE ENDS THE HEADER AND THE P*/}
        {/*THIS IS THE BIGGER OUTER CONTAINER(FLEXED).INSIDE ONE COMPONENT & ONE DIV: SPONSORS AND BONUS-CONTAINER*/}
        <div className="bonus-and-text">
          <Sponsors /> {/*ALSO FLEXED*/}
          <div className="bonus-container">
            <span className="yellow-letters">SMARTER EINKAUFEN</span>
            <h3 className="smaller-headers aligned-left">
              Exklusive Bonus-Gutscheine und Spar-Aktionen.
            </h3>
            <p className="bonus-description">
              Verwandle z.B. einen 100€ Geldeingang in einen 120€
              <br />
              Einkaufsgutschein und sicher dir somit 20 € Bonus.
              <br />
              Dank über <strong>120 Gutscheinpartnern</strong> und exklusiven
              Geld-
              <br />
              zurück Aktionen kannst du sofort lossparen.
            </p>
            <button className="registration-now">Jetzt Registrieren</button>
            <button className="show-video">
              Schau dir das Video an - 60 Sek.
            </button>
          </div>
        </div>
        {/*HERE ENDS THE BIGGER OUTER CONTAINER*/}
        {/*HERE IS THE SECTION ON SAVING*/}
        <Savings />
        {/*HERE ENDS THE SECTION ON SAVING*/}
        {/*BEGIN OF THE DIV(FLEXED) ON BENEFITS*/}
        <Benefits />
        {/*END OF THE DIV(FLEXED) ON BENEFITS*/}
        {/*HERE BEGINS THE SECTION ABOUT REGISTRATION. MADE OF HEADER, DIV AND REGISTRATION COMPONENT */}
        <section className="steps-to-register">
          <h2 className="bigger-headers">
            In 3 Schritten
            <br /> Sparbericht erhalten
          </h2>
          <div className="instructions-for-registration">
            <Registration /> {/*HERE IS THE COMPONENT*/}
          </div>
          <button className="registration-now bigger-button">
            Jetzt registrieren und deine Ausgaben optimieren
          </button>
        </section>
        {/*HERE ENDS THE SECTION ABOUT REGISTRATION*/}
        {/*BEGIN OF WIN-WIN SECTION IN BLUE*/}
        <section className="win-win">
          <span className="yellow-letters">WIN-WIN</span>
          <h2 className="saving-tip">Es gibt bessere Wege Geld zu sparen.</h2>
          <p className="tip-description">
            Wenn du durch clevere Tipps und bessere Deals mehr aus jedem Einkauf
            holst, kannst du dir insgesamt mehr leisten. Und findest du einen
            Tipp nützlich, dann gewinnen auch wir und bekommen eine Provision
            vom Anbieter des Angebotes. Das nennt man win-win.
          </p>
        </section>
        {/*END OF WIN-WIN SECTION IN BLUE*/}
        {/*BEGIN OF THE SECURTIY-STANDARD DIV*/}
        <div className="security-standards">
          <h2 className="bigger-headers security-standard">
            Ausschließlich die weltbesten Sicherheitsstandards
          </h2>
          <div className="standards-container">
            {/*BEGIN OF THE SECURITY-STANDARD COMPONENT*/}
            <StandardsComponent />
          </div>
          {/*END OF THE SECURITY-STANDARD COMPONENT*/}

          <img
            className="sponsors-image in-grey"
            src="img/81b8f191-trust-icons-gry-1_000000000000000000001.png"
            alt="sponsors"
          />
          <button className="data-protection-button">
            So schutzen wir deine Daten
          </button>
        </div>
        {/*END OF THE SECURITY-STANDARD DIV*/}
      </section>
      {/*HERE ENDS THE PART IN WHITE*/}
      <section>
        <h2 className="saving-potential">Entdecke jetzt dein Sparpotential!</h2>
        <p className="saving-text">
          Mit GeldBoost behältst du dein Sparpotential immer und überall im
          Blick und machst das Beste aus deinem Geld.
        </p>
        <button className="registration-now for-saving-section">
          Jetzt Registrieren
        </button>
      </section>
      <section className="second-screen ">
        {/*This is the FOOTER*/}
        <nav>
          <ul>
            {footerLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.href}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </div>
  );
}
