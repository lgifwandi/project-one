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
  
  for ( let i = 0; i < 5 ; i++ ) {
     
     $zipCode.text(policeData[i].incident_zip);
     $time.text(policeData[i].created_date);
     $complaint.text(policeData[i].descriptor);
     $status.text(policeData[i].status);

    }
}

$('form').on('submit', getData)