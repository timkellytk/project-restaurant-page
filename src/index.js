// Content
let content = document.querySelector('#content')

// Navbar
let nav = (() => {
    let _section = document.createElement('div')
    _section.classList.add('nav')

    let _homeBtn = document.createElement('div')
    _homeBtn.classList.add('menu-btn')
    _homeBtn.setAttribute('id','home-btn')
    _homeBtn.textContent = 'Home'
    _section.appendChild(_homeBtn)

    let _menuBtn = document.createElement('div')
    _menuBtn.classList.add('menu-btn')
    _menuBtn.setAttribute('id','menu-btn')
    _menuBtn.textContent = 'Menu'
    _section.appendChild(_menuBtn)

    let contactBtn = document.createElement('div')
    contactBtn.classList.add('menu-btn')
    contactBtn.setAttribute('id','contact-btn')
    contactBtn.textContent = 'Menu'
    _section.appendChild(contactBtn)

    content.appendChild(_section)
})()

// Home
let home = (() => {
    let _section = document.createElement('div')
    _section.classList.add('home')
    _section.setAttribute('id','home')

    let _h1 = document.createElement('h1')
    _h1.classList.add('hero-heading')
    _h1.textContent =  'The Kelly\'s at Glenrowan'
    _section.appendChild(_h1)

    let _h3 = document.createElement('h3')
    _h3.classList.add('hero-subheading')
    _h3.textContent =  'Established in 1880'
    _section.appendChild(_h3)

    let _img = document.createElement('img')
    _img.src = "images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg"
    _section.appendChild(_img)

    content.appendChild(_section)
})();

// Menu

