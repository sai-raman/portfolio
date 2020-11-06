const projects = [
    {
        title: 'WIKIME',
        url: 'https://github.com/sai-raman?tab=repositories',
        codeUrl:'https://github.com/sai-raman?tab=repositories',
        private:true,
        image:'images/chrome.jpg',
        type: 'Google Chrome Extension',
        description: 'A chrome extension which searches for the highlighted text in WIKIPEDIA.'
    },
    {
        title: 'Human Face Mask Detection',
        image:'images/mask.png',
        codeUrl:'https://github.com/sai-raman/face-mask-detection',
        url: 'https://github.com/sai-raman/face-mask-detection',
        type: 'Deep Learning Model',
        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a person is wearing a mask or not.`
    },
        {
        title: 'COVID -19 X-RAY Detection',
        image:'images/covid.png',
        codeUrl:'https://github.com/sai-raman/covid19-detection',
        url: 'https://github.com/sai-raman/covid19-detection',
        type: 'Convolutional Neural Network',
        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a a given X-RAY is COVID-19 positive or not.`
    },
      {
        title: 'Interactive Chat Bot - Jarvis',
        image:'images/chat.jpg',
        codeUrl:'https://github.com/sai-raman/seq2seq-chatbot',
        url: 'https://github.com/sai-raman/seq2seq-chatbot',
        type: 'Recurrent Neural Networks',
        description: `A seq2seq deep learning model based on Recurrent Neural Networks that is trained on the Cornell movie conversations Dataset.`
    },
     {
        title: 'Black Hole Simulation',
        image:'images/blackhole.png',
        codeUrl:'https://github.com/sai-raman/Black-Hole-2D-Simulation',
        url: 'https://sai-raman.github.io/Black-Hole-2D-Simulation/',
        type: '2 Dimensional',
        description: `A 2 Dimensional simulation of a black hole representing the Accretion disk, Event Horizon and the bending of space time near the black hole.`
    },
    {
        title: 'Student Garde Prediction',
        image:'images/grade.jpeg',
        codeUrl:'https://github.com/sai-raman/student-grade-prediction',
        url: 'https://github.com/sai-raman/student-grade-prediction/blob/main/student_grade_prediction.ipynb',
        type: 'Machine Learning Model',
        description: `A machine learning project that uses both Naive Bayes and Decision
        Tree algorithms to predict the grade of a student.
        Technologies: Python, Scikit-learn, pandas, matplotlib`
    },
    {
        title: 'Maze Generation',
        image:'images/maze.png',
        codeUrl:'https://github.com/sai-raman/Maze-Generator-DFS',
        url: 'https://sai-raman.github.io/Maze-Generator-DFS/.',
        type: 'Depth First Search, Backtracking',
        description: `A Javascript P5.js project which visualizes maze generation using
        Depth First Search technique, Recursive Backtracking`
    },
    {
        title: 'Liner Regression using tensorflowjs',
        image:'images/lr.png',
        codeUrl:'https://github.com/sai-raman/linear-regression-tensorflowjs',
        url: 'https://sai-raman.github.io/linear-regression-tensorflowjs/',
        type: '',
        description: `A Javascript P5.js project which visualizes linear regression using tensorflowjs`
    },
    {
        title: 'Tennis Game ',
        image:'images/tennis.png',
        codeUrl:'https://github.com/sai-raman/Games',
        url:'https://sai-raman.github.io/Games/.',
        type: 'Javascript',
        description: `A tennis game developed using HTML, CSS and Javascript (Using
            Canvas)`
    },
    {
        title: 'Snake Game',
        type: 'Javascript',
        codeUrl:'https://github.com/sai-raman/snake-game',
        url:'https://sai-raman.github.io/snake-game/.',
        image:'images/snake.png',
        description: `The classic snake game build using Javascript and P5.js.`
    },
    {
        title: 'Budget Manager',
        url:'https://github.com/sai-raman?tab=repositories',
        codeUrl:'https://github.com/sai-raman?tab=repositories',
        image:'images/chrome.jpg',
        type: 'Google Chrome Extension',
        description: `A chrome extension to make a note of expenses especially on the
        ecommerce websites.`
    },
    
        {
        title: 'Sierpinski Triangle -  Visualizing Recursion',
        type: '',
        codeUrl:'https://github.com/sai-raman/sierpinski-recursion',
        image:'images/recursion.png',
        url:'https://sai-raman.github.io/sierpinski-recursion/.',
        description: `A Javascript p5.js project visualizing sierpinski-triangle with Recursion.`
    },
    {
        title: 'Speak It',
        type: 'Google Chrome Extension',
        codeUrl:'https://github.com/sai-raman?tab=repositories',
        image:'images/chrome.jpg',
        url:'https://github.com/sai-raman?tab=repositories',
        description: `A chrome extension which says aloud the selected text on the
        browser using the Web Speech API of chrome.`
    },
    {
        title: 'JSON Web Tokens',
        type: 'Demo',
        codeUrl:'https://github.com/sai-raman/JWT',
        image:'images/jwt.png',
        url:'https://github.com/sai-raman/JWT',
        description: `A simple Node application demonstrating the use of JSON Web Token
        (JWT).`
    },
    {
        title: 'Multi Broker Kafka',
        type: 'Demo',
        codeUrl:'https://github.com/sai-raman/multi-broker-kafka',
        image:'images/kafka.png',
        url:'https://github.com/sai-raman/multi-broker-kafka',
        description: `A dockerized application demonstrating multibroker kafka.`
    },
        {
        title: 'Happy Birthday',
        type: 'Python, Turtle',
        codeUrl:'https://github.com/sai-raman/birthday',
        image:'images/cake.png',
        url:'https://github.com/sai-raman/birthday',
        description: `A python application that draws a cake and a text "Happy Birthday"
        using "Turtle" module in Python.`
    }
]

let search_input = document.getElementById('search');

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

search_input.addEventListener(
    "keyup",
    debounce( filter, 1000 )
);


function displayProjects(list) {
    let value = ``;
    list.forEach((project) => {

        value += `
        <div>
        <div class="post">
            <a href=${project.url}><img class="thumbnail" src=${project.image}></a>
            <div class="post-preview">
                <h4 class="post-title">${project.title}-${project.type}</h4>
                <p class="post-intro" id="para"><b>${project.description}</b>
                </p>
                <button class="btn btn-danger" onclick="window.open('${project.codeUrl}', '_blank');">View Code</button>
            </div>
        </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

function filter(){
    let list = [];
    let searchText = document.getElementById('search').value;
    list = projects.filter(project=>{
        let name = project.title + " "+project.type+" "+project.description;
        return name.trim().toLowerCase().includes(searchText.trim().toLowerCase());
    })
    if(list.length!=0)
    displayProjects(list);
    else
    displayProjects(projects);
}


displayProjects(projects);

