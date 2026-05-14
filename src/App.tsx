import profilePic from './assets/pfp2-square.jpg'
import './App.css'
import ProjectCard from './components/projects'

function App() {

  return (
    <>
      <div>
        <img src={profilePic} className='profilepic' alt="Profile Picture" />
        <h1>Jay Richards</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="description">
        <p>
          A Junior Software Engineer and Platform Engineer with hands-on experience in cloud infrastructure, systems development, and full-stack programming within enterprise environments. Holds a Level 4 Software Developer Apprenticeship and industry certifications in AWS Certified Cloud Practitioner and Microsoft Azure Fundamentals. Skilled in Python, C, C#, Java, JavaScript, React.js, HTML, and Terraform, with practical experience across AWS (EC2, S3, IAM, RDS, CloudWatch) and Azure (Azure AD, RBAC, Key Vault, Sentinel). Strong understanding of cloud architecture, infrastructure as code, and modern software engineering practices.
        </p>
        <p>
          Outside of work, I am interested in Dungeons & Dragons and various video games such as Pokémon, Old School RuneScape, Terraria, and more.
        </p>
      </div>
      <h1>Projects</h1>
      <div className='projects'>
        <ProjectCard 
          title="React Essentials Site"
          desc="This is a project that I created in order to showcase my skills in regards to web development involving React, and it also links to other projects that showcase my skill with React+Vite and also JavaScript and my use of API."
          projectLink="https://reflectiongolden.github.io/react-essentials-site/"
          repoLink="https://github.com/ReflectionGolden/react-essentials-site"
        />
        <ProjectCard 
          title="Pokémon Living Dex Tracker"
          desc="This project (which hasn't been started yet) will make use of the PokéAPI and an SQL database to track and display my current progress with my personal 'Living Pokédex' including all forms (except gender differences) and whether I have that pokemon as a shiny."
          projectLink="WIP"
          repoLink="WIP"
        />
      </div>
    </>
  )
}

export default App
