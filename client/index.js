// $.fn.fullpage
// $(document).ready(() => {
// })
let level = 0;
let slide = 0;

$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1aac9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        controlArrows: true,
        menu: '#menu',
        scrollingSpeed: 1000,
        loopHorizontal: false,
        onLeave: (origin, destination)=>{
            console.log('LEVEL MOVING FROM', origin, 'TO', destination)
            level = destination
        },
        onSlideLeave: (section, origin, destination)=>{
            console.log('SLIDER MOVING FROM', origin, 'TO', destination)
            slide = destination;
            console.log('s', slide, 'l', level)
        }
    });
})
