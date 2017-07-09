function sendNotification (msg, body) {

    if (body) {
        var options = {
            body: body
        }
    }
    
    var notification = Notification || mozNotification || webkitNotification;

    

    if (typeof notification === 'undefined') {
        alert('notificaciones no soportadas');
    } else {
        notification.requestPermission(function(permission) {
            if (Notification.permission === 'granted') {
                new Notification(msg, options);
            }
        });
    }
}