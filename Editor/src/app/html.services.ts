
export class HtmlService{

  createMenu(element):any{

    let a = document.createElement('a')
    a.innerText = 'Logo'
    a.className = 'brand-logo'

    let nav = document.createElement('nav')
    nav.appendChild(a)


    element.tag.setAttribute('class', '')
    element.tag.appendChild(nav)
    return element
  }

  createText(element):any{

    let p = document.createElement('p')
    p.innerText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
    element.tag.setAttribute('text', 'justify')
    element.tag.appendChild(p)
    return element
  }

  createLocation(){
    return ''
  }

  createGraf(){
    return ''
  }

  createFrom(){
    return ''
  }

  createFile(element):any{

    // let file = document.createElement('input')
    // file.setAttribute('type', 'file')

    // let image = document.createElement('image')
    // image.setAttribute('xlink:href', 'https://placehold.it/160x90')

    // let img = document.createElement('svg')
    // img.setAttribute('viewBox', '0 0 160 90')
    // img.appendChild(image)

    let img = document.createElement('img')
    img.setAttribute('src', 'assets/img/160x90.png')
    img.setAttribute('class', 'responsive-img')

    element.tag.appendChild(img)
    element.tag.setAttribute('class', 'grid')
    element.tag.setAttribute('gl', '6')

    return element
  }

  component(element):any{

    element.tag.setAttribute('class', 'grid')
    element.tag.setAttribute('gl', '24')
    switch(element.component){
      case 'nav':
          this.createMenu(element)
        break
      case 'text':
          this.createText(element)
        break
      case 'file':
          this.createFile(element)
        break
      default:
        console.log('componente no configurado: ', element.component)
    }

    return element.tag
  }
}
