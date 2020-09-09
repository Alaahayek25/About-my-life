'use instrict';
function userName(){
var name = prompt('what is your name?');
alert('welcome here ' + name);
}

function major(){
var q1 = prompt('is my major acounting?').toLowerCase();
if (q1 === 'yes' || q1 === 'y') {
    //console.log('correct');
    alert('correct ' + name);

}
 else if (q1 === 'no' || q1 === 'n') {
    //console.log('sorry it\'s wrong');
    alert('sorry it\'s wrong ' + name);
} else {
    alert('wrong input ' + name);
}
}
function company(){
var q2 = prompt('did I work as a manager in acompany?').toLowerCase();
if (q2 == 'yes' || q2 == 'y') {
    //console.log('sorry\worng');
    alert('sorry worng ' + name)
} else if (q2 == 'no' || q2 == 'n') {
    alert('correct ' + name);
}
else {
    alert('wrong input ' + name);
}
}
var q3 = prompt('did I work for restaurants?').toLowerCase();
if (q3 == 'yes' || q3 == 'y') {

    //console.log('correct');
    alert('correct ' + name);
} else if (q3 == 'no' || q3 == 'n') {

    //console.log('sorry\worng');
    alert('sorry worng ' + name);
} else {
    alert('wrong input ' + name);
}

var q4 = prompt('is I want travel io Canada?').toLowerCase();
if (q4 == 'yes' || q4 == 'y') {
    //console.log('correct');
    alert('correct ' + name);
} else if (q4 == 'no' || q4 == 'n') {
    alert('sorry worng ' + name);
}
else {
    alert('wrong input ' + name);
}
var q5 = prompt('I worked in sales field?').toUpperCase();
if (q5 == 'YES' || q5 == 'Y') {
    // console.log('correct')
    alert('correct ' + name);
} else if (q5 == 'NO' || q5 == 'N') {
    //console.log('incorrect');
    alert('incorrect ' + name);
} else {
    alert('wrong input ' + name);
}
var mynumber = 4
var flag = false
for (var i = 0; i < 4; i++) {
    var usernumber = Number(prompt('can you guess the correct number between 1-10, pay attention that you have four chances.'))
    if (mynumber == usernumber) {
        flag = true
        //console.log('correct answer');
        alert('correct answer');
        count++
        break;
    } else if (mynumber < usernumber) {
        alert('too high,please try less than ' + username);
    } else if (mynumber > usernumber) {
        alert('too low,please try more than ' + username);
    } else {
        alert('please try again');
    }
}
if (!flag) {
    alert('the correct answer is ' + mynumber);
}
var Playgrounds = ['Camp Nou', 'the Union', 'Rome', 'Al-Hashemi', 'October'];
var finish = false;
var m = 0;
while (m < 6) {
    var ridable = prompt('Which stadium Barcelona club?').toLowerCase();
    for (var k = 0; k < Playgrounds.length; k++) {
        if (ridable == Playgrounds[k]) {
            alert('correct answer');
            count++
            finish = true;
            break;
        }
    }
    if (finish)
        break;
    alert(' u have ' + 5 - m + ' reamin')
    m++;
}
alert('your score is ' + count + '/7')
