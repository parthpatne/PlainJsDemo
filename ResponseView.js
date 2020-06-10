

// Fetching HTML Elements in Variables by ID.
var root = document.getElementById("root");
let row = {};
let actionInstance = null;

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


function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function getDataItem(actionId) {
  return {
      id: generateGUID(),
      actionId: actionId,
      dataSetId: "TestDataSet",
      fieldValues: row
  };
}

function addDataItems(actionId) {
  var addDataItemRequest1 = new actionSDK.AddActionDataItem.Request(getDataItem(actionId));
  // var addDataItemRequest2 = new actionSDK.AddActionDataItem.Request(getDataItem(actionId));
  var closeViewRequest = new actionSDK.CloseView.Request();
  var batchRequest = new actionSDK.BaseApi.BatchRequest([addDataItemRequest1, closeViewRequest]);
  actionSDK.executeBatchApi(batchRequest)
      .then(function (batchResponse) {
          console.info("BatchResponse: " + JSON.stringify(batchResponse));
      })
      .catch(function (error) {
          console.error("Error: " + JSON.stringify(error));
      })
}

function submitForm() {
    actionSDK.executeApi(new actionSDK.GetContext.Request())
    .then(function (response) {
      console.info("GetContext - Response: " + JSON.stringify(response));
          addDataItems(response.context.actionId);
      })
      .catch(function (error) {
          console.error("GetContext - Error: " + JSON.stringify(error));
      });
}


function createQuestionView(){

  var count = 1;
  actionInstance.dataSets[0].dataFields.forEach((column) => {
    
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

function OnPageLoad() {
  actionSDK.executeApi(new actionSDK.GetContext.Request())
      .then(function (response) {
          console.info("GetContext - Response: " + JSON.stringify(response));
          getActionInstance(response.context.actionId);
      })
      .catch(function (error) {
          console.error("GetContext - Error: " + JSON.stringify(error));
      });
}


function getActionInstance(actionId) {
  var getActionRequest = new actionSDK.GetAction.Request(actionId);
  var batchRequest = new actionSDK.BaseApi.BatchRequest([getActionRequest]);
  actionSDK.executeBatchApi(batchRequest)
      .then(function (batchResponse) {
          console.info("BatchResponse: " + JSON.stringify(batchResponse));
          actionInstance = batchResponse.responses[0].action;
          createBody();
      })
      .catch(function (error) {
          console.log("Error: " + JSON.stringify(error));
      });
}