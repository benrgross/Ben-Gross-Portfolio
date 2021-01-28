// ------------- click function to enlarge portfolio gif
$("#code-quiz").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".Text-Box").hide(".Text-Box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var gif = $("<img>")
    .attr("src", "./images/Code-Quiz.gif")
    .attr("style", "height: 500px; width: 500px; margin: auto");
  var icon = $(
    `<i id="back" style="hight: 20px" class="fas fa-backspace"></i>`
  );
  zoomGif.append(gif);
  zoomGif.append(icon);
  $("body").append(zoomGif);

  $("#back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".Text-Box").removeAttr("style", "display: none");
  });
});

// ------------- click function to enlarge portfolio gif
$("#weather-dashboard").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".Text-Box").hide(".Text-Box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var gif = $("<img>")
    .attr("src", "./images/Weather-Dash.gif")
    .attr("style", "height: 500px; width: 500px; margin: auto");
  var icon = $(
    `<i id="back" style="hight: 20px" class="fas fa-backspace"></i>`
  );
  zoomGif.append(gif);
  zoomGif.append(icon);
  $("body").append(zoomGif);

  $("#back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".Text-Box").removeAttr("style", "display: none");
  });
});

// ------------- click function to enlarge portfolio gif
$("#day-planner").click(function () {
  console.log("click");
  /// -------------- hide text box with gifs
  $(".Text-Box").hide(".Text-Box");

  //   build new div with zoomed gif
  var zoomGif = $("<div>").attr("class", "gif-zoom");
  var gif = $("<img>")
    .attr("src", "./images/day-planner.gif")
    .attr("style", "height: 500px; width: 500px; margin: auto");
  var icon = $(
    `<i id="back" style="hight: 20px" class="fas fa-backspace"></i>`
  );
  zoomGif.append(gif);
  zoomGif.append(icon);
  $("body").append(zoomGif);

  $("#back").click(function () {
    console.log("click");
    zoomGif.remove();
    $(".Text-Box").removeAttr("style", "display: none");
  });
});
