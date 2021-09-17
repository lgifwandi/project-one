const $zipCode = $("#incident_zip");
const $time  = $("#created_date");
const $complaint = $("#descriptor");
const $status = $("#status");
const $text = $("#text");

function getData(evt){
  evt.preventDefault();

userInput = $text.val();

$.ajax({
    url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?incident_zip=${userInput}`
  }).then(
    (openData) => {
    
      
      policeData = openData;
      recentPoliceData = policeData.slice(0,4);
      render();
    },
    (error) => {
      console.log("Oops something went wrong: ", error);
    }
  );
}

function render(){

  for ( let i = 0; i < 5 ; i++ ) {
     
     $zipCode.text(recentPoliceData[i].incident_zip);
     $time.text(recentPoliceData[i].created_date);
     $complaint.text(recentPoliceData[i].descriptor);
     $status.text(recentPoliceData[i].status);

    }
}

$('form').on('submit', getData)