import './styles.css'

import iconPort from "../../assets/iconPort.png";
import { FaLinkedin } from "react-icons/fa";

export const SectionStart = () =>{
    return(
        <section id="inicio" data-aos="fade-down-right">
            <div class="container row">
                <div className="content__text">
                    <p>Ola, eu sou o</p>
                        <h1>Rafael Melo</h1>
                    <p>Desenvolvedor Front-End</p>
                    <a href="https://www.linkedin.com/in/rafael-melo-b68b5923b/">LinkedIn <FaLinkedin /></a>
                </div>

                
                <div className="content__img">
                    <img src={iconPort}/>
                </div>
                
            </div>
        </section>
    )
};