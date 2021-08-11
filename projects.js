const projects = [
    {
        title: 'WIKIME',
        url: 'https://chrome.google.com/webstore/detail/wikime/lgaejbhheehnafmcpknjjmebcabebkle?hl=en',
        codeUrl: 'https://github.com/sai-raman?tab=repositories',
        private: true,
        image: 'images/chrome.jpg',
        type: 'Google Chrome Extension',
        demoable: true,
        description: 'A chrome extension which searches for the highlighted text in WIKIPEDIA.'
    },
    {
        title: 'Human Face Mask Detection',
        image: 'images/mask.png',
        codeUrl: 'https://github.com/sai-raman/face-mask-detection',
        url: 'https://github.com/sai-raman/face-mask-detection',
        type: 'Machine Learning',
        demoable: false,
        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a person is wearing a mask or not.`
    },
    {
        title: 'Smart Atendance System',
        image: 'images/smart.png',
        codeUrl: 'https://github.com/sai-raman/Smart-Attendance-System',
        url: 'https://github.com/sai-raman/Smart-Attendance-System',
        type: 'Python',
        demoable: false,
        description: `A Python Application that generates QC codes for students and detects them via video feed.`
    },
    {
        title: 'Taskify - React',
        image: 'images/taskify.png',
        codeUrl: 'https://github.com/sai-raman/Taskify-React',
        url: 'https://sai-raman.github.io/Taskify-React/',
        type: 'React',
        demoable: true,
        description: `A React Application that makes note of the tasks and reminds them at the selected time.`
    },
    {
        title: 'Graduate Admit Prediction',
        image: 'images/admit.png',
        codeUrl: 'https://github.com/sai-raman/graduate-admission-prediction',
        url: 'https://github.com/sai-raman/graduate-admission-prediction',
        type: 'Machine Learning',
        demoable: false,
        description: `A Machine Learning model that analyzes different algorithms and predicts
        if a student can get an admit into a university.`
    },
    {
        title: 'COVID-19 Tracker',
        url: 'https://sai-raman.github.io/covidtracker/',
        codeUrl: 'https://github.com/sai-raman/covidtracker',
        private: false,
        demoable: true,
        image: 'images/tracker.png',
        type: 'React',
        description: 'A React project that tracks the COVID-19 cases across the world. It displays world wide trend using line graph and country wide cases in the form of bar graphs.'
    },
    {
        title: 'COVID -19 X-RAY Detection',
        image: 'images/covid.png',
        codeUrl: 'https://github.com/sai-raman/covid19-detection',
        url: 'https://github.com/sai-raman/covid19-detection',
        type: 'Machine Learning',
        demoable: false,

        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a a given X-RAY is COVID-19 positive or not.`
    },
    {
        title: 'Interactive Chat Bot - Jarvis',
        image: 'images/chat.jpg',
        codeUrl: 'https://github.com/sai-raman/seq2seq-chatbot',
        url: 'https://github.com/sai-raman/seq2seq-chatbot',
        type: 'Machine Learning',
        demoable: false,
        description: `A seq2seq deep learning model based on Recurrent Neural Networks that is trained on the Cornell movie conversations Dataset.`
    },
    {
        title: 'Black Hole Simulation',
        image: 'images/blackhole.png',
        codeUrl: 'https://github.com/sai-raman/Black-Hole-2D-Simulation',
        url: 'https://sai-raman.github.io/Black-Hole-2D-Simulation/',
        type: 'Javascript',
        demoable: true,
        description: `A 2 Dimensional simulation of a black hole representing the Accretion disk, Event Horizon and the bending of space time near the black hole.`
    },
    {
        title: 'Student Grade Prediction',
        image: 'images/grade.jpeg',
        codeUrl: 'https://github.com/sai-raman/student-grade-prediction',
        url: 'https://github.com/sai-raman/student-grade-prediction/blob/main/student_grade_prediction.ipynb',
        type: 'Machine Learning',
        demoable: false,
        description: `A machine learning project that uses both Naive Bayes and Decision
        Tree algorithms to predict the grade of a student.
        Technologies: Python, Scikit-learn, pandas, matplotlib`
    },
    {
        title: 'Maze Generation',
        image: 'images/maze.png',
        demoable: true,
        codeUrl: 'https://github.com/sai-raman/Maze-Generator-DFS',
        url: 'https://sai-raman.github.io/Maze-Generator-DFS/.',
        type: 'Algorithms',
        description: `A Javascript P5.js project which visualizes maze generation using
        Depth First Search technique, Recursive Backtracking`
    },
    {
        title: 'Liner Regression using tensorflowjs',
        image: 'images/lr.png',
        demoable: true,
        codeUrl: 'https://github.com/sai-raman/linear-regression-tensorflowjs',
        url: 'https://sai-raman.github.io/linear-regression-tensorflowjs/',
        type: 'Machine Learning',
        description: `A Javascript P5.js project which visualizes linear regression using tensorflowjs`
    },
    {
        title: 'Tennis Game ',
        type: 'Javascript',
        image: 'images/tennis.png',
        demoable: true,
        codeUrl: 'https://github.com/sai-raman/Games',
        url: 'https://sai-raman.github.io/Games/.',
        description: `A tennis game developed using HTML, CSS and Javascript (Using
            Canvas)`
    },
    {
        title: 'Snake Game',
        type: 'Javascript',
        demoable: true,
        codeUrl: 'https://github.com/sai-raman/snake-game',
        url: 'https://sai-raman.github.io/snake-game/.',
        image: 'images/snake.png',
        description: `The classic snake game build using Javascript and P5.js.`
    },
    {
        title: 'Budget Manager',
        demoable: false,
        url: 'https://github.com/sai-raman?tab=repositories',
        codeUrl: 'https://github.com/sai-raman?tab=repositories',
        image: 'images/chrome.jpg',
        type: 'Google Chrome Extension',
        description: `A chrome extension to make a note of expenses especially on the
        ecommerce websites.`
    },

    {
        title: 'Sierpinski Triangle -  Visualizing Recursion',
        type: 'Javascript',
        demoable: true,
        codeUrl: 'https://github.com/sai-raman/sierpinski-recursion',
        image: 'images/recursion.png',
        url: 'https://sai-raman.github.io/sierpinski-recursion/.',
        description: `A Javascript p5.js project visualizing sierpinski-triangle with Recursion.`
    },
    {
        title: 'Speak It',
        type: 'Google Chrome Extension',
        codeUrl: 'https://github.com/sai-raman?tab=repositories',
        image: 'images/chrome.jpg',
        demoable: false,
        url: 'https://github.com/sai-raman?tab=repositories',
        description: `A chrome extension which says aloud the selected text on the
        browser using the Web Speech API of chrome.`
    },
    {
        title: 'JSON Web Tokens',
        type: 'NodeJs',
        demoable: false,
        codeUrl: 'https://github.com/sai-raman/JWT',
        image: 'images/jwt.png',
        url: 'https://github.com/sai-raman/JWT',
        description: `A simple Node application demonstrating the use of JSON Web Token
        (JWT).`
    },
    {
        title: 'Multi Broker Kafka',
        type: 'NodeJs',
        demoable: false,
        codeUrl: 'https://github.com/sai-raman/multi-broker-kafka',
        image: 'images/kafka.png',
        url: 'https://github.com/sai-raman/multi-broker-kafka',
        description: `A dockerized application demonstrating multibroker kafka.`
    },
    {
        title: 'Happy Birthday',
        type: 'Python, Turtle',
        demoable: false,
        codeUrl: 'https://github.com/sai-raman/birthday',
        image: 'images/cake.png',
        url: 'https://github.com/sai-raman/birthday',
        description: `A python application that draws a cake and a text "Happy Birthday"
        using "Turtle" module in Python.`
    }
]

