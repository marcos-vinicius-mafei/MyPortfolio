import SkillCard from "../SkillCard"

const SkillsList = ({list}) =>{
    return(
        <ul>
            {list.map(skill => <SkillCard image={skill.image} text={skill.text} url={skill.url}/>)}
        </ul>
    )
}

export default SkillsList