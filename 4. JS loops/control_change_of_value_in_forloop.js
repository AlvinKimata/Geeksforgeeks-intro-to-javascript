const subjects = ["Maths", "Science", "Polity", "History"];

var i = 0;
var len = subjects.length;
var gfg = "";

for (; i < len; ){
    gfg += subjects[i + ""] + "<br>";
    console.log(gfg)
    i++;
}

