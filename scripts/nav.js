const currentPath = window.location.pathname

const nav = document.getElementById("navbar")
const navItens = nav.getElementsByTagName("a")

for (i = 0; i < navItens.length; i++) {
  if (navItens[i].getAttribute("href") === currentPath)
    navItens[i].className += " bg-secondary-blue rounded-2 text-center"
}
