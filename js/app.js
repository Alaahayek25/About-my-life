'use instrict';
var name=prompt('what is your name?');
alert('welcome here '+name);
var q1 = prompt('is my major acounting?').toLowerCase();
if (q1 == 'yes' || q1 == 'y') {
    //console.log('correct');
    alert('correct '+name);

} else if (q1 == 'no' || q1 == 'n') {
    //console.log('sorry it\'s wrong');
    alert('sorry it\'s wrong '+name);
} else {
    alert('wrong input '+name);
}
var q2 = prompt('did I work as a manager in acompany?').toLowerCase();
if (q2=='yes' || q2=='y') {
    //console.log('sorry\worng');
    alert('sorry worng '+name)
} else if (q2=='no' || q2=='n') {
    alert('correct '+name);
}
else {
    alert('wrong input '+name);
}
var q3 = prompt('did I work for restaurants?').toLowerCase();
if (q3=='yes' || q3=='y'){

//console.log('correct');
alert('correct '+name);
}else if (q3=='no' || q3 == 'n') {

    //console.log('sorry\worng');
    alert('sorry worng '+name);
} else {
    alert('wrong input '+name);
}
var q4 =prompt('is I want travel io Canada?').toLowerCase();
if ( q4=='yes'||q4=='y'){
    //console.log('correct');
    alert('correct '+name);
} else if (q4=='no'||q4=='n'){
alert('sorry worng '+name);}
else{ 
    alert('wrong input '+name);
}
var q5 =prompt('I worked in sales field?').toUpperCase();
if(q5=='YES'||q5=='Y'){
   // console.log('correct')
   alert('correct '+name);
}else if (q5=='NO'||q5=='N'){
    //console.log('incorrect');
    alert('incorrect '+name );
}else {
    alert('wrong input '+name);
}


