import PropTypes from 'prop-types'
import styles from './ProjectCard.module.css'
function ProjectCard(props) {

    return(
        <div className={styles.projectCard}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.desc}>{props.desc}</p>
        </div>
    ); 
}
ProjectCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default ProjectCard