function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let date=dateTime.getDate();
    let month=dateTime.getMonth();
    let year=dateTime.getFullYear();
    let day=dateTime.getDay();
    if (hr > 12) {
      hr = hr - 12;
      document.getElementById("ampm").innerHTML = "PM";
    }
    document.getElementById("hour").innerHTML=padZero(hr);
    document.getElementById("min").innerHTML=padZero(min);
    document.getElementById("sec").innerHTML=padZero(sec);
    
    document.getElementById("date").innerHTML=padZero(date);
    document.getElementById("month").innerHTML=padZero(month+1);
    document.getElementById("year").innerHTML=year;
    document.getElementById("day").innerHTML=setDay(day);
}
function padZero(num){
    return (num<10)?"0"+num:num;
}
function setDay(day){
    switch (day) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Thusday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
    }
}
setInterval(displayTime,500);