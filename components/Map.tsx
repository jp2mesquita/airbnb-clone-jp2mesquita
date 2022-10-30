
import { useState } from 'react'
import ReactMapGL, {Marker, Popup, PopupEvent} from 'react-map-gl'
import { getCenter } from 'geolib'

import { SearchProps } from '../pages/search'



type Center = {
    longitude: number;
    latitude: number;
}
export default function Map({searchResults} : SearchProps){

  

  const coordinates = searchResults.map((result) => (
    {
      latitude: result.lat,
      longitude: result.long
    }
  ))

  const center: Center = getCenter(coordinates) as Center


  const [viewport, setViewport] =useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  
  
  const [selectedLocation, setSelectedLocation] = useState<Number>(0)
        
  return(
    <ReactMapGL
      mapStyle={'mapbox://styles/jp2mesquita/cl9udiwdc008414mq4fgt9u1r'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport.viewState)}
    >
      {searchResults.map( (result) => {
        return(
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}

          >
            <p 
              role='img'
              
              onClick={() => setSelectedLocation(result.long)}
              className='cursor-pointer text-2xl'
              aria-label='=push-pin'
            >
              📌
            </p>
          </Marker>

          {result.long === selectedLocation ? (
              <Popup
                onClose={() => setSelectedLocation(0)}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
                anchor='top-left'
              >
                {result.title}
              </Popup>
            )
            :(
              null
            )
          }

          {/* {showPopup && 
           ( 
            <Popup
              onClose={() => setShowPopup(false)}
              latitude={result.lat}
              longitude={result.long}
              anchor='top-left'
            >
              {result.title}
            </Popup>
            )
        } */}
        </div>
      )
      }
      )}
    </ReactMapGL>
    
  )
}