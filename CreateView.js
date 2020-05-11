
// Fetching HTML Elements in Variables by ID(outside).
var root = document.getElementById("root");
var questionCount = 0;

var root = document.getElementById("root");
var bodyDiv = document.createElement("div");
var footerDiv = document.createElement("div");
var questionCount = 0;
let questions = new Array();


createBody();

function createBody() {

  ActionSDK.APIs.actionViewDidLoad(true /*success*/);

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

   submitForm();
  });
}

function createQuestionArray() {

  /*
    -Read question and choices value
    -Read All Question values
    -create HashMap for all question 
        like: 0: "test~1~0~SingleOption~test~test"
  */


  for (var i = 0; i < questionCount; i++) {
    var val = (document.getElementById(i.toString())).value + "~1~0~SingleOption~" +
      (document.getElementById(i + "0")).value + "~" + (document.getElementById(i + "1")).value;

    questions.push(val);
  }
}

function sendActioninstance(surveyTitle, questions) {

  let actionInstance = getActionInstance(surveyTitle, questions);

  ActionSDK.APIs.getCurrentContext()
    .then((context) => {
      ActionSDK.ActionUtils.prepareActionInstance(actionInstance, context);
      let data = CreateViewData(actionInstance, surveyTitle);
      ActionSDK.APIs.createActionInstance(actionInstance, data);
    });

}

function CreateViewData(actionInstance, title) {
  // let questions: string[] = new Array();
  // let columns: ActionSDK.ActionInstanceColumn[] = questions;
  // columns.forEach(column => {
  //     let question: string;
  //     question = column.title.replace("~", "\\~");
  //     if (column.isOptional) {
  //         question = question + "~1";
  //     } else {
  //         question = question + "~0";
  //     }
  //     // Adding question display type
  //     let customProperties = JSON.parse(column.customProperties);
  //     question = question.concat(`~${customProperties["dt"]}`);
  //     question = question.concat(`~${column.type.toString()}`);
  //     column.options.forEach(option => {
  //         question = question + `~${option.title.replace("~", "\\~")}`;
  //     });
  //     if (questions != null)
  //         questions.push(question);
  // });

  let surveyData = {
    ti: title,
    et: ActionSDK.Utils.getDefaultExpiry(7).getTime(),
    ia: actionInstance.isAnonymous ? 1 : 0,
    cl: questions,
    ns: `${actionInstance.notificationSettings[0].mode}~${actionInstance.notificationSettings[0].time}`,
    rv: 1,
    mr: 0
  };
  return surveyData;
}


function getActionInstance(title, questions) {


  let columnArray = [];

  for (var i = 0; i < questionCount; i++) {
    var val = (document.getElementById(i.toString())).value;// +"~1~0~SingleOption~"+
    var choice1 = (document.getElementById(i + "0")).value;
    var choice2 = (document.getElementById(i + "1")).value;

    let col = {
      id: i.toString(),
      type: ActionSDK.ActionInstanceColumnType.SingleOption,
      title: val,
      isOptional: false,
      options: []

    }

    col.isInvisible = false;
    col.isExcludedFromReporting = true;



    let op1 = {
      id: i + "0",
      title: choice1

    }
    let op2 = {
      id: i + "1",
      title: choice1

    }


    op1.id = i + "1";
    op1.title = choice2;

    col.options.push(op1);
    col.options.push(op2);
    columnArray.push(col);
  }

  let actionInstance = {
    title: title,
    expiry: ActionSDK.Utils.getDefaultExpiry(7).getTime(),
    columns: columnArray,
    properties: []
  };

  actionInstance.rowsVisibility = ActionSDK.Visibility.All;

  actionInstance.notificationSettings = [];
  var notificationSettingsMode = ActionSDK.NotificationSettingMode.None;

  actionInstance.notificationSettings.push({
    mode: notificationSettingsMode,
    time: 330
  });

  actionInstance.canUserAddMultipleRows = false;

  actionInstance.isAnonymous = false;

  return actionInstance;
}

function submitForm() {
  var surveyTitle = (document.getElementById("surveyTitle")).value;
  createQuestionArray();
  sendActioninstance(surveyTitle, questions);
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
  var inputelement = document.createElement('input'); // Create Input Field for Name
  inputelement.setAttribute("type", "text");
  inputelement.setAttribute("value", "");
  inputelement.setAttribute("id", cc);
  inputelement.placeholder = ph;
  return inputelement;
}