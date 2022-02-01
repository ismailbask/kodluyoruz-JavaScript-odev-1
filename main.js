const myNameField = document.getElementById("myName");
const clockFiled = document.getElementById("myClock");
let fullName = prompt("Lütfen adınızı giriniz!");
myNameField.innerHTML = fullName;
window.onload = startTime;
function startTime()
{
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDay();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    h=checkTime(h);
    m=checkTime(m);
    s = checkTime(s);
    console.log(today);
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

        clockFiled.innerHTML=year+"-"+day+""+months[month]+"-"+days[day]+"-"+ h+":"+m+":"+s;
        t=setTimeout('startTime()',1000);
    
 
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
