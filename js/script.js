const $zipCode = $("#incident_zip");
const $time  = $("#created_date");
const $complaint = $("#complaint_type");
const $status = $("#status");
const $text = $("#text");

function getData(evt){
  evt.preventDefault();

userInput = $text.val();
console.log("allo",userInput);


  $.ajax({
    url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?incident_zip=${userInput}`
  }).then(
    (openData) => {
      
      // console.log(openData);
      
      policeData = openData;
      render();
    },
    (error) => {
      console.log("Oops something went wrong: ", error);
    }
  );
}

function render(){
  
  $zipCode.text(policeData.incident_zip);
  $time.text(policeData.slice(0,4).created_date);
  $complaint.text(policeData.slice(0,4).complaint_type);
  $status.text(policeData.slice(0,4).status);
}

$('form').on('submit', getData);