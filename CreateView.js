var root = document.getElementById("root");
var questionCount = 0;
var root = document.getElementById("root");
var bodyDiv = document.createElement("div");
var footerDiv = document.createElement("div");
var questionCount = 0;
let questions = new Array();


function OnPageLoad() {

  // ActionSDK.APIs.actionViewDidLoad(true /*success*/);

  root.appendChild(createInputElement("Survey title", "surveyTitle"));
  root.appendChild(bodyDiv);
  root.appendChild(footerDiv);

  var linebreak = document.createElement('br');


  var addQuestionButton = document.createElement("BUTTON");   // Create a <button> element
  addQuestionButton.innerHTML = "Add Question";


  var submit = document.createElement("BUTTON");   // Create a <button> element
  submit.innerHTML = "Create Form";
  submit.style.float = "right";

  footerDiv.appendChild(linebreak);
  footerDiv.appendChild(addQuestionButton);
  footerDiv.appendChild(submit);

  addQuestionButton.addEventListener("click", function () {
    bodyDiv.appendChild(addQuestion());
  });


  submit.addEventListener("click", function () {

    submitFormNew();
  });
}

function getQuestionSet() {

  for (var i = 0; i < questionCount; i++) {
   var val = {
        id: i.toString(),
        title: (document.getElementById(i.toString())).value,
        type: actionSDK.ActionDataFieldType.SingleOption,
        allowNullValue: false,
        options: [
            {
                id: i + "0",
                title: (document.getElementById(i + "0")).value
            },
            {
                id: i + "1",
                title: (document.getElementById(i + "1")).value
            }
        ]
    }
    questions.push(val);
  }

  return questions;
}
  
 

function createAction(actionPackageId) {

  var questionsSet = getQuestionSet();
  var action = {
      id: generateGUID(),
      actionPackageId: actionPackageId,
      version: 1,
      title: (document.getElementById("surveyTitle")).value,
      expiryTime: new Date().getTime() + (7 * 24 * 60 * 60 * 1000),
      properties: [],
      dataSets: [
          {
              id: "TestDataSet",
              itemsVisibility: actionSDK.Visibility.All,
              itemsEditable: false,
              canUserAddMultipleItems: true,
              dataFields: questionsSet
          }
      ]
  };
  var request = new actionSDK.CreateAction.Request(action);
  actionSDK.executeApi(request)
      .then(function (response) {
          console.info("CreateAction - Response: " + JSON.stringify(response));
      })
      .catch(function (error) {
          console.error("CreateAction - Error: " + JSON.stringify(error));
      });
}

function createInputElement(ph, id) {
  var inputelement = document.createElement('input'); // Create Input Field for Name
  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("id", id);
  inputelement.placeholder = ph;
  return inputelement;
}



function addQuestion() {

  var qDiv = document.createElement("div");
  var linebreak = document.createElement('br');
  qDiv.appendChild(linebreak);
  var questionHeading = document.createElement('h7'); // Heading of Form
  var inputelement = document.createElement('input'); // Create Input Field for Name
  var choiceCount = 0;

  questionHeading.innerHTML = "Question " + questionCount;
  qDiv.appendChild(questionHeading);

  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("value", "");
  inputelement.setAttribute("id", questionCount.toString());
  inputelement.placeholder = "Enter Question";
  qDiv.appendChild(inputelement);

  qDiv.appendChild(addChoice("choice 1", questionCount + "" + choiceCount++));
  qDiv.appendChild(addChoice("choice 2", questionCount + "" + choiceCount++));

  var linebreak = document.createElement('br');
  qDiv.appendChild(linebreak);
  questionCount++;
  return qDiv;
}


function addChoice(ph, cc) {
  var inputelement = document.createElement('input');
  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("value", "");
  inputelement.setAttribute("id", cc);
  inputelement.placeholder = ph;
  return inputelement;
}

function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function submitFormNew() {
  actionSDK.executeApi(new actionSDK.GetContext.Request())
  .then(function (response) {
      console.info("GetContext - Response: " + JSON.stringify(response));
      createAction(response.context.actionPackageId);
  })
.catch(function (error) {
    console.error("GetContext - Error: " + JSON.stringify(error));
  });
}