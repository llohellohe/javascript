var a = 5;
var b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(s[3]);
  console.log(s[4]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

var s=`Hello ${ a + b } world ${ a * b}`;
//tag`Hello ${ a + b } world ${ a * b}`;

//tag(s)


var sender = '<script>alert("abc")</script>'; // 恶意代码
var message =
  SaferHTML`<p>${sender} has ${sender}sent you a message.</p>`;

function SaferHTML(templateData) {
  var s = templateData[0];
console.log(arguments.length)
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

console.log(message)
