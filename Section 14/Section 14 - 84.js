// var name = "Andre";
// console.log(name.slice(1,4));


// Cut tweet down to 10 characters

var tweet = prompt("Your message!");
var tweetCount = tweet.length;
var tweetLength = tweet.slice(0,10);

/* alert("You have written " + tweetCount + " characters, you have  +(20 - tweetCount) + " characters remaining.");
*/
// alert("Your tweet lenght is " + tweetCount + " characters.");
alert(tweetLength);

// or
alert(prompt("Your Tweet!").slice(0,10));
