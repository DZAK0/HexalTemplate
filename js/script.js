$('button').on("click", function () {
    var input = $("input[type=text]").val();
    var email = $("input[type=email]").val();
    var TextArea = $("textarea").val();

    if (TextArea.length > 60) {
        alert("Your message is too long! Maximum number of characters is 60")
    }

    if ((!input) && (!email)) {
        alert("Please enter your name and email!")
    } else if (!input) {
        alert("Please enter your name!")
    } else if (!email) {
        alert("Please enter your name!")
    }


})