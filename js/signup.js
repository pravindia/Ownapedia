/*jslint browser: true*/
/*global $, jQuery, alert, confirm, console, prompt*/

//var n = 1;
$("#nx1").click(function () {
    "use strict";

    $("fieldset:nth-of-type(1)").hide();
    $("li:nth-of-type(2)").addClass("active");
    //n = n + 1;
    //console.log(n);
    $("fieldset:nth-of-type(2)").show();

});

$("#pr2").click(function () {
    "use strict";
    $(".f2").hide();
    $("li:nth-of-type(2)").removeClass("active");
    //n = n - 1;
    $("fieldset:nth-of-type(1)").show();
});

$("#nx2").click(function () {
    "use strict";
    $(".f2").hide();
    $("li:nth-of-type(3)").addClass("active");
    $("fieldset:nth-of-type(3)").show();

});
$("#pr3").click(function () {
    "use strict";
    $(".f3").hide();
    $("li:nth-of-type(3)").removeClass("active");
    $("fieldset:nth-of-type(2)").show();
});
$("#nx3").click(function () {
    "use strict";
    $("fieldset:nth-of-type(3)").hide();
    $("li:nth-of-type(4)").addClass("active");

    $("fieldset:nth-of-type(4)").show();

});
$("#pr4").click(function () {
    "use strict";
    $(".f4").hide();
    $("li:nth-of-type(4)").removeClass("active");

    $("fieldset:nth-of-type(3)").show();
});



//terms button

$("#accept").click(function () {
    "use strict";
    $("#nx2").attr("disabled", !this.checked);
});
