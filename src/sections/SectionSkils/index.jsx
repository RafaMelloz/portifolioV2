import { useState } from 'react';

import './styles.css'
import { CardSkill } from '../../components/Card-Skill';

//front icons
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/js.png'
import react from '../../assets/icons/react.png'
import angular from '../../assets/icons/angular.png'
import boot from '../../assets/icons/bootstrap.png'
import { FaDesktop } from "react-icons/fa";

//back icons
import php from '../../assets/icons/php.png'
import mySql from '../../assets/icons/mysql.png'
import cold from '../../assets/icons/cold.png'
import { FaDatabase } from "react-icons/fa";

//tolls icons
import git from '../../assets/icons/git.png'
import github from '../../assets/icons/github.png'
import vscode from '../../assets/icons/vs.png'
import { BsTools } from "react-icons/bs";








export const SectionSkills = () =>{

    const [status, setStatus] = useState(1)

    const front = () =>{
        setStatus(1)
    }

    const back = () => {
        setStatus(2)
    }

    const tolls = () => {
        setStatus(3)
    }
 
    return(
        <section id='habilidades' data-aos="fade-up">
            <div className='container'>
                <h2>Habilidades</h2>

               
                <ul class="flex">
                    <li class="selector" onClick={front}>
                        {status === 1 ?
                            <FaDesktop />
                            : null} Front-End
                    </li>

                    <li class="selector" onClick={back}>
                        {status === 2 ?
                            <FaDatabase />
                            : null} Back-End
                    </li>

                    <li class="selector" onClick={tolls}>
                        {status === 3 ?
                            <BsTools />
                        : null } Ferramentas
                    </li>
                </ul>
                
                { status === 1 ?
                    <div className="flex-skills">
                        <CardSkill name={'html'} img={html} />
                        <CardSkill name={'css'} img={css} />
                        <CardSkill name={'js'} img={js} />
                        <CardSkill name={'react'} img={react} />
                        <CardSkill name={'angular'} img={angular} />
                        <CardSkill name={'bootstrap'} img={boot} />
                    </div> : null
                }

                {status === 2 ?
                    <div className="flex-skills">
                        <CardSkill name={'js'} img={js} />
                        <CardSkill name={'php'} img={php} />
                        <CardSkill name={'mySql'} img={mySql} />
                        <CardSkill name={'coldfusion'} img={cold} />
                    </div> : null
                }

                {status === 3 ?
                    <div className="flex-skills">
                        <CardSkill name={'git'} img={git} />
                        <CardSkill name={'github'} img={github} />
                        <CardSkill name={'vscode'} img={vscode} />
                    </div> : null
                }

            </div>         
        </section>
    )
};