var whatHaveToDo = [
    "রাত ৮ টা বাজে মডিউল আনলক করো",
    "ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো",
    "ভিডিও দেখতে দেখতে নোটস নাও ",
    "মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ",
    "কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো ",]


// for_loop 
document.write("for loop");
document.write("<br>");
for (var i = 0; i < whatHaveToDo.length; i++ ){
    document.write(whatHaveToDo[i] + "<br>");
    
}


document.write("<br>");
document.write("<br>");
document.write("for loop reverse way");
document.write("<br>");

// for_loop_reverse

for (var i = whatHaveToDo.length - 1; i >= 0; i--){
    document.write(whatHaveToDo[i] + "<br>")
}


// while loop 

document.write("<br>");
document.write("<br>");
document.write("while loop");
document.write("<br>");

var j = 0;
while (j < whatHaveToDo.length) {
    document.write(whatHaveToDo[j]);
    j++;
    document.write("<br>");
    
}


// while loop reverse
document.write("<br>");
document.write("<br>");
document.write("while loop reverse");
document.write("<br>");

var j = whatHaveToDo.length - 1;
while (j >= 0) {
    document.write(whatHaveToDo[j]);
    j--;
    document.write("<br>");
}