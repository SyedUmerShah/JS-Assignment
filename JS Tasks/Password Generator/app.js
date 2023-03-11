var alphS = "abcdefghijklmnopqrstuvwxyz"
var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "01234567890"
var sym = "~!@#$%^&*,."
var password = ""
var random1 = Math.random()*25
var round1 = Math.floor(random1)
var random2 = Math.random()*25
var round2 = Math.floor(random2)
var random3 = Math.random()*25
var round3 = Math.floor(random3)
var random4 = Math.random()*25
var round4 = Math.floor(random4)
var random5 = Math.random()*25
var round5 = Math.floor(random5)
var random6 = Math.random()*25
var round6 = Math.floor(random6)
var random7 = Math.random()*9
var round7 = Math.floor(random7)
var random8 = Math.random()*9
var round8 = Math.floor(random8)
var random9 = Math.random()*10
var round9 = Math.floor(random9)
var random10 = Math.random()*10
var round10 = Math.floor(random10)
password = alphS[round1]+alphC[round2]+num[round7]+sym[round9]+alphC[round3]+alphS[4]+alphC[round5]+num[round8]+sym[round10]+alphS[round6]
document.write("<center>" + "<h1>"+ "YOUR 10 DIGITS PASSWORD IS:"+"</h1>" +"<h2>" + password + "</h2>" +"<h3>" + "Reload To Reset Your Password." +"</h3>" +"</center>") 












































