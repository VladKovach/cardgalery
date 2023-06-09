import './App.css'
import CardComponent from './components/CardComponent/CardComponent'

function App() {
  const cards = [
    { src: 'https://i.pinimg.com/564x/59/33/09/59330940531f11e8c35b4449569511b4.jpg' },
    { src: 'https://i.pinimg.com/564x/3b/41/f4/3b41f4dff15ca4d249c25b4f450778d7.jpg' },
    { src: 'https://i.pinimg.com/564x/ff/af/5b/ffaf5b46dd778afe68ef98709da0c0e6.jpg' },
    { src: 'https://i.pinimg.com/564x/72/67/3d/72673deaae06da7617a1e2b8ff9fb6cd.jpg' },
    { src: 'https://i.pinimg.com/564x/76/5f/4f/765f4f464d9756895992971a379b6749.jpg' },
  ]

  return (
    <div className="App">
      <CardComponent cards={cards} />
    </div>
  )
}

export default App
