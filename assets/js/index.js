//? For Smooth Scrolling Feature
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});



//? For charater limit
// <![Description[
$(function () {
  $(".description-font").each(function (i) {
    len = $(this).text().length;
    if (len > 440) {
      $(this).text(
        $(this)
          .text()
          .substr(0, 440) + "..."
      );
    }
  });
});
      // ]]>
// <![Profile[
$(function () {
  $(".profile-font").each(function(i) {
    len = $(this).text().length;
    if (len > 17) {
      $(this).text($(this)
          .text()
          .substr(0, 17) + "...");
    }
  });
});
      // ]]>
// <![Profile[
$(function () {
  $(".box-font-title").each(function(i) {
    len = $(this).text().length;
    if (len > 45) {
      $(this).text($(this)
          .text()
          .substr(0, 45) + "...");
    }
  });
});
      // ]]>

//? To show charater limit in textarea
var maxLength = 440;
$("textarea").keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $("#rchars").text(textlen);
});

// ? For pagination
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace(" actives", "");
    this.className += " actives";
  });
}


/*  Navigation */
var open = false;

function Drop(n) {
  var i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i);
    }
    open = true;
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i);
    }
    open = false;
  }
}

function Drp(n) {
  var elem = document.getElementsByClassName("menu-con")[n];
  var pos = -1 * window.innerHeight - n * 100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + "px";
    } else {
      pos += 10;
      elem.style.top = pos + "px";
    }
  }
}

function Cls(n) {
  var elems = document.getElementsByClassName("menu-con")[n];
  var poss = 0;
  var ids = setInterval(frames, 5);

  function frames() {
    if (poss <= -1 * window.innerHeight) {
      clearInterval(ids);
      elems.style.top = -1 * window.innerHeight + "px";
    } else {
      poss += -7 - n * 2;
      elems.style.top = poss + "px";
    }
  }
}

/* Nav-bar Line */
$(document).ready(function() {
  $("ul li a").click(function() {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});

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



// ? For diplay of other elements in the create project form

// To go from project form page to personal form page
function showPersonalForm() {
  $("#div-1").css("display", "none");
  $("#div-2").css("display", "block");
}

// To go from project form page to group form page
function showGroupForm() {
  $("#div-1").css("display", "none");
  $("#div-3").css("display", "block");
}

// To go from project form page to public form page
function showPubicForm() {
  $("#div-1").css("display", "none");
  $("#div-4").css("display", "block");
}

// To go from any form page to submit form page
function showSubmitForm() {
  $("#div-1").css("display", "none");
  $("#div-2").css("display", "none");
  $("#div-3").css("display", "none");
  $("#div-4").css("display", "none");
  $("#div-5").css("display", "block");
}

// To go from any form page to project form page
function showProjectForm() {
  $("#div-2").css("display", "none");
  $("#div-3").css("display", "none");
  $("#div-4").css("display", "none");
  $("#div-5").css("display", "none");
  $("#div-1").css("display", "block");
}

// ? For diplay of other elements in the Payment form

// To go from Remain Anonymous form page to Tag me form page
function showTagForm() {
  $("#d-1").css("display", "none");
  $("#d-2").css("display", "block");
  $("#h-1").css("background-color", "#5b5c5c");
  $("#h-2").css("background-color", "#0f4082");

  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      $("#p-1").css("flex-direction", "unset");
    } else {
      $("#p-1").css("flex-direction", "column-reverse"); 
    }
  }
}

// To go from Tag me form page to Remain Anonymous form page
function showRemainForm() {
  $("#d-1").css("display", "block");
  $("#d-2").css("display", "none");
  $("#h-1").css("background-color", "#0f4082");
  $("#h-2").css("background-color", "#5b5c5c");

  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      $("#p-1").css("flex-direction", "unset");
    } else {
      $("#p-1").css("flex-direction", "column");
    }
  }
}

//? Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace(" actives", "");
    this.className += " actives";
  });
}
