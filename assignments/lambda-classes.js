// CODE here for your Lambda Classes

const Person = new Instructor ({
    name: 'Abby',
    age: 26,
    location:'New York',
    gender:'female',
    
)}

class Instructor extends Person{
    constructor(props) {
        super(props);
        this.name = props.name;
        this.age = props.age;
        this.location = props.loctaion;
        this.gender = props.gender;
        specialty: 'Front-end';
        favLanguage:'JavaScript';
        cathPhrase: 'lets do this';
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        previousBackground:'computerSciences';
        className:'Cs243';
        favSubject:'CSS,HTML';
        }
    
}

class ProjectManager extends instructor{
    constructor(props) {
        super(props);
        gradClassName:cs113;
        favInstructor:'John';
        
    }
}