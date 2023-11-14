const form = document.querySelector('form')! as HTMLFormElement
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value
  console.log(enteredAddress)
  // TODO: send this to Google's API!
}

form.addEventListener('submit', searchAddressHandler)