let search_input = document.getElementById('search');

function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

search_input.addEventListener(
    "keyup",
    debounce(filter, 1000)
);


function displayProjects(list) {
    let value = ``;
    list.forEach((project) => {
        const viewCode = `
        <a class="btn btn-primary" onclick="window.open('${project.url}', '_blank');">View Code</a>
        `;
        const demoCode = `
        <a class="btn btn-danger" onclick="window.open('${project.url}', '_blank');">Demo</a>
        `;
        value += `
        <div class="card" style="width: 18rem;">
             <a href=${project.url} style="text-decoration: none;">
             <img class="thumbnail" src=${project.image} />
            <div class="card-body">
                 <h6 class="post-title">${project.title}</h6>
                 <p class="post-title">${project.type}</p>
                   <p class="post-intro" id="para"><b>${project.description}</b></p>
                ${viewCode}
                ${project.demoable ? demoCode : ''}
            </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

function filter() {
    let list = [];
    let searchText = document.getElementById('search').value;
    list = projects.filter(project => {
        let name = project.title + " " + project.type + " " + project.description;
        return name.trim().toLowerCase().includes(searchText.trim().toLowerCase());
    })
    if (list.length != 0)
        displayProjects(list);
    else
        displayProjects(projects);
}


displayProjects(projects);

