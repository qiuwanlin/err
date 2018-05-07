var APP_ID = 'a2V3I524SKG86fgyw09QHXIf-gzGzoHsz';
var APP_KEY = '7H3Igkkto2kxAbmwArUHMjxc';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('message');
query.find().then(function (m) {
    let array = m.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        messagelist.appendChild(li)
    })
}, function (error) { })

let myform = document.querySelector('#postmessage')
myform.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myform.querySelector('input[name=content]').value
    let name = myform.querySelector('input[name=name]').value//删掉这一行
    var message = AV.Object.extend('message');
    var m = new message();
    m.save({
        'name': name,//删掉这一行
        'content': content
    }).then(function (object) {
        window.location.reload()
    })
})