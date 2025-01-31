import styles from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard';
function Projects(){
    return(
        <div className={styles.projectContainer}><a id="Projects"></a>
            <h1 className={styles.subtitle}>Personal Projects</h1>
            <p className={styles.projectText}>
                Below are some of the projects that I have made or have 
                been a part of creating it.
            </p>
            <div className={styles.cardDiv}>
                <ProjectCard title="DocuEdit" 
                desc="This is a frontend simple document editor that also uses the CryptoJS library to encrypt user data and user's files."
                />

                <ProjectCard title="School Grading Program" 
                desc="This was a project I wrote in C++ and uses the Qt user interface framework to allow users to create, view, edit and delete student grades."
                />
                
                <ProjectCard title="My Portfolio Website" 
                desc="This is the project you are looking at right now! This is a frontend app that was built using the JavaScript React Library."
                />
                
                <ProjectCard title="Evolutionary Algorithm Dashboard" 
                desc="This is a fullstack webapp that I worked on with a team. My job was focused on the backend. I utilised the python backend framework Flask to handle requests, routing and server-side tasks."
                />
                
                <ProjectCard title="Simple Python Interpreter" 
                desc="This was a simple project written in C to interpret very simple python code. Interpreting full python scripts wasn't the objective but learning and creating my own lexer and parser."
                />
            </div>
        </div>
    );
}

export default Projects