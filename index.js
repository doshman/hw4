
//let updateNorway = function(data) {

  //console.log("Got Norwegian headlines: ", data);
  // YOUR CODE GOES HERE
  //$("#norway").html(data.title)
  //let weatherIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  //$("#icon").attr("src", weatherIcon)
  //$(".card-title").html(data.name)
  //$("#degreesTemp").html("It is " + Math.round(data.main.temp) + " degrees outside.")

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

//}


//let getNorway = function(data) {
  //console.log(data)
  //window.data = data
  //let norwayTitle = data.title;
  //let norwayDescription = data.description;
  //let apiKey = '4a537f4ad60d98fe174dccbb2c50ae5a'; // REPLACE THIS VALUE with your own key.

  //let norwayURL = 'https://newsapi.org/v2/top-headlines?country=no&apiKey=90c18e22de8743439303e5528d570309'


  //fetch(norwayURL).then(convertToJSON).then(updateNorway).catch(displayError);
//}


//let mtvURL = 'https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=90c18e22de8743439303e5528d570309'


//jQuery("#get_forecast").on("click", findMe)

$(function() {
  let apiKey = "90c18e22de8743439303e5528d570309";
  let url = "https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    // $("norway").empty();
    // for (let i=0; i<data.results; i++) {
    //   let mtvStory = data.results[i];
    //   let html = '<div class="col-4">';
    //   html = html + '<div class="card">';
    //   //html = html + '<img class="urlToImage" src="' + movie.multimedia.src + '">';
    //   html = html + '<div class="card-body">';
    //   html = html + '<h4 class="card-title">' + mtvStory.title + '</h4>';
    //   html = html + '<p class="card-text">' + mtvStory.description + '</p>';
    //   html = html + '</div></div></div>';
    //   $("norway").append(html);
    // }
    // $("norway").fadeIn(2000);
    let title = data.articles[0].title
    console.log(title)
    let image = data.articles[0].urlToImage
    console.log(image)
    let description = data.articles[0].description
    console.log(description)
    document.getElementById("mtvHeadline").innerHTML = title
    document.getElementById("mtvDescription").innerHTML = description
    $("#mtvImage").attr("src", image)


  });
});


$(function() {
  let apiKey = "90c18e22de8743439303e5528d570309";
  let url = "https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    // $("australia").empty();
    // for (let i=0; i<data.results; i++) {
    //   let australiaStory = data.results[i];
    //   let html = '<div class="col-4">';
    //   html = html + '<div class="card">';
    //   //html = html + '<img class="urlToImage" src="' + movie.multimedia.src + '">';
    //   html = html + '<div class="card-body">';
    //   html = html + '<h4 class="card-title">' + australiaStory.articles[0].title + '</h4>';
    //   console.log(australia.articles[0].title);
    //   html = html + '<p class="card-text">' + australiaStory.description + '</p>';
    //   html = html + '</div></div></div>';
    //   $("australia").append(html);
    // }
    // $("australia").fadeIn(2000);
    let title = data.articles[0].title
    console.log(title)
    let image = data.articles[0].urlToImage
    console.log(image)
    let description = data.articles[0].description
    console.log(description)
    document.getElementById("australiaHeadline").innerHTML = title
    document.getElementById("australiaDescription").innerHTML = description
    $("#australiaImage").attr("src", image)
  });
});



$(function() {
  let apiKey = "90c18e22de8743439303e5528d570309";
  let url = "https://newsapi.org/v2/top-headlines?country=no&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    // $("#norway").empty();
    // for (let i=0; i<data.results; i++) {
    //   let norwayStory = data.results[i];
    //   let html = '<div class="col-sm-4">';
    //   html = html + '<div class="norway">';
    //   //html = html + '<div class="card">';
    //   //html = html + '<img class="urlToImage" src="' + movie.multimedia.src + '">';
    //   //html = html + '<div class="card-body">';
    //   html = html + '<h4 class="norway-title">' + norwayStory.title + '</h4>';
    //   html = html + '<p class="norway-text">' + norwayStory.description + '</p>';
    //   html = html + '</div></div></div>';
    //   $("#norway").append(html);
    // }
    // $("#norway").fadeIn(2000);

    let title = data.articles[1].title
    console.log(title)
    let image = data.articles[1].urlToImage
    console.log(image)
    let description = data.articles[1].description
    console.log(description)
    document.getElementById("norwayHeadline").innerHTML = title
    document.getElementById("norwayDescription").innerHTML = description
    $("#norwayImage").attr("src", image)

  });
});

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
