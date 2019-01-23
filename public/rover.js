const camerasList = document.getElementById("camerasList")
const cameraTypes = ["fhaz", "rhaz", "mast"]

cameraTypes.forEach(type => {
    let camera = document.createElement("button")
    camera.innerHTML = type
    camera.onclick = event => {
        Render(type)
    }
    camerasList.appendChild(camera)
})

function Render(cameraType) {
    var URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=" + cameraType + "&api_key=wAWd1pHLIpuHuKHpFD0sO20Abd1pQQO0gwHKfA69"
    let photosList = document.getElementById("photosList")
    const gridElement = photosList.parentNode
    gridElement.removeChild(photosList)
    photosList = document.createElement("div")
    photosList.setAttribute("id", "photosList")
    gridElement.appendChild(photosList)

    fetch(URL)
        .then(e => e.json())
        .then(e => e.photos)
        .then(photos => {
            photos.forEach(photo => {
                let foto = document.createElement("img")
                foto.setAttribute("src", photo.img_src)
                foto.setAttribute("width", "200")
                let nome = document.createElement("div")
                nome.innerHTML = "Nome: " + photo.camera.full_name
                let data = document.createElement("div")
                data.innerHTML = "Data: " + photo.earth_date
                photosList.appendChild(foto)
                photosList.appendChild(nome)
                photosList.appendChild(data)
            })
        })
}