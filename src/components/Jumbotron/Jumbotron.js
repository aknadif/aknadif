import React from "react"
import foto from "../img/foto.jpg"
import "./Jumbotron.css"
import Typing from '../Animations/Typing/Typing';


export const Jumbotron = () => {
    return (
    <section className="jumbotron text-center" id="jumbotron">
      <img src={foto} alt="Nadhif" className="rounded-circle img-thumbnail" />
      <h1 className="display-4">A.K Nadhif</h1>
      <Typing />
    </section>
    )
}
