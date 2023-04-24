function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm =  now.getAmPm();
   

    if (month.toString().length == 1) {
            month = '0' + month;
    }
    if (day.toString().length == 1) {
            day = '0' + day;
    }
    if (hour.toString().length == 1) {
            hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
            minute = '0' + minute;
    }
    if (second.toString().length == 1) {
            second = '0' + second;
    }
    if (ampm.toString().length ==1){
        hour >= 12? 'pm':'am';
    }
    var dateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second + ':'+ ampm;
    return dateTime;
    hour = hours %12 ;
}

// example usage: realtime clock
setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 1000);