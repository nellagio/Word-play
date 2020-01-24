$(document).ready(function (event) {
  $("form#word-form").submit(function (event) {
    event.preventDefault();
    var result = [];
    var sentence = $("input#word").val().split('');
    for (i = 0; i <= sentence.length; i++) {
      var vowels = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
      if (vowels.includes(sentence[i])) {
        result.push("-");
      } else {
        result.push(sentence[i]);
      }
    }
    $("#output").append(result);
    // console.log(userInput);
  });
});


