function time(){
    let d = new Date();
    let hr = d.getHours();
    let mi = d.getMinutes();
    let se = d.getSeconds();
  
    document.getElementById("min").innerHTML = mi 
    document.getElementById("sec").innerHTML = se 
    if(hr > 12){
        hr = hr - 12
    document.getElementById("ap").innerHTML = "PM"
    }else{
    document.getElementById("ap").innerHTML = "AM"
    }
    document.getElementById("hrs").innerHTML = hr 
    if(hr < 10){
        document.getElementById("hrs").innerText = '0' + hr
    }
    else{
    document.getElementById("hrs").innerHTML = hr 
    }
    if(mi < 10){
        document.getElementById("min").innerText = '0' + mi
    }
    else{
    document.getElementById("min").innerHTML = mi 
    }

   
  } setInterval(time,1000)



  function settimingsforalaram(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="display-block";


    document.getElementById("container-change").appendChild(container);

    var newvar = document.getElementById("time-abc");
    var value = newvar.options[newvar.selectedIndex].text;
    document.getElementById("item-a").innerHTML="Wake up Time : " + value;


    var newvar = document.getElementById("time-def");
    var value = newvar.options[newvar.selectedIndex].text;
    document.getElementById("item-b").innerHTML="Lunch Time : " + value;

    var newvar = document.getElementById("time-ghi");
    var value = newvar.options[newvar.selectedIndex].text;
    document.getElementById("item-c").innerHTML="Nap Time : " + value;

    var newvar = document.getElementById("time-jkl");
    var value = newvar.options[newvar.selectedIndex].text;
    document.getElementById("item-d").innerHTML="Night Time : " + value;

}
function alarmclick() {
    var set1 = document.getElementById("time-abc").value;
    var set2 = document.getElementById("time-def").value;
    var set3 = document.getElementById("time-ghi").value;
    var set4 = document.getElementById("time-jkl").value;

    var livehour = new Date().getHours();

    if(set1 == livehour){
        document.getElementById("first-text").innerText="GOOD MORNING!! WAKE UP!!";
        document.getElementById("last-img").style.backgroundImage="url(./assets/Goodmornig.png)";
    }
    else if(set2 == livehour){
        document.getElementById("first-text").innerText="GOOD AFTERNOON !!";
        document.getElementById("last-img").style.backgroundImage="url(./assets/Group_lunch.png)"
    }
    else if(set3 == livehour){
        document.getElementById("first-text").innerText="GOOD EVENING!! ";
        document.getElementById("last-img").style.backgroundImage="url(./assets/lunch_image.png)";
    }

    else if(set4 == livehour){
        document.getElementById("first-text").innerText="GOOD NIGHT !!";
        document.getElementById("last-img").style.backgroundImage="url(./assets/goodnight_image.png)";
        
    }

    if(livehour < 12){
        document.getElementById("second-text").innerText="GRAB SOME HEALTHY BREAKEFAST";

    }
    if( livehour >= 12 && livehour < 18 ){
        document.getElementById("second-text").innerText="LETS HAVE SOME LUNCH!!";

    }
    if( livehour >= 18 && livehour < 22){
        document.getElementById("second-text").innerText="STOP YAWNING,LETS HAVE SOME TEA!! IT'S JUST EVENING!!";
    }
    if( livehour >= 22 && livehour < 5){
        document.getElementById("second-text").innerText="CLOSE YOUR EYES AND GO TO SLEEP!!";

    }
    settimingsforalaram();
}
alarmclick();