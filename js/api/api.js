//API NOTIFICATION

//Access to the component and storage it in to a varible
const button = document.querySelector('#button');

//Add event to the button
button.addEventListener('click', () => {
    Notification.requestPermission()
        .then(result => console.log(result))
})

if (Notification.permission == 'granted') {
    new Notification('Notification', {
        icon: 'img/back.png',
        body: 'Example of notification'
    })
}