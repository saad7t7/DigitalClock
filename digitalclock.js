
function showtime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h=  h < 10  ?  "0" +  h  : h;
    m=  m < 10  ?  "0" +  m  : m;
    s=  s < 10  ?  "0" +  s  : s;
    let session="AM";
    if(h>=12 && h>12)
    {
        h=h-12;
        session="PM";
    }
    let time = h +" "+":" +" "+m+" "+ ":" +" "+s+" "+session;
    document.getElementsByTagName('span')[0].innerText = time;
    setTimeout(showtime, 1000);
}
