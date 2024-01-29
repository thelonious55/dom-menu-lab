// this doesnt work and I have no idea why

// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  

const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr')

const topMenuEl = document.querySelector('#top-menu')

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

menuLinks.forEach(function(link){
    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', link.href)
    linkEl.innerText = link.text
    topMenuEl.appendChild(linkEl)
})

let subMenuEl = document.querySelector('#sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

const topMenuLinks = document.querySelector('#top-menu a')

let showingSubMenu = false

topMenuEl.addEventListener('click', function(n){
  n.preventDefault();
  const link = n.target;
  if (link.tagName !== 'a') return;
  console.log(link.textContent);
  if (link.tagName.contains('active')) {
    link.classList.remove('active')
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  topMenuLinks.forEach(function(link) {
    element.classList.remove('active')
  })
  link.classList.add('active')
 
 //this part is copied from the cheat sheet my brain isn't cooperating on this one
  const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent
  })
  showingSubMenu = 'subLinks' in linkData
  //
  if (showingSubMenu = true) {
    buildSubMenu(linkData.subLinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0'
    mainEl.innerHTML = '<h1>about</h1>'
  }
})

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ''
  subLinks.forEach(function(link) {
    const linkEl = document.createElement('a')
    linkEl.setAttribute('href', link.href)
    linkEl.textContent = link.text
    subMenuEl.appendChild(linkEl)
  })
}

subMenuEl.addEventListener('click', function(n) {
  n.preventDefault()
  const link = n.target
  if (link.tagName !== 'a') return
  console.log(link.textContent)
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active')
  })
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`
})