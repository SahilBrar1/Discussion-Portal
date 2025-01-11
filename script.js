const subjectBox = document.getElementById("subjectBox");
const questionBox = document.getElementById("questionBox");
const submitbtn = document.getElementById("submitButton");

const questionFormBtn = document.getElementById("QuestionFormBtn");
const questionContainer = document.getElementById("question-container");

const welcomeView = document.getElementById("Welcome-view");

const questionHeadingResponseForm = document.getElementById("questionHeading");
const questionResponseForm = document.getElementById("question");

const responseFormView = document.getElementById("response-form-view");

questionFormBtn.addEventListener('click',()=>
    {
        welcomeView.classList.remove("hidden");
        responseFormView.classList.add("hidden");
    });
submitbtn.addEventListener('click', function(event){
    if(subjectBox.value !== "" && questionBox.value !== ""){

        questionContainer.classList.add("questionContainer");

        const questionElement = document.createElement("div");
        questionElement.className = "questions";

        const questionHeading = document.createElement("h2");
        questionHeading.className = "questionHeading";
        questionHeading.textContent = subjectBox.value;

        const question = document.createElement("p");

        question.className = "question";
        question.textContent = questionBox.value;

        const hr = document.createElement("hr");

        questionElement.appendChild(questionHeading);
        questionElement.appendChild(question);

      
        questionElement.appendChild(hr);
        questionContainer.appendChild(questionElement);


        subjectBox.value = "";
        questionBox.value = "";

        event.preventDefault();

        const searchBar = document.getElementById("SearchQuestionBar");

        searchBar.addEventListener('input', function(){
            let searchTerm = searchBar.value.toLocaleLowerCase();
            const questionElements = document.querySelectorAll(".questions");

            questionElements.forEach((Element) => {

                const questionTitle = Element.querySelector(".questionHeading").innerText.toLowerCase();
              
                const questionText = Element.querySelector(".question").innerText.toLowerCase();

                if (questionTitle.includes(searchTerm) || questionText.includes(searchTerm)) 
                {
                    Element.style.display="none";
                } 
                else 
                {
                    Element.style.display = "none";
                }
            });
        });

        questionElement.addEventListener('click', function() 
        {        
            showResponseForm(questionHeading,question);
        });

    }
});

function showResponseForm(questionHeading, question){
    welcomeView.classList.add("hidden");
    responseFormView.classList.remove("hidden");

    var oldData = null;
    let value = questionHeading.textContent + question.textContent;
    oldData = localStorage.getItem(value);

    if(oldData !== null)
    {
        responseContainer.innerHTML = oldData;
    }
    else
    {
        responseContainer.innerHTML = "";
    }

    questionHeadingResponseForm.textContent = questionHeading.textContent;
    questionResponseForm.textContent = question.textContent;
}

resolveButton.addEventListener('click', ()=>
{
    const questionElements = document.querySelectorAll(".questions");
    questionElements.forEach((Element) => {
        var value = questionHeadingResponseForm.textContent + questionResponseForm.textContent;
        if(Element.textContent === value)
        {
            if(confirm("Are Yor Sure?"))
            {
                Element.remove();
                responseContainer.innerHTML = "";
                localStorage.setItem(value,responseContainer.innerHTML);
                welcomeView.classList.remove("hidden");
                responseFormView.classList.add("hidden");
            }
        }
    });
}
);

responseSubmitButton.addEventListener('click',(event) =>
    {
        if(responseName.value !== "" && responseComment.value !== "")
        {
            
            const response = document.createElement("div");
            
            response.style.paddingTop = "7px";
            response.style.paddingLeft = "10px";
            
            const name = document.createElement("h4");
            name.classList.add("responseName1")
    
            const resp = document.createElement("p");
            resp.classList.add("responseComment1");
            const hr = document.createElement("hr");
    
         
            name.textContent = responseName.value;
            resp.textContent = responseComment.value;
    
            
            responseName.value = "";
            responseComment.value = "";
    
    
           
            response.appendChild(name);
            response.appendChild(resp);
    
            responseContainer.appendChild(response);
            responseContainer.appendChild(hr); 
    
            Responses.appendChild(responseContainer);
    
            var user = questionHeading.textContent + question.textContent;
                
            localStorage.setItem(user,responseContainer.innerHTML);
            event.preventDefault();
        } 
    });