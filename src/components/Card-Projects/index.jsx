import './styles.css'

export const CardProjects = ({name, img, link}) =>{
    return(
        <div class="projetos">
            <img src={img}/>
            <div class="faixa">
                <a href={link}>{name}</a>
            </div>
        </div>
    );
};