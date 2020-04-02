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
let menu = (() => {
    let _section = document.createElement('div')
    _section.classList.add('content-box')
    _section.setAttribute('id','menu')

    let _grid = document.createElement('div')
    _grid.classList.add('w-layout-grid')
    _grid.classList.add('grid')
    _section.appendChild(_grid)

    let menuCategories = (name) => {
        let category = document.createElement('div')
        category.classList.add('menu-category')
        category.setAttribute('id', name)
        _grid.appendChild(category)

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        let h1 = document.createElement('h1')
        h1.textContent = capitalizeFirstLetter(name)
        category.appendChild(h1)

        return category
    }

    let _starters = menuCategories('starters')
    let _mains = menuCategories('mains')
    let _desserts = menuCategories('desserts')

    const menuItems = (name, price, category) => {
        let _item = document.createElement('div')
        _item.classList.add('menu-item')

        let _name = document.createElement('div')
        _name.textContent = name
        _item.appendChild(_name)

        let _price = document.createElement('div')
        _price.textContent = price
        _item.appendChild(_price)

        category.appendChild(_item)
    };
    
    menuItems('Fries', '$4', _starters)
    menuItems('Beef loaded fries', '$6', _starters)
    menuItems('Veggie loaded fries', '$6', _starters)
    menuItems('Chicken nuggets', '$6', _starters)
    menuItems('Beef burger', '$12', _mains)
    menuItems('Chicken burger', '$12', _mains)
    menuItems('Mushroom burger', '$12', _mains)
    menuItems('Vegan burger', '$12', _mains)
    menuItems('Apple crumble', '$7', _desserts)
    menuItems('Lemon curd tart', '$7', _desserts)
    menuItems('Tiramisu', '$7', _desserts)
    menuItems('Deep fried icecream', '$7', _desserts)

    content.appendChild(_section)
})();

// Contact
let contact = (() => {
    let _section = document.createElement('div')
    _section.classList.add('content-box')

    let _h1 = document.createElement('h1')
    _h1.textContent = 'Get in touch'
    _section.appendChild(_h1)

    let contactItem = (name, link, anchorText) => {
        let _div = document.createElement('div')
        _div.classList.add('contact-items')
        _div.textContent = `${name}:`

        let _a = document.createElement('a')
        _a.classList.add('contact-link')
        _a.textContent = anchorText
        _a.href = link
        _div.appendChild(_a)

        _section.appendChild(_div)
    }

    contactItem('Email', 'mailto:timpkelly1@gmail.com', 'timpkelly1@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/tim-patrick-kelly/', 'linkedin.com/in/tim-patrick-kelly')
    contactItem('Github', 'https://github.com/timkellytk', 'timkellytk')

    content.appendChild(_section)
})();