
ActionSDK.APIs.actionViewDidLoad(true /*success*/);

var root = document.getElementById("root");
let actionInstance = null;
let actionSummary = null;

initialize();

function createBody(){

    var title = document.createElement('h3');
    title.innerHTML = actionInstance.title;
    root.appendChild(title);
    createQuestionView();

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
    spanTag1.style.width = (JSON.parse(actionSummary.aggregates[columnId])[optionId]/actionSummary.rowCount*100)+"%";

    mDiv.appendChild(spanTag1);  

    oDiv.appendChild(mDiv);  
  
    var newline = document.createElement('br');
    oDiv.appendChild(newline);
    return oDiv;  
} 

function initialize(){

    ActionSDK.APIs.getCurrentContext()
    .then((context) => {   
      ActionSDK.APIs.getActionInstance(context.actionInstanceId)
      .then((ai) => {
      actionInstance = ai;
      ActionSDK.APIs.getActionInstanceSummary(actionInstance.id, false /* isShortSummary */)
            .then((aggregatedSummary) => {
              actionSummary = aggregatedSummary;
                createBody();
            })
            .catch((error) => {
                console.log(error);
            });
      })      
    });

}

