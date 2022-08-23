import styles from '../css/headerSection.module.css';
import CourseHeader from './CourseHeader';

const headerSection = (props) => {
    let categories = props.categories.map((category, index) => {
        return (
            <li
                key={index}
                className={`${styles.courseNavigationItem} ${
                    category === 'Python' && styles.courseNavigationItemActive
                }`}
            >
                {category}
            </li>
        );
    });

    return (
        <section>
            <div className={styles.courseContainer}>
                <h2 className={styles.font}>{props.header}</h2>
                <p>{props.headerDescription}</p>
                <ul className={styles.courseNavigation}>{categories}</ul>
                <CourseHeader {...props.section}></CourseHeader>
            </div>
        </section>
    );
};

export default headerSection;
