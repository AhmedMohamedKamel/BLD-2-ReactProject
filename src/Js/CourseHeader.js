import CourseContainer from './CourseContainer';
import styles from '../css/CourseHeader.module.css';

const CourseHeader = (props) => {
    return (
        <div className={styles.coursesSection}>
            <h2 className={styles.coursesSectionItem}>{props.CourseTitle}</h2>
            <p className={styles.coursesSectionItem}>{props.CourseDescription}</p>
            <a
                href="#"
                className={`${styles.Explore_button} ${styles.coursesSectionItem}`}
            >
                Explore Python
            </a>
            <CourseContainer courses={props.courses}></CourseContainer>
        </div>
    );
};

export default CourseHeader;
