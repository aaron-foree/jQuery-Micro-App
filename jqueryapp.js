$("#txtnum").keypress(function (e) {

    if (e.which < 48 || e.which > 57) {
        $("#error").html("Please enter only number number");
        return false;
    }
});
$("#check").click(function () {
    var number = parseInt($("#txtnum").val());
    var res = 0;
    for (var i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            res++;
            break;
        }
    }

    if (res == 0) {
        $("#error").html("Entered number is a prime number");
    } else {
        $("#error").html("Entered number is not a prime number");
        return false;
    }
});
