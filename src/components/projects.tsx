import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

interface ProjCardProps {
    title: string;
    desc: string;
    projectLink: string;
    repoLink: string;
}

function ProjectCard(props: ProjCardProps) {
    return (
        <>
            <div className='project-card'>
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
              <p><FontAwesomeIcon icon={faSheetPlastic} />Project Link: <a href={props.projectLink != "WIP" ? props.projectLink : "javascript:;"}>{props.projectLink}</a></p>
              <p><FontAwesomeIcon icon={faGithub} />Repository Link: <a href={props.repoLink != "WIP" ? props.repoLink : "javascript:;"}>{props.repoLink}</a></p>
            </div>
        </>
    )
}

export default ProjectCard