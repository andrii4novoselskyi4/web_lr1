let student= prompt("Ім'я:")
document.write("<p>", student, "</p>") 

while(student != null){
    student = prompt("Ім'я:")
    if (student != null){
        document.write("<p>", student, "</p>")
    }
}
document.write("</body>")
document.write("</html>")