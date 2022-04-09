import Projects from "../../Projects"
import { FancyList } from "./style"
import ProjectCard from "../ProjectCard"

const ProjectsList = () =>{
    return(
        <FancyList>
            {Projects.map(project => <li key={project.title}><ProjectCard title={project.title} description={project.description} website={project.website} code={project.code} img={project.img}/></li>)}
        </FancyList>
    )
}

export default ProjectsList