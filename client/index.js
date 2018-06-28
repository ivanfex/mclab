// $.fn.fullpage
// $(document).ready(() => {
// })
let level = 0;
let slide = 0;

$(document).ready(function() {
    let menuItems = document.getElementsByClassName('menuItem');
    const clearBorder = () => Array.prototype.forEach.call(menuItems, (item) => {
        console.log('clearing!')
        item.classList.remove('menuItemBorder')
        console.log(item);
    })
    // menuItems[0].dispatchEvent(new Event('click'))
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
            clearBorder()
            if(!menuItems[level - 1].classList.contains('menuItemBorder')) menuItems[level - 1].dispatchEvent(new Event('click'))
        },
        onSlideLeave: (section, origin, destination)=>{
            console.log('SLIDER MOVING FROM', origin, 'TO', destination)
            let items = Array.prototype.slice.call(menuItems, 0);
            slide = destination;
            console.log('s', slide, 'l', level)
            console.log(items)
        }
    });

    Array.prototype.forEach.call(menuItems, (item => {
        item.addEventListener('click', (ev) => {
            clearBorder();
            if(!ev.target.classList.contains('menuItemBorder')) ev.target.classList.add('menuItemBorder');
        })
    }))
})

