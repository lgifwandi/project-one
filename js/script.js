const $zipCode = $("#incident_zip");
const $time  = $("#created_date");
const $complaint = $("#complaint_type");
const $status = $("#status");
const $text = $("#text");
const $mainContent = $('main');

let policeData;

function getData(evt){

  evt.preventDefault();

//prompt a user to input the zip code
userInput = $text.val();


$.ajax({
    url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?incident_zip=${userInput}`
  }).then(
    (openData) => {
    
    policeData = openData;
    //console.log(policeData);
      
    parseData()
    render();
    },
    (error) => {

      console.log("Oops something went wrong: ", error);

    }
  );
}
function parseData() {

  //A function to sort an array to get the recent five complaints
  let sortedArray = policeData.sort(function(a, b){

    return new Date(b.created_date) - new Date(a.created_date);
  
  });

    
  //Reduce the array to five index
   return sortedArray.slice(0,5); 
   
}

function render(){
 

let shortenedArray = parseData();
console.log(shortenedArray);


//A forEach to display five recent complaints
shortenedArray.forEach(function(incident){

  let zipComplaint = $(`<p>incident_zip : ${incident.incident_zip}</p>`);
  let timeComplaint = $(`<p>created_date :${incident.created_date}</p>`);
  let typeComplaint = $(`<p>complaint_type :${incident.complaint_type}</p>`);
  let statusComplaint = $(`<p>status :${incident.status}</p>`);

  $mainContent.append(zipComplaint,timeComplaint,typeComplaint,statusComplaint);
});

}
$('form').on('submit', getData)