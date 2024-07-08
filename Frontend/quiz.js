const loopData = () => {

    let apiCall = `http://localhost:8080/quiz/get/1`;
    const mainEle = document.getElementById('main');

    fetch(apiCall)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let obj = data[i];
                // <div id="questionbox">
                // <div id="question">What is a class in Java?</div>
                // <div id="option1">
                //     <input type="radio" id="html" name="fav_language" value="HTML">
                //       <label for="html">HTML</label>
                // </div>
                // <div id="option2">
                //     <input type="radio" id="html">
                //       <label for="html">html</label>
                // </div>
                // <div id="option3">
                //     <input type="radio" id="html" name="fav_language" value="HTML">
                //       <label for="html">HTML</label>
                // </div>
                // <div id="option4">
                //     <input type="radio" id="html" name="fav_language" value="HTML">
                //       <label for="html">HTML</label>
                // </div>
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

            


                main.appendChild(questionbox);


            }

            ;
        })
};

loopData()