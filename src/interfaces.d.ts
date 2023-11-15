  // https://developers.google.com/maps/documentation/geocoding/requests-geocoding

declare interface GoogleGeocodingResponse {
  results : Result[]
  status  : Status
}

interface Result {
  address_components : AddressComponent[]
  formatted_address  : string
  geometry           : Geometry
  place_id           : string
  plus_code          : PlusCode
  types              : string[]
}

interface AddressComponent {
  long_name  : string
  short_name : string
  types      : string[]
}

interface Geometry {
  location      : LatLng
  location_type : string
  viewport      : Viewport
}

interface Viewport {
  northeast : LatLng
  southwest : LatLng
}

interface LatLng {
  lat : number
  lng : number
}

interface PlusCode {
  compound_code : string
  global_code   : string
}

type Status = 
  | 'OK'
  | 'ZERO_RESULTS'
  | 'OVER_DAILY_LIMIT'
  | 'OVER_QUERY_LIMIT'
  | 'REQUEST_DENIED'
  | 'INVALID_REQUEST'
  | 'UNKNOWN_ERROR'
