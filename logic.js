// Event Listener for Qualifications Button

document.getElementById('btn1').addEventListener('click', function(){

    // alert("hi");

    var qual = document.createElement('textarea');

    qual.classList.add("qual1");
    qual.setAttribute("rows",5);
    qual.setAttribute("cols",72);

    qual.setAttribute("Placeholder", "Enter Your Qualifications");


    var edu = document.getElementById('education');
    var btn1 = document.getElementById('btndiv');

    edu.insertBefore(qual, btn1);
    console.log(qual);

    
})



document.getElementById('btn2').addEventListener('click',function(){
    var exp=document.createElement('textarea');

    exp.classList.add("exptxt");
    exp.setAttribute("rows",5);
    exp.setAttribute("cols",72);

    exp.setAttribute("Placeholder", "Enter Your Experience");
    

    var experience=document.getElementById('experience');
    var exp1=document.getElementById('add1');

    experience.insertBefore(exp, exp1);
})


document.getElementById('leftbtn_l').addEventListener('click', function(){

    var lan= document.createElement('input');

    lan.classList.add("language");
    lan.setAttribute("placeholder", "Enter Language Here");

    var language = document.getElementById('language');
    var lanbtn= document.getElementById('lanbtn')

    language.insertBefore(lan, lanbtn);
})

document.getElementById('leftbtn_h').addEventListener('click', function(){

    var hob= document.createElement('input');

    hob.classList.add("hobbies");
    hob.setAttribute("placeholder", "Enter Hobbies Here");

    var hobbies = document.getElementById('hobbies');
    var hobbtn= document.getElementById('hobbtn')

    hobbies.insertBefore(hob, hobbtn);
})
// generate CV button



document.getElementById('btn').addEventListener('click',function(){
    
    document.getElementById('input_parent').style.display = "none";
    document.getElementById('button').style.display = "none";

    document.getElementById('template_parent').style.display = "block";


// Personal Information

    // Title

    var title=document.getElementById('title').value;
    
    var ttitle=document.getElementById('ttitle');
    ttitle.innerHTML=title;

    // Name

    var name=document.getElementById('name').value;
    
    var th2name=document.getElementById('th2name');
    var tname=document.getElementById('tname');
    tname.innerHTML=name;
    th2name.innerHTML=name;

    // Email
    var email=document.getElementById('email').value;
    
    var temail=document.getElementById('temail');
    temail.innerHTML=email;
    

    // Contact
    var contact=document.getElementById('contact').value;
    
    var tcontact=document.getElementById('tcontact');
    tcontact.innerHTML=contact;

    // Address
    var address=document.getElementById('address').value;
    
    var taddress=document.getElementById('taddress');
    taddress.innerHTML=address;



    // Social Media Links
    
// facebook
    var facebook=document.getElementById('facebook').value;
    
    var tfacebook=document.getElementById('tfacebook');
    tfacebook.innerHTML=facebook;
// intagram

    var instagram=document.getElementById('instagram').value;
    
    var tinstagram=document.getElementById('tinstagram');
    tinstagram.innerHTML=instagram;
// twitter
    var twitter=document.getElementById('twitter').value;
    
    var ttwitter=document.getElementById('ttwitter');
    ttwitter.innerHTML=twitter;


// language
    var language = document.getElementsByClassName('language');
   let str="";
    for(let e of language){
    str=str + "<li>"  + e.value + "</li>";
    }
    document.getElementById('tlang').innerHTML = str;

// Hobbies
    var hobbies = document.getElementsByClassName('hobbies');
   let  str1="";
    for(let e of hobbies){
    str1=str1 + "<li>"  + e.value + "</li>";
    }
    document.getElementById('thobb').innerHTML = str1;

// ---------------------Right Side of Template---------------------


// Description

    var introduction =document.getElementById('introduction').value;
    var tintroduction =document.getElementById('tintroduction');

    tintroduction.innerHTML= introduction;

// Qualifications


var qual1 = document.getElementsByClassName('qual1');
let  str2="";
 for(let e of qual1){
 str2 = str2 + "<li>"  + e.value + "</li>";
 }
 document.getElementById('tqual').innerHTML = str2;

// Experience

var exptxt = document.getElementsByClassName('exptxt');
let  str3="";
 for(let e of exptxt){
 str3 = str3 + "<li>"  + e.value + "</li>";
 }
 document.getElementById('texp').innerHTML = str3;
})

// Photo

var photo =document.getElementsById('photo').value;
var tphoto =document.getElementsById('tphoto');

tphoto.innerHTML= photo;