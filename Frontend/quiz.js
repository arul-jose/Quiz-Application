const onload = () => {
    let url = `http://localhost:8080/quiz/getAll`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const firstPageBody = document.getElementById("first-page-body")
            for (let i = 0; i < data.length; i++) {
                const challengeName = data[i].title;
                const challengeId = data[i].id;

                const inputElement = document.createElement("input");
                inputElement.setAttribute("type", "radio");
                inputElement.setAttribute("id", challengeId);
                inputElement.setAttribute("value", challengeName);
                inputElement.setAttribute("name", "challenge-input-box");

                const labelElement = document.createElement("label")
                labelElement.setAttribute("for", challengeId);

                const labelElementText = document.createTextNode(challengeName);
                labelElement.appendChild(labelElementText);

                firstPageBody.appendChild(inputElement);
                firstPageBody.appendChild(labelElement);

            }
        });
}
const goToChallenge = () => {
    // Find the selected Quiz
    const inputElementsList = document.getElementsByName("challenge-input-box");
    const challengeSelected = {};

    for (let i = 0; i < inputElementsList.length; i++) {
        if (inputElementsList[i].checked) {

             //alert("You have selected "+  inputElementsList[i].value);
            challengeSelected["id"] = inputElementsList[i].id;
            challengeSelected["value"] = inputElementsList[i].value;
            //break;
        }
    }

//console.log(challengeSelected);
    // Validate the user has given any selection
    if (challengeSelected.hasOwnProperty("id")) {
        alert("You have selected " + challengeSelected["value"]);
        loadQuizQuestions(challengeSelected["id"]);
    }
    else {
        alert("You have not selected any challenge. Please choose a challenge to proceed.");
    }

   
}

let quizId = null;
const question_id = [];

const loadQuizQuestions = (id) => {
    quizId = id;
    // Hide First Page and show second page
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";

    // Get selected Quiz Questions
    const secondPageBody = document.getElementById("second-page-body");
    const url = "http://localhost:8080/quiz/get/" + id;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let obj = data[i];
                question_id.push(obj.id);

                const questionbox = document.createElement('div');
                questionbox.setAttribute("class", "questionbox");


                const question = document.createElement('div');
                question.setAttribute("class", "question");
                let textNode = document.createTextNode(obj.questionTitle);
                question.appendChild(textNode);

                const option1 = document.createElement('div');
                option1.setAttribute("class", "option1");



                const option1input = document.createElement("input");
                option1input.setAttribute("type", "radio");
                option1input.setAttribute("id", obj.option1);
                option1input.setAttribute("value", obj.option1);
                option1input.setAttribute("name", obj.id);


                const option1label = document.createElement("label")
                option1label.setAttribute("for", obj.option1);
                const option1Text = document.createTextNode(obj.option1);
                option1label.appendChild(option1Text);
                option1.appendChild(option1input);
                option1.appendChild(option1label);


                const option2 = document.createElement('div');
                option2.setAttribute("class", "option2");

                const option2input = document.createElement("input");
                option2input.setAttribute("type", "radio");
                option2input.setAttribute("id", obj.option2);
                option2input.setAttribute("value", obj.option2);
                option2input.setAttribute("name", obj.id);

                const option2label = document.createElement("label")
                option2label.setAttribute("for", obj.option2);

                const option2Text = document.createTextNode(obj.option2);
                option2label.appendChild(option2Text);
                option2.appendChild(option2input);
                option2.appendChild(option2label);


                const option3 = document.createElement('div');
                option3.setAttribute("class", "option3");

                const option3input = document.createElement("input");
                option3input.setAttribute("type", "radio");
                option3input.setAttribute("id", obj.option3);
                option3input.setAttribute("value", obj.option3);
                option3input.setAttribute("name", obj.id);

                const option3label = document.createElement("label")
                option3label.setAttribute("for", obj.option3);

                const option3Text = document.createTextNode(obj.option3);
                option3label.appendChild(option3Text);
                option3.appendChild(option3input);
                option3.appendChild(option3label);



                const option4 = document.createElement('div');
                option4.setAttribute("class", "option4");

                const option4input = document.createElement("input");
                option4input.setAttribute("type", "radio");
                option4input.setAttribute("id", obj.option4);
                option4input.setAttribute("value", obj.option4);
                option4input.setAttribute("name", obj.id);

                const option4label = document.createElement("label")
                option4label.setAttribute("for", obj.option4);

                const option4Text = document.createTextNode(obj.option4);
                option4label.appendChild(option4Text);
                option4.appendChild(option4input);
                option4.appendChild(option4label);



                questionbox.appendChild(question);
                questionbox.appendChild(option1);
                questionbox.appendChild(option2);
                questionbox.appendChild(option3);
                questionbox.appendChild(option4);

                secondPageBody.appendChild(questionbox);
            }
        });
}
const submitQuiz = () => {
    // Find selected answers for all questions
    const response = [];
    
    for(let a=0; a<question_id.length; a++) {
        
        const inputElementsList = document.getElementsByName(question_id[a]);
        
        for (let i = 0; i < inputElementsList.length; i++) {
            if (inputElementsList[i].checked) {
                const questionResponse = {};
                questionResponse["id"] = inputElementsList[i].name;
                questionResponse["response"] = inputElementsList[i].value;
                response.push(questionResponse);
            }
        }
    }

    if(response.length != question_id.length) {
        alert("Please fill the answers for all the questions.");
    }
    else {
        fetch("http://localhost:8080/quiz/submit/"+quizId, {

            // Adding method type 
            method: "POST",
    
            // Adding body or contents to send 
            body: JSON.stringify(response),
    
            // Adding headers to the request 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    
            // Converting to JSON 
            .then(response => response.json())
    
            // Displaying results to console 
            .then(json => {
                console.log(json);
                const yourScore = document.getElementById('second-page-footer-score');
                const score = document.createTextNode("Your Score is : " + json);
    
                yourScore.appendChild(score);
                
    
            });
    
    }
}
onload();