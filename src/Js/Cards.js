import styles from '../css/Cards.module.css';

const CardTitle = (props) => {
    return (
        <a href="" className={styles.cardTitle}>
            {props.title}
        </a>
    );
};


const CardImage = (props) => {
    return (
        <img
            src={`${process.env.PUBLIC_URL}${props.image}`}
            alt=""
            className={styles.cardImage}
        />
    );
};

const CardAuthor = (props) => {
    return <p className={styles.cardAuthor}>{props.author}</p>;
};

const CardStars = (props) => {
    let FullStars = parseInt(props.rating);
    let HalfStars = props.rating - FullStars >= 0.4 ? 1 : 0;
    let EmptyStars = 5 - FullStars - HalfStars;
    let key = 1;
    let StarsList = [];
    for (let i = 0; i < FullStars; i++) {
        StarsList.push(<i key={key++} className="fa-solid fa-star"></i>);
    }
    if (HalfStars === 1) {
        StarsList.push(
            <i key={key++} className="fa-solid fa-star-half-stroke"></i>
        );
    }
    for (let i = 0; i < EmptyStars; i++) {
        StarsList.push(<i key={key++} className="fa-regular fa-star"></i>);
    }

    return <span className={styles.rating}>{StarsList}</span>;
};

const CardRatings = (props) => {
    return (
        <div>
            <span className={styles.rating}>{props.rating}</span>
            <CardStars rating={props.rating}></CardStars>
            <span className={styles.ratingNumbers}>
                {`(${props.ratingNumber.toLocaleString('en-US')})`}
            </span>
        </div>
    );
};

const CoursePrice = (props) => {
    return (
        <div className={styles.coursePrice}> E${props.price.toString()} </div>
    );
};

const CourseCard = (props) => {
    return (
        <div className={styles.courseCard}>
            <CardImage image={props.image}></CardImage>
            <CardTitle title={props.title}></CardTitle>
            <CardAuthor author={props.author}></CardAuthor>
            <CardRatings
                rating={props.rating}
                ratingNumber={props.ratings}
            ></CardRatings>
            <CoursePrice price={props.price}></CoursePrice>
        </div>
    );
};

export default CourseCard;
