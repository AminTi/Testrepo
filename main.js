let hamburger = document.querySelector(".fa-hamburger")
let ul = document.querySelector(".coran")

hamburger.addEventListener("click", function () {
    if (ul.style.visibility === "hidden") {
        ul.style.visibility = "visible"
        return false
    }
    ul.style.visibility = "hidden"
    return true
})

let date = document.querySelector(".date")

var today = new Date()
var currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

date.textContent = currentDate
let wrapper = document.querySelector(".wrapper")
let secondWrapper = document.querySelector(".secondWrapper")

let city = document.querySelector("input")
let btn = document.querySelector("button")

let cors = "https://cors-anywhere.herokuapp.com/"

async function getCountry(citys) {
    let res = await fetch(
        cors +
            `https://muslimsalat.com/${citys}/daily.json?key=API_KEY&jsoncallback=`
    )
    return res.json()
}

let temperature = document.querySelector(".fa-temperature-high")
let citys = "Stockholm"
getCountry(citys).then((data) => {
    updateUi(citys, data)
    temperature.textContent = `${data.today_weather.temperature}`
})

let clicked = false
btn.addEventListener("click", function (e) {
    citys = city.value

    getCountry(citys).then((data) => {
        updateUi(citys, data)
    })
})

let customers = document.querySelector(".customers")

function updateUi(citys, data) {
    secondWrapper.innerHTML = `<table id="customers">
    <tr>
    <th>${citys.toUpperCase()}</th>
    </tr>
    <tr>
     <td> <span class=fajer>Shurooq</span> ${data.items[0].shurooq}</td>
    </tr>
    <tr>
    <td> <span class=fajer>Fajer</span> ${data.items[0].fajr}</td>
    </tr>
    <tr>
    <td><span class=fajer>Dhuhr</span> ${data.items[0].dhuhr}</td>
    </tr>
    <tr>
    <td><span class=fajer>Asr</span> ${data.items[0].asr}</td>
    </tr>
    <tr>
    <td><span class=fajer>Magrib</span> ${data.items[0].maghrib}</td>
    </tr>
    <tr>
    <td><span class=fajer>Isha</span> ${data.items[0].isha}</td>
    </tr>
    </table>
  `
    temperature.textContent = `${data.today_weather.temperature}`
}
