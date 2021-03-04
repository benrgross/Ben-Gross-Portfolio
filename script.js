// ------------- click function to enlarge portfolio gif
$("#code-quiz").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".text-box").hide(".text-box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var header = $("<h4>").html(
    `Code Quiz | <a href="https://github.com/benrgross/">Link to Git Hub Repository</a> | <a href="https://benrgross.github.io/Coding-Quiz/">Link to Webpage</a>`
  );
  var gif = $("<img>")
    .attr("src", "./images/Code-Quiz.gif")
    .attr(
      "style",
      "height: 500px; width: 500px; margin-left: 5%; margin top: 20px"
    );
  var back = $("<button>")
    .attr("class", "btn btn-primary back")
    .attr("style", "float: left")
    .html(`<i class="fas fa-arrow-circle-left"></i>`);

  zoomGif.append(header);
  zoomGif.append(gif);
  zoomGif.append(back);
  $("body").append(zoomGif);

  $(".back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".text-box").removeAttr("style", "display: none");
  });
});

// ------------- click function to enlarge portfolio gif
$("#weather-dashboard").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".text-box").hide(".text-box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var header = $("<h4>").html(
    `Weather Dashboard | <a href="https://github.com/benrgross/Weather-Dashboard">Link to Git Hub Repository</a> | <a href="https://benrgross.github.io/Weather-Dashboard/">Link to Webpage</a>`
  );
  var gif = $("<img>")
    .attr("src", "./images/Weather-Dash.gif")
    .attr(
      "style",
      "height: 500px; width: 500px; margin-left: 12%; margin top: 20px"
    );
  var back = $("<button>")
    .attr("class", "btn btn-primary back")
    .attr("style", "float: left")
    .html(`<i class="fas fa-arrow-circle-left"></i>`);
  zoomGif.append(header);
  zoomGif.append(gif);
  zoomGif.append(back);
  $("body").append(zoomGif);

  $(".back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".text-box").removeAttr("style", "display: none");
  });
});

// ------------- click function to enlarge portfolio gif
$("#day-planner").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".text-box").hide(".text-box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var header = $("<h4>").html(
    `Plan Your Workday | <a href="https://github.com/benrgross/Plan-Your-Workday">Link to Git Hub Repository</a> | <a href="https://benrgross.github.io/Plan-Your-Workday/">Link to Webpage</a>`
  );
  var gif = $("<img>")
    .attr("src", "./images/day-planner.gif")
    .attr(
      "style",
      "height: 500px; width: 500px; margin-left: 15%; margin-top: 20px"
    );
  var back = $("<button>")
    .attr("class", "btn btn-primary back")
    .attr("style", "float: left")
    .html(`<i class="fas fa-arrow-circle-left"></i>`);

  zoomGif.append(header);
  zoomGif.append(gif);
  zoomGif.append(back);
  $("body").append(zoomGif);

  $(".back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".text-box").removeAttr("style", "display: none");
  });
});

$("#burger").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".text-box").hide(".text-box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var header = $("<h4>").html(
    `Plan Your Workday | <a href="https://github.com/benrgross/Build-A-Burger">Link to Git Hub Repository</a> | <a href="https://burger-fun.herokuapp.com/">Link to Webpage</a>`
  );
  var gif = $("<img>")
    .attr("src", "./images/burger.gif")
    .attr(
      "style",
      "height: 500px; width: 500px; margin-left: 15%; margin-top: 20px"
    );
  var back = $("<button>")
    .attr("class", "btn btn-primary back")
    .attr("style", "float: left")
    .html(`<i class="fas fa-arrow-circle-left"></i>`);

  zoomGif.append(header);
  zoomGif.append(gif);
  zoomGif.append(back);
  $("body").append(zoomGif);

  $(".back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".text-box").removeAttr("style", "display: none");
  });
});

$("#pipe-cleaner").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".text-box").hide(".text-box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var header = $("<h4>").html(
    `Plan Your Workday | <a href="https://github.com/benrgross/Party-Of-Four">Link to Git Hub Repository</a> | <a href="https://four-top.herokuapp.com/">Link to Webpage</a>`
  );
  var gif = $("<img>")
    .attr("src", "./images/Pipe-Cleaner-demo.gif")
    .attr(
      "style",
      "height: 500px; width: 500px; margin-left: 15%; margin-top: 20px"
    );
  var back = $("<button>")
    .attr("class", "btn btn-primary back")
    .attr("style", "float: left")
    .html(`<i class="fas fa-arrow-circle-left"></i>`);

  zoomGif.append(header);
  zoomGif.append(gif);
  zoomGif.append(back);
  $("body").append(zoomGif);

  $(".back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".text-box").removeAttr("style", "display: none");
  });
});
