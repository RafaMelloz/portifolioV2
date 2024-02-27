import './styles.css'
import email from '../../assets/gmail.png'

import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export const Aside = () =>{
    return(
        <aside>
            <div class="group-aside">
                <a href="mailto:rafaelmeloalvessouza@gmail.com"><SiGmail class="iconAside" /></a>
                <a href="https://www.linkedin.com/in/rafael-melo-b68b5923b/"><FaLinkedin class="iconAside" /></a>
                <a href="https://wa.me/1199339613"><IoLogoWhatsapp class="iconAside" /></a>
                <a href="https://github.com/RafaMelloz"><FaGithub class="iconAside" /></a>
            </div>
        </aside>
    )
};