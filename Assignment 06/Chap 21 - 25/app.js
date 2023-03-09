// Q1
// var firstName = prompt("Enter First Name")
// var LastName = prompt("Enter Last Name")
// var FullName = firstName + " " + LastName
// alert("Welcome " + FullName)



// Q2
// var FavComp = prompt("Enter Your Favourite Smart Phone Company Name")
// document.write("My Favourite phone IS " + FavComp +"<br>" + "Length Of String:" + FavComp.length)


// Q3
// var count = "pakistani"
// document.write("String:" + " " + count + "<br>" + "Index Of 'n':" + count.indexOf("n"))


// Q4
// var count = "Hello World"
// document.write("String:" + " " + count + "<br>" + "Index Of 'n':" + count.lastIndexOf("l"))


// Q5
// var Count = "Pakistani"
// document.write("String: " + Count + "<br>" + 
// "Character At Index 3:" + Count[3])



// Q6
// var firstName = prompt("Enter First Name")
// var LastName = prompt("Enter Last Name")
// alert("Welcome " + firstName + " " + LastName)


// Q7
// var cit = "Hyderabad"
// var replace =cit.replace("Hyder","Islam") 
// document.write("City:" + cit + "<br>" + "After replacement:" + replace )


var message = "Ali and Sami are best friends. They play cricket and football together.";

var message2 = message.replace("the","&")
document.write(
    message + "<br>" + message2
)