import { CardProjects } from "../../components/Card-Projects";

import academyKids from "../../assets/bg-projetos/BG-academyKids.png";
import appTask from "../../assets/bg-projetos/BG-appTask.png";
import game from "../../assets/bg-projetos/BG-game.png";
import orangix from "../../assets/bg-projetos/BG-orangix.png";
import pikachu from "../../assets/bg-projetos/BG-pikachu.png";
import vtex from "../../assets/bg-projetos/BG-vtex.png";
import git from "../../assets/bg-projetos/BG-git.png";
import catalogo from "../../assets/bg-projetos/BG-catalogo.png";


import { FaGithub } from "react-icons/fa";

import './styles.css'

 

export const SectionProjects = () =>{



    return(
        <section className="container" id="projetos" >
            <div className="flex-section" data-aos="fade-up">
                <div className="group__text">
                    <h2>PROJETOS</h2>

                    <p className="text-sobre">Projetos desenvolvidos com foco em reforçar e aprimorar meus conhecimentos,  por maior parte usando React e Angular, com foco em utilizar APIs, implementações de funções e desenvolvimento de layouts.</p>

                    <a href="https://github.com/RafaMelloz">Repositório do Git <FaGithub /></a>

                </div>

                <div className="grid__proj">
                    <CardProjects name={'VTEX! (Teste frontEnd)'} img={vtex} link={'https://teste-vaga-front-end-jr.vercel.app'} />
                    <CardProjects name={'Game Calendar'} img={game} link={'https://game-calendarf.vercel.app'} />
                    <CardProjects name={'Pokedex'} img={pikachu} link={'https://pokedex-rafa.vercel.app'} />
                    <CardProjects name={'appTask'} img={appTask} link={'https://task-appr.vercel.app'} />
                    <CardProjects name={'Catalogo Digital'} img={catalogo} link={'https://catalogo-digital.vercel.app'} />
                    <CardProjects name={'GitHub Search'} img={git} link={'https://rafa-git-search.vercel.app'} />
                    <CardProjects name={'Orangix (fecht API)'} img={orangix} link={'https://orangix.vercel.app'} />
                    <CardProjects name={'Kids Academy! (TCC)'} img={academyKids} link={'https://github.com/RafaMelloz/kidsAcademy'} />
                </div>
            </div>
        </section>
    )
};