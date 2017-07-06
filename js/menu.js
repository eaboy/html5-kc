var navbarItems = document.getElementsByClassName('navbar-item');

for ( var i = 0 ; i < navbarItems.length ; i++) {
    navbarItems[i].addEventListener('click', function(event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if (sectionToGo.length === 2 ) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    })
}

function getElementByIdAndScroll (id) {
    
    var elem;
    
    if (id === '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(id);
    }
    console.log(elem);
    scrollToElement(elem);
}

function scrollToElement (element) {
    
    var jump = element.getBoundingClientRect().top * 0.3;

    document.body.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, 80)
    }
}