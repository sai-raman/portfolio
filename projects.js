const projects = [
    {
        title: 'WIKIME',
        url: 'https://github.com/sai-raman?tab=repositories',
        image:'images/chrome.jpg',
        type: 'Google Chrome Extension',
        description: 'A chrome extension which searches for the highlighted text in WIKIPEDIA.'
    },
    {
        title: 'Human Face Mask Detection',
        image:'images/mask.png',
        url: 'https://github.com/sai-raman/face-mask-detection/blob/main/mask_detection.ipynb',
        type: 'Deep Learning Model',
        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a person is wearing a mask or not.`
    },
    {
        title: 'Student Garde Prediction',
        image:'images/grade.jpeg',
        url: 'https://github.com/sai-raman/student-grade-prediction/blob/main/student_grade_prediction.ipynb',
        type: 'Machine Learning Model',
        description: `A machine learning project that uses both Naive Bayes and Decision
        Tree algorithms to predict the grade of a student.
        Technologies: Python, Scikit-learn, pandas, matplotlib`
    },
    {
        title: 'Maze Generation',
        image:'images/maze.png',
        url: 'https://sai-raman.github.io/Maze-Generator-DFS/.',
        type: 'Depth First Search, Backtracking',
        description: `A Javascript P5.js project which visualizes maze generation using
        Depth First Search technique, Recursive Backtracking`
    },
    {
        title: 'Liner Regression using tensorflowjs',
        image:'images/lr.png',
        url: 'https://sai-raman.github.io/linear-regression-tensorflowjs/',
        type: '',
        description: `A Javascript P5.js project which visualizes linear regression using tensorflowjs`
    },
    {
        title: 'Tennis Game ',
        image:'images/tennis.png',
        url:'https://sai-raman.github.io/Games/.',
        type: 'Javascript',
        description: `A tennis game developed using HTML, CSS and Javascript (Using
            Canvas)`
    },
    {
        title: 'Snake Game',
        type: 'Javascript',
        url:'https://sai-raman.github.io/snake-game/.',
        image:'images/snake.png',
        description: `The classic snake game build using Javascript and P5.js.`
    },
    {
        title: 'Budget Manager',
        url:'https://github.com/sai-raman?tab=repositories',
        image:'images/chrome.jpg',
        type: 'Google Crome Extension',
        description: `A chrome extension to make a note of expenses especially on the
        ecommerce websites.`
    },
    {
        title: 'Happy Birthday',
        type: 'Python, Turtle',
        image:'images/cake.png',
        url:'https://github.com/sai-raman/birthday',
        description: `A python application that draws a cake and a text "Happy Birthday"
        using "Turtle" module in Python.`
    },
    {
        title: 'Speak It',
        type: 'Google Crome Extension',
        image:'images/chrome.jpg',
        url:'https://github.com/sai-raman?tab=repositories',
        description: `A chrome extension which says aloud the selected text on the
        browser using the Web Speech API of chrome.`
    },
    {
        title: 'JSON Web Tokens',
        type: 'Demo',
        image:'images/jwt.png',
        url:'https://github.com/sai-raman/JWT',
        description: `A simple Node application demonstrating the use of JSON Web Token
        (JWT).`
    },
    {
        title: 'Multi Broker Kafka',
        type: 'Demo',
        image:'images/kafka.png',
        url:'https://github.com/sai-raman/multi-broker-kafka',
        description: `A dockerized application demonstrating multibroker kafka.`
    }
//     https://sai-raman.github.io/sierpinski-recursion/.
        {
        title: 'Sierpinski Triangle -  Visualizing Recursion',
        type: '',
        image:'images/recursion.png',
        url:'https://sai-raman.github.io/sierpinski-recursion/.',
        description: `A Javascript p5.js project visualizing sierpinski-triangle with Recursion.`
    }
]



function displayProjects() {
    let value = ``;
    projects.forEach((project) => {

        value += `
        <div>
        <div class="post">
            <a href=${project.url}><img class="thumbnail" src=${project.image}></a>
            <div class="post-preview">
                <h6 class="post-title">${project.title}-${project.type}</h6>
                <p class="post-intro" id="para"><b>${project.description}</b>
                </p>
            </div>
        </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

displayProjects();
