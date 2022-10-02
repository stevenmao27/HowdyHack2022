class EventItem {
    constructor(title = "Empty Title", desc = "Empty Description", date = "202210011200", loc = [0, 0], img = "") {
        this.title = title
        this.desc = desc
        this.date = date
        this.loc = loc
        this.img = img
    }
}
//let xx = new EventItem("title here", "some desscription", "2033242", [99, 88], "https://cdn.mos.cms.futurecdn.net/y9siWhBdEnkwL9HhGakpQK.jpg")
const events = []
const defaultCardpostfix = 'onclick="renderEvent(this.id)"><div class="card"><div class="card-image"><figure class="imageis-2by1"><img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-web-gray-solid-color-background.jpg" alt="Placeholderimage"></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="titleis-4">Empty Title</p><p class="subtitleis-6">Empty Description</p></div></div><br><time datetime="2016-1-1">July 4th 1776</time></div></div></div></a>'

const defaultCard = '<a id="size()" onclick="renderEvent(this.id)"><div class="card"><div class="card-image"><figure class="imageis-2by1"><img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-web-gray-solid-color-background.jpg" alt="Placeholderimage"></figure></div><div class="card-content"><div class="media"><div class="media-content"><p class="titleis-4">Empty Title</p><p class="subtitleis-6">Empty Description</p></div></div><br><time datetime="2016-1-1">July 4th 1776</time></div></div></div></a>'

let list = document.getElementById("event-list");

createCardString = (id) => {
    return '<a id="' + id + '" ' + defaultCardpostfix;
}

addEvent = () => {
    //push new element to database
    let newEvent = new EventItem()
    events.push(newEvent)

    //acquire, create, and render item
    let ul = $("#event-list")[0]
    let li = document.createElement("li")
    li.innerHTML = createCardString(events.length - 1)
    ul.appendChild(li)
    ul.appendChild(document.createElement("hr"))

    console.log("Added item with id: " + (events.length - 1))
}

renderEvent = (index) => {
    //query from database
    let eventObj = events[index]

    //render item on main-page
    let htmlTag = ''

    
}

renderNavBar = () => {
    //purge content
    let ul = $("#event-list")[0]
    ul.innerHTML = ""

    //grab list from database?

    //render every card with new id
    for (let i = 0; i < events.length; i++) {
        renderCard(events[i], ul, i)
    }
}

renderCard = (eventObj, ul, i) => {
    //build string and render
    let li = document.createElement("li")

    //li.innerHTML = cardContent
    let htmlTag = '<a id="' + i + '" onclick="renderEvent(this.id)"><div class="card"><div class="card-image"><figure class="imageis-2by1">'
    htmlTag += '<img src="' + eventObj.img + '" alt="Placeholderimage"></figure></div><div class="card-content"><div class="media">'
    //htmlTag += '<div class="media-left"><figure class="imageis-48x48"><img src="' + eventObj.img + '" alt="Placeholderimage"></figure></div>'
    htmlTag += '<div class="media-content"><p class="titleis-4">' + eventObj.title + '</p><p class="subtitleis-6">' + eventObj.desc + '</p></div></div>'
    htmlTag += '<br><time datetime="2016-1-1">' + eventObj.date + '</time></div></div></div></a>'

    li.innerHTML = htmlTag

    //render
    ul.appendChild(li)
    ul.appendChild(document.createElement("hr"))

    console.log("Added item with id: " + i)
}
