import axios from 'axios'

const API_KEY = process.env.GOOGLE_MAP_API_KEY
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'

const form = document.querySelector('form')! as HTMLFormElement
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler(event: Event) {
  event.preventDefault()

  const enteredAddress = addressInput.value
  
  axios
    .get<GoogleGeocodingResponse>(`${API_URL}?address=${encodeURI(enteredAddress)}&key=${API_KEY}`)
    .then((res) => {
      if (res.data.status !== 'OK') {
        throw new Error('Could not fetch location!')
      }
      const coordinates = res.data.results[0].geometry.location
      console.log("🚀 ~ file: app.ts:21 ~ .then ~ coordinates:", coordinates)
    })
    .catch((err) => {
      alert(err.message)
    })
}

form.addEventListener('submit', searchAddressHandler)
