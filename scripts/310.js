let n = prompt("Введіть кількість студентів групи", 1);
for(i = 0; i<n; i++){
    let student = prompt("Ім'я студента ", i+1);
    document.write("<p>", student, "</p>"); 
}
document.write("</body>");
document.write("</html>");