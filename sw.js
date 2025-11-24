const date = new Date();
const examdate = new Date("2026-06-15T09:00:00");
const remainingdays = Math.floor((examdate - date)/(1000*60*60*24));
console.log(remainingdays);
self.addEventListener('push',function(e){
    console.log(e);
    var options = {
        body:`${remainingdays} Days Remaining for Exam`,
        icon:'images/example.png',
        vibrate:[100,50,100],
        data:{
            dateOfArrival:Date.now(),
            primaryKey:'2'
        },
        actions:[{
            action:'explore',
            title:'Explore this new world',
            icon:'images/checkmark.png'

        },{action:'close',title:'close',icon:'images/xmark.png'}]
    };
    e.waitUntil(self.registration.showNotification('Hello world',options));
})