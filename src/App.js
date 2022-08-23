import './App.css';
import courseData from './courses.json';
import HeaderSection from './Js/headerSection.js';


function App() {
    return (
        <main>
            <HeaderSection
                header="A broad selection of courses"
                headerDescription="Choose from 185,000 online video courses with new additions
                published every month"
                categories={[
                    'Python',
                    'Excel',
                    'Web Development',
                    'JavaScript',
                    'Data Science',
                    'AWS Certification',
                    'Drawing',
                ]}
                section={{
                    CourseTitle: 'Expand your career opportunities with Python',
                    CourseDescription:
                        'Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to ...',
                    courses: courseData.info.courses,
                }}
            ></HeaderSection>
        </main>
        
    );
}

export default App;
