$(document).ready(function () {

    var hex = 0;
    var hue;
    var sat = 100;
    var lit;

    $("#main").on("mousemove", function () {
        var mainWidth = $("#main").innerWidth();
        var mainHeight = $("#main").innerHeight();

        console.log("width: " + mainWidth);
        console.log("height: " + mainHeight);
        hue = event.offsetX / (mainWidth / 360);
        hue = parseInt(hue);

        var x = window.pageYOffset;

        var lastc = document.getElementById("colorslist").lastChild;

        console.log(mainHeight);
        lit = (event.offsetY) / (mainHeight / 100);



        lit = parseInt(lit);
        $("#main").css("background", "hsl(" + hue + "," + sat + "%," + lit + "%)");
        var bcolor = document.getElementById("main").style.backgroundColor;

        var a = bcolor.split("(")[1].split(")")[0];
        a = a.split(",");
        a[0] = parseInt(a[0]);
        a[1] = parseInt(a[1]);
        a[2] = parseInt(a[2]);
        var colorString = bcolor;
        var colorsOnly = colorString.split(")");
        var colorsOnly = colorString[0].split("(");
        1
        var colorsOnly = colorString[1].split(",");
        var r = parseInt(colorsOnly[0]);
        var g = parseInt(colorsOnly[1]);
        var b = parseInt(colorsOnly[2]);

        var red = returnHex(a[0]);

        var green = returnHex(a[1]);
        var blue = returnHex(a[2]);
        if (red.length == 1) {
            red = "0" + red;
        }
        if (green.length == 1) {
            green = "0" + green;
        }
        if (blue.length == 1) {
            blue = "0" + blue;
        }

        hex = "#" + red + green + blue;
        document.getElementById("color").innerHTML = hex;
    });


    function returnHex(num) {

        if (num == null) return "00";
        num = num.length < 2 ? "0" + num : num
        return num.toString(16);
    }



    $("#main").click(function (e) {
        var SliceLength = $('.main').length;
        var palette = SliceLength + 1;
        var bgcolor = document.getElementById("main").style.backgroundColor;
        var coll = document.getElementById("color").innerHTML;

        console.log("SliceLength = " + SliceLength);
        $('<li class=" inner float-left h-100"><div class="d-flex align-items-center justify-content-center h-100"><div class="info p-4"><h2 class="btn">' + coll + '</h2></div></div></li>').insertBefore(document.getElementById('main'));
        document.getElementById('main').previousElementSibling.style.background = bgcolor;

    });

    $(document).scroll(function () {
        var mainHeight = $("nav").innerHeight();
        console.log(mainHeight);
        console.log($(window).scrollTop());
        sat = $(window).scrollTop() / 100;
        $("#main").css("background", "hsl(" + hue + "," + sat + "%," + lit + "%)");

        var bcolor = document.getElementById("main").style.backgroundColor;

        var a = bcolor.split("(")[1].split(")")[0];
        a = a.split(",");
        a[0] = parseInt(a[0]);
        a[1] = parseInt(a[1]);
        a[2] = parseInt(a[2]);
        var colorString = bcolor;
        var colorsOnly = colorString.split(")");
        var colorsOnly = colorString[0].split("(");
        1
        var colorsOnly = colorString[1].split(",");
        var r = parseInt(colorsOnly[0]);
        var g = parseInt(colorsOnly[1]);
        var b = parseInt(colorsOnly[2]);

        var red = returnHex(a[0]);

        var green = returnHex(a[1]);
        var blue = returnHex(a[2]);
        if (red.length == 1) {
            red = "0" + red;
        }
        if (green.length == 1) {
            green = "0" + green;
        }
        if (blue.length == 1) {
            blue = "0" + blue;
        }

        var hex = "#" + red + green + blue;
        document.getElementById("color").innerHTML = hex;
    });

});
