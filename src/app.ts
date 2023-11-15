import axios from 'axios'
import { Loader } from '@googlemaps/js-api-loader'

const API_KEY = process.env.GOOGLE_MAP_API_KEY!
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'

const loader = new Loader({
  apiKey: API_KEY, 
  version: 'weekly'
})

const form = document.querySelector('form')! as HTMLFormElement
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler(event: Event) {
  event.preventDefault()

  const enteredAddress = addressInput.value
  
  axios
    .get<GoogleGeocodingResponse>(`${API_URL}?address=${encodeURI(enteredAddress)}&key=${API_KEY}`)
    .then(async (res) => {
      if (res.data.status !== 'OK') {
        throw new Error('Could not fetch location!')
      }
      const coordinates = res.data.results[0].geometry.location
      
      await loader.load()
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const map = new Map(document.getElementById("map") as HTMLElement, {
        center : coordinates,
        zoom   : 14,
      })

      new google.maps.Marker({ position: coordinates, map })
    })
    .catch((err) => {
      alert(err.message)
    })
}

form.addEventListener('submit', searchAddressHandler)
