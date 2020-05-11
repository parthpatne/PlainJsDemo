
ActionSDK.APIs.actionViewDidLoad(true /*success*/);

// Fetching HTML Elements in Variables by ID.
var root = document.getElementById("root");
let row = {};
let actionInstance = null;

initialize();

function createBody(){
    var title = document.createElement('h3');
    title.innerHTML = actionInstance.title;
    root.appendChild(title);
    createQuestionView();

    var submit = document.createElement("BUTTON");   // Create a <button> element
    submit.innerHTML = "Submit";
    submit.style.float = "right";
    submit.addEventListener("click", function () {

     submitForm();
    });

    root.appendChild(submit);
}
function submitForm() {
  
  //parth check how to get row and id 
  let actionInstanceRow = {
    id: "",
    isUpdate: false,
    row: row
};


ActionSDK.Utils.announceText(ActionSDK.Localizer.getString("SubmittingResponse"));
        ActionSDK.ActionUtils.prepareActionInstanceRow(actionInstanceRow);
        ActionSDK.APIs.createOrUpdateActionInstanceRows(actionInstance.id, [actionInstanceRow])
            .then((success) => {
                    ActionSDK.Utils.announceText(ActionSDK.Localizer.getString("Submitted"));
                    ActionSDK.APIs.dismissScreen();
                
            }).catch(error => {
                console.log("submit failed: "+ error.toString());
            });
}


function createQuestionView(){

  var count = 1;
  actionInstance.columns.forEach((column) => {
    
          var qDiv = document.createElement("div");

          var linebreak = document.createElement('br');
          qDiv.appendChild(linebreak);  

          var questionHeading = document.createElement('h4'); // Heading of For
          questionHeading.innerHTML = count + "."+ column.title;
          qDiv.appendChild(questionHeading);      

          //add radio button
          column.options.forEach((option) => {
           var radioOption = getRadioButton(option.title,column.id,option.id);
           qDiv.appendChild(radioOption);
           
          });
          root.appendChild(qDiv);
          count++;
  });

}

function getRadioButton( text,name,id) {

    var oDiv = document.createElement("div");
    oDiv.id = id;
  oDiv.setAttribute("columnId", name);
  
    oDiv.addEventListener("click", function () {
    radiobuttonclick(this.id,this.getAttribute("columnId"));
    });
    var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    radiobox.name = name;
    radiobox.id = id;
    radiobox.attributes
  
    oDiv.appendChild(radiobox);
    oDiv.appendChild(document.createTextNode(text));    
  
    var newline = document.createElement('br');
  

    oDiv.appendChild(newline);

    return oDiv;  
} 

function radiobuttonclick(optionId,colomnId){
  console.log("parth radio button clicked: "+optionId + colomnId);
  row[colomnId]=optionId;
}
function initialize(){

    ActionSDK.APIs.getCurrentContext()
    .then((context) => {   
      ActionSDK.APIs.getActionInstance(context.actionInstanceId)
      .then((ai) => {
      actionInstance = ai;
      createBody();
      })      
    });

}
