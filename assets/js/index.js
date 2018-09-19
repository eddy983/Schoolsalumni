/* Dropdowns */
var elements = $(document).find("select.select.pop-up__input--drop-down");
for (var i = 0, l = elements.length; i < l; i++) {
  var $select = $(elements[i]),
    $label = $select.parents(".pop-up--drop").find("label");

  $select.select2({
    allowClear: false,
    placeholder: $select.data("placeholder"),
    minimumResultsForSearch: 0,
    theme: "bootstrap",
    width: "100%" 
  });

  // Trigger focus
  $label.on("click", function(e) {
    $(this)
      .parents(".quick-report__dropdowns--drop")
      .find("select")
      .trigger("focus")
      .select2("focus");
  });

  // Trigger search
  $select.on("keydown", function(e) {
    var $select = $(this),
      $select2 = $select.data("select2"),
      $container = $select2.$container;

    // Unprintable keys
    if (
      typeof e.which === "undefined" ||
      $.inArray(e.which, [
        0,
        8,
        9,
        12,
        16,
        17,
        18,
        19,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        44,
        45,
        46,
        91,
        92,
        93,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        123,
        124,
        144,
        145,
        224,
        225,
        57392,
        63289
      ]) >= 0
    ) {
      return true;
    }

    // Opened dropdown
    if ($container.hasClass("select2-container--open")) {
      return true;
    }

    $select.select2("open");

    // Default search value
    var $search = $select2.dropdown.$search || $select2.selection.$search,
      query =
        $.inArray(e.which, [13, 40, 108]) < 0
          ? String.fromCharCode(e.which)
          : "";
    if (query !== "") {
      $search.val(query).trigger("keyup");
    }
  });

  // Format, placeholder
  $select.on("select2:open", function(e) {
    var $select = $(this),
      $select2 = $select.data("select2"),
      $dropdown = $select2.dropdown.$dropdown || $select2.selection.$dropdown,
      $search = $select2.dropdown.$search || $select2.selection.$search,
      data = $select.select2("data");

    // Above dropdown
    if ($dropdown.hasClass("select2-dropdown--above")) {
      $dropdown.append($search.parents(".select2-search--dropdown").detach());
    }

    // Placeholder
    $search.attr(
      "placeholder",
      data[0].text !== "" ? data[0].text : $select.data("placeholder")
    );
  });
}

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("default", () =>
  gulp
    .src("assets/css/main.prefix.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("dist"))
);


// ? For diplay of other elements in the same pop-up 

// To go from log-in page to join page
function showJoinForm() {
  $("#log-in").css("display", "none");
  $("#join-1").css("display", "block");
};

// To go from join page to log-in page
function showLoginForm() {
  $("#join-1").css("display", "none");
  $("#log-in").css("display", "block");
};

// To go from join page to last join page
function showJoin2Form() {
  $("#join-1").css("display", "none");
  $("#join-2").css("display", "block");
};

// To go from last join page to log-in page
function showLoginaForm() {
  $("#join-2").css("display", "none");
  $("#log-in").css("display", "block");
};

// ? For diplay of pop-up 

// To display pop-up for log-in
function loginFormShow() {
  $("#pop-up").css("visibility", "visible");
  $("#pop-up").css("opacity", "1");
  $("#join-1").css("display", "none");
  $("#log-in").css("display", "block");
};

// To display pop-up for join
function joinFormShow() {
  $("#pop-up").css("visibility", "visible");
  $("#pop-up").css("opacity", "1");
  $("#log-in").css("display", "none");
  $("#join-1").css("display", "block");
};

// To display pop-up2
function showpopup2Form() {
  $("#pop-up2").css("visibility", "visible");
  $("#pop-up2").css("opacity", "1");
};


// ? For cancelling of pop-up 

// To cancel pop-up
function popupFormCancel() {
  $("#pop-up").css("visibility", "hidden");
  $("#pop-up").css("opacity", "0");
};

// To cancel pop-up2
function popup2FormCancel() {
  $("#pop-up2").css("visibility", "hidden");
  $("#pop-up2").css("opacity", "0");
};

