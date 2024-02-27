import './styles.css'

export const CardSkill = ({name, img}) =>{
    return(
        <div className="skill" id={name}>
            <img src={img} /><br />
            <span>{name}</span>
        </div>
    )
};