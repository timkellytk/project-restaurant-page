function generateContact() {
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

export default generateContact