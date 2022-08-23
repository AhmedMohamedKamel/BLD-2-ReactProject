import CourseCard from './Cards';
import styles from '../css/CourseContainer.module.css';

const CourseContainer = (props) => {
    let courses = props.courses.map((course) => {
        return <CourseCard key={course.id} {...course}></CourseCard>;
    });
    console.log(courses);
    return <div className={styles.courseContainer}>{courses}</div>;
};

export default CourseContainer;
