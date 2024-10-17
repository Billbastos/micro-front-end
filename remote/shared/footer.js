import { getYear } from './utils.js'

export function createFooter() {
  const footer = document.createElement('footer')
  const codeElement = document.createElement('code')
  codeElement.textContent = `Static footer ${getYear()}`
  const footerLinksList = document.createElement('ul')
  const links = {
    'Electronic Arts': 'https://ea.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  }
  for (let k in links) {
    const linkItem = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.textContent = k
    anchor.setAttribute('href', links[k])
    linkItem.appendChild(anchor)
    footerLinksList.appendChild(linkItem)
  }
  footer.appendChild(codeElement)
  footer.appendChild(footerLinksList)
  return footer
}

// Make createFooter globally available
if (window) {
  window.createFooter = createFooter
}
