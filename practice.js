






var add_hours=document.getElementById('Hour')
var add_mins=document.getElementById('Mins')
var add_secs=document.getElementById('sec')
var add_ampm=document.getElementById('am_pm')

function add_time() {
    let My_time = new Date()
let my_hours =My_time.getHours()
let my_min =My_time.getMinutes()
let my_sec =My_time.getSeconds()

if (my_min<10) {

    my_min= "0"+ my_min
    
} else {
    my_min=my_min
}

if (my_hours>=12 ) {
        ap_pm="PM"

    my_hours= my_hours-12

    my_hours ="0"+my_hours

}

else{
            ap_pm="AM"
}
if (my_sec<10) {
    my_sec="0"+my_sec
    
}
   add_hours.innerHTML=my_hours
   add_mins.innerHTML=my_min
   add_secs.innerText=my_sec
   console.log(my_sec);
   add_ampm.innerHTML=ap_pm
}


add_time()
setInterval(add_time,1000)

