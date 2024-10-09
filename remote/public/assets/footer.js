function createFooter() {
  const footer = document.createElement('footer')
  const footerLinksList = document.createElement('ul')
  const links = {
    EA: 'https://ea.com',
    apple: 'https://apple.com',
    amazon: 'https://amazon.com',
    netflix: 'https://neftflix.com',
  }
  for (let k in links) {
    const linkItem = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.textContent = k
    anchor.setAttribute('href', links[k])
    linkItem.appendChild(anchor)
    footerLinksList.appendChild(linkItem)
  }
  footer.appendChild(footerLinksList)
  return footer
}
