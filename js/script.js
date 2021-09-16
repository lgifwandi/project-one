

  $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
  }).then(
    (data) => {
      console.log(data);
    })
