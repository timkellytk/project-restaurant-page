// Home
function home() {
    let content = document.querySelector('#content')

    let section = document.createElement('div')
    section.classList.add('home')
    section.setAttribute('id','home')

    let h1 = document.createElement('h1')
    h1.classList.add('hero-heading')
    h1.textContent =  'The Kelly\'s at Glenrowan'
    section.appendChild(h1)

    let h3 = document.createElement('h3')
    h3.classList.add('hero-subheading')
    h3.textContent =  'Established in 1880'
    section.appendChild(h3)

    let img = document.createElement('img')
    img.src = "images/petr-sevcovic-fyQr1T3GE34-unsplash.jpg"
    section.appendChild(img)

    content.appendChild(section)
}

// Menu
function menu () {
    let content = document.querySelector('#content')

    let section = document.createElement('div')
    section.classList.add('content-box')
    section.setAttribute('id','menu')

    let grid = document.createElement('div')
    grid.classList.add('w-layout-grid')
    grid.classList.add('grid')
    section.appendChild(grid)

    let menuCategories = (name) => {
        let category = document.createElement('div')
        category.classList.add('menu-category')
        category.setAttribute('id', name)
        grid.appendChild(category)

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        let h1 = document.createElement('h1')
        h1.textContent = capitalizeFirstLetter(name)
        category.appendChild(h1)

        return category
    }

    let starters = menuCategories('starters')
    let mains = menuCategories('mains')
    let desserts = menuCategories('desserts')

    const menuItems = (name, price, category) => {
        let item = document.createElement('div')
        item.classList.add('menu-item')

        let itemName = document.createElement('div')
        itemName.textContent = name
        item.appendChild(itemName)

        let itemPrice = document.createElement('div')
        itemPrice.textContent = price
        item.appendChild(itemPrice)

        category.appendChild(item)
    };
    
    menuItems('Fries', '$4', starters)
    menuItems('Beef loaded fries', '$6', starters)
    menuItems('Veggie loaded fries', '$6', starters)
    menuItems('Chicken nuggets', '$6', starters)
    menuItems('Beef burger', '$12', mains)
    menuItems('Chicken burger', '$12', mains)
    menuItems('Mushroom burger', '$12', mains)
    menuItems('Vegan burger', '$12', mains)
    menuItems('Apple crumble', '$7', desserts)
    menuItems('Lemon curd tart', '$7', desserts)
    menuItems('Tiramisu', '$7', desserts)
    menuItems('Deep fried icecream', '$7', desserts)

    content.appendChild(section)
}

// Contact
function contact() {
    let content = document.querySelector('#content')

    let section = document.createElement('div')
    section.classList.add('content-box')

    let h1 = document.createElement('h1')
    h1.textContent = 'Get in touch'
    section.appendChild(h1)

    let contactItem = (name, link, anchorText) => {
        let div = document.createElement('div')
        div.classList.add('contact-items')
        div.textContent = `${name}:`

        let a = document.createElement('a')
        a.classList.add('contact-link')
        a.textContent = anchorText
        a.href = link
        div.appendChild(a)

        section.appendChild(div)
    }

    contactItem('Email', 'mailto:timpkelly1@gmail.com', 'timpkelly1@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/tim-patrick-kelly/', 'linkedin.com/in/tim-patrick-kelly')
    contactItem('Github', 'https://github.com/timkellytk', 'timkellytk')

    content.appendChild(section)
}

export {home, menu, contact}