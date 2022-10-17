document.querySelector('button').addEventListener('click', getCity)

function getCity(){
    let city = document.querySelector('.city').value
    console.log(city)
   
    let country= document.querySelector('.country').value
    console.log(country)

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=89475dfc4d245aaaee28bc1530fe5243`)
.then(res => res.json())
.then(data => {
    console.log(data)
    let location = `${data.name}, ${data.sys.country} ` 
        console.log(location)
    let temp = ` ${Math.round((data.main.temp - 273.15) * 9/5 + 32)} degrees` 
        console.log(temp)
    document.querySelector('h2').innerText = location
    document.querySelector('h3').innerText = temp
    
})
}
    
    
    //(data.main.temp − 273.15) × 9/5 + 32 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //let location = data.location.country
    //console.log(location)
    //let region = data.location.region
    //console.log(region)
    //let temp = data.current.temp_f
    //console.log(temp)
    //document.querySelector('h2').innerText= temp
































