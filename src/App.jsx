import './App.css'
import './css/Card.css'
import './css/Search.css'
import './css/Lat.css'
import './css/Long.css'
import './css/Temp.css'
import './css/City.css'
import './css/Country.css'
import './css/Humidity.css'
import './css/Speed.css'
import './css/Icon.css'
import rainy from './assets/rainy.webp'
import cloudy from './assets/cloudy.webp'
import sunny from './assets/sunny.webp'
import thunder from './assets/thunder.webp'
import Card from './components/Card';
import { useEffect, useState } from 'react'
import { use } from 'react'
function App() {
  const [text, setText] = useState('chennai')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [humidity, setHumidity] = useState(0)
  const [speed, setSpeed] = useState(0);
  const [icon, setIcon] = useState('')
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [temp, setTemp] = useState(0)
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error,setError]=useState('')
  
  const genPic = () => {
    const img = [rainy, cloudy, sunny, thunder]
  let i = Math.floor(Math.random() * 4)
    const pic = img[i];
    return pic;
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const onEnter = (e) => {
    const key = e.key
    // console.log(key)
    if (key === "Enter") {
      getData()
    }
  }

  useEffect(() => {
    getData()
  },[])
  const getData = async () => {
    setLoading(true)
    setCityNotFound(false)
    const API_KEY="56e2a83fdd1116753ae6c527d69c91fd"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=Metric`
    try {
      const res = await fetch(url)
      // System.out.print(res.status)

      const data = await res.json()
      if (data.cod === "404") {
        setCityNotFound(true)
        setError('')
        setLoading(false)//optional
        return;
      }
      setError('')
      setCityNotFound(false)
      setCity(data.name)
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setSpeed(data.wind.speed)
      setIcon(genPic())
      setLat(data.coord.lat)
      setLong(data.coord.lon)
      setTemp(data.main.temp)
    }
    catch (err) {
      // console.log(err);
      setError("error has occured")
      // setError(err)
      setCityNotFound(false)
    }
    finally {
      setLoading(false)
    }
  }
  console.log(text)
  return (
    <Card handleChange={handleChange} city={city} country={country} humidity={humidity} speed={speed} icon={icon} lat={lat} long={long} temp={temp} getData={getData} onEnter={onEnter} loading={ loading} error={error} cityNotFound={cityNotFound} text={text} />
  )
}

export default App
