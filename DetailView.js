
var root = document.getElementById("root");
let actionInstance = null;
let actionSummary = null;

function createBody(){

    var title = document.createElement('h3');
    title.innerHTML = actionInstance.title;
    root.appendChild(title);
    createQuestionView();

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

          column.options.forEach((option) => {
           var optionView = getAggregateOptionView(option.title,option.id,column.id);
           qDiv.appendChild(optionView);
           
          });
          root.appendChild(qDiv);
          count++;
  });

}

function getAggregateOptionView( title,optionId,columnId) {

    var oDiv = document.createElement("div");
    
    var optionTitle = document.createElement('h6'); // Heading of For
    optionTitle.innerHTML = title;
    oDiv.appendChild(optionTitle);  

    var mDiv = document.createElement("div");
    mDiv.className = "meter";
    var spanTag1 = document.createElement('span');
    var wid = JSON.parse(actionSummary.defaultAggregates[columnId])[optionId]/actionSummary.itemCount*100;
    spanTag1.style.width =  isNaN(wid) ? "0%": wid + "%";

    mDiv.appendChild(spanTag1);  

    oDiv.appendChild(mDiv);  
  
    var newline = document.createElement('br');
    oDiv.appendChild(newline);
    return oDiv;  
} 


function getDataItems(actionId) {
        var getActionRequest = new actionSDK.GetAction.Request(actionId);
        var getSummaryRequest = new actionSDK.GetActionDataItemsSummary.Request(actionId,true);
        var getDataItemsRequest = new actionSDK.GetActionDataItems.Request(actionId);
        var closeViewRequest = new actionSDK.CloseView.Request();
        var batchRequest = new actionSDK.BaseApi.BatchRequest([getActionRequest, getSummaryRequest, getDataItemsRequest]);
        actionSDK.executeBatchApi(batchRequest)
            .then(function (batchResponse) {
                console.info("BatchResponse: " + JSON.stringify(batchResponse));
                actionInstance = batchResponse.responses[0].action;
                actionSummary = batchResponse.responses[1].summary;//.defaultAggregates;
                createBody();
            })
            .catch(function (error) {
                console.log("Error: " + JSON.stringify(error));
            });
    }

    function OnPageLoad() {
        actionSDK.executeApi(new actionSDK.GetContext.Request())
            .then(function (response) {
                console.info("GetContext - Response: " + JSON.stringify(response));
                getDataItems(response.context.actionId);
            })
            .catch(function (error) {
                console.error("GetContext - Error: " + JSON.stringify(error));
            });
    }