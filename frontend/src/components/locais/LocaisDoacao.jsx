import './locaisdoacao.scss'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { MapPin, Search } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState } from 'react'

// 🩸 Ícone personalizado vermelho
const bloodIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3917/3917754.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -28],
})

// 📍 Função para centralizar o mapa após pesquisa
function FlyToLocation({ position }) {
  const map = useMap()
  if (position) {
    map.flyTo(position, 13, { duration: 2 })
  }
  return null
}

export default function LocaisDoacao() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedPosition, setSearchedPosition] = useState(null)

 const hemocentros = [
  {
    nome: 'Fundação Pró-Sangue – Posto Clínicas (São Paulo)',
    coords: [-23.557, -46.673],
    endereco: 'Av. Dr. Enéas Carvalho de Aguiar, 155 – Cerqueira César, São Paulo / SP',
  },
  {
    nome: 'Fundação Pró-Sangue – Posto Dante Pazzanese (São Paulo)',
    coords: [-23.587, -46.657],  // aproximado
    endereco: 'Av. Dr. Dante Pazzanese, 500 – Ibirapuera, São Paulo / SP',
  },
  {
    nome: 'Fundação Pró-Sangue – Posto Mandaqui (São Paulo)',
    coords: [-23.493, -46.620],  // aproximado
    endereco: 'Rua Voluntários da Pátria, 4.227 – Mandaqui, São Paulo / SP',
  },
  {
    nome: 'Fundação Pró-Sangue – Posto Regional de Osasco (Osasco)',
    coords: [-23.537, -46.780],
    endereco: 'Rua Ari Barroso, 355 – Presidente Altino, Osasco / SP',
  },
  {
    nome: 'Fundação Pró-Sangue – Posto Barueri (Barueri)',
    coords: [-23.506, -46.873],  // aproximado
    endereco: 'Rua Guilhermina Carril Loureiro, 144 – Centro, Barueri / SP',
  },
  // Você já tinha várias outras unidades hospitalares/hemocentros em sua lista...
  {
    nome: 'Colsan – Hospital do Servidor Público Estadual',
    coords: [-23.602, -46.641],
    endereco: 'Rua Pedro de Toledo, 1800 – Vila Clementino, São Paulo / SP',
  },
  {
    nome: 'Hospital Santa Marcelina',
    coords: [-23.541, -46.479],
    endereco: 'Rua Santa Marcelina, 177 – Itaquera, São Paulo / SP',
  },
  {
    nome: 'Hospital Luzia de Pinho Melo',
    coords: [-23.514, -46.192],
    endereco: 'Av. Pedro Romero, 118 – Mogi das Cruzes / SP',
  },
  {
    nome: 'Hospital São Paulo (UNIFESP)',
    coords: [-23.603, -46.639],
    endereco: 'Rua Napoleão de Barros, 715 – Vila Clementino, São Paulo / SP',
  },
  {
    nome: 'Hospital Municipal do Campo Limpo',
    coords: [-23.649, -46.756],
    endereco: 'Estr. Itapecerica, 5859 – Campo Limpo, São Paulo / SP',
  },
  {
    nome: 'Hospital Municipal M’Boi Mirim',
    coords: [-23.676, -46.774],
    endereco: 'Estr. M’Boi Mirim, 5200 – Jardim Ângela, São Paulo / SP',
  },
  {
    nome: 'Hospital das Clínicas de Itapevi',
    coords: [-23.547, -46.933],
    endereco: 'Av. Rubens Caramez, 1000 – Vila Aurora, Itapevi / SP',
  },
  {
    nome: 'Hospital Regional de Osasco',
    coords: [-23.537, -46.780],
    endereco: 'Rua Ari Barroso, 355 – Presidente Altino, Osasco / SP',
  },
  {
    nome: 'Hospital Geral de Guarulhos',
    coords: [-23.463, -46.532],
    endereco: 'Rua Dr. José Maurício de Oliveira, 200 – Gopoúva, Guarulhos / SP',
  },
  {
    nome: 'Hospital Mário Covas',
    coords: [-23.667, -46.529],
    endereco: 'Rua Dr. Henrique Calderazzo, 321 – Santo André / SP',
  },
  {
    nome: 'Hospital Estadual Mário Covas – Santo André',
    coords: [-23.655, -46.530],
    endereco: 'Rua Dr. Henrique Calderazzo, 321 – Paraíso, Santo André / SP',
  },
  {
    nome: 'Hospital Municipal de São Bernardo do Campo',
    coords: [-23.703, -46.546],
    endereco: 'Av. Bispo César D’Ângelo, 450 – Alves Dias, São Bernardo do Campo / SP',
  },
  {
    nome: 'Hospital de Barueri Dr. Francisco Moran',
    coords: [-23.505, -46.878],
    endereco: 'Rua Ângela Mirella, 354 – Jardim dos Camargos, Barueri / SP',
  },
  {
    nome: 'Colsan – Hospital Municipal de Diadema',
    coords: [-23.689, -46.622],
    endereco: 'Rua Graciosa, 320 – Centro, Diadema / SP',
  },
  {
    nome: 'Hospital Regional de Ferraz de Vasconcelos',
    coords: [-23.541, -46.367],
    endereco: 'Av. Gov. Jânio Quadros, 170 – Vila Corrêa, Ferraz de Vasconcelos / SP',
  },
  {
    nome: 'Colsan – Hospital de Santo André',
    coords: [-23.654, -46.530],
    endereco: 'Av. João Ramalho, 326 – Centro, Santo André / SP',
  },
  {
    nome: 'Hospital Santa Casa de Suzano',
    coords: [-23.544, -46.308],
    endereco: 'Rua Baruel, 501 – Centro, Suzano / SP',
  },
  {
    nome: 'Hospital Geral de Itapecerica da Serra',
    coords: [-23.716, -46.851],
    endereco: 'Rua Felipe Callieira, 155 – Centro, Itapecerica da Serra / SP',
  },
  {
    nome: 'Hospital Geral de Taipas',
    coords: [-23.414, -46.743],
    endereco: 'Estrada de Taipas, 255 – Jardim Paulistano, São Paulo / SP',
  },
];

  async function handleSearch(e) {
    e.preventDefault()
    if (!searchTerm.trim()) return

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm + ', São Paulo')}`
      )
      const data = await res.json()
      if (data && data[0]) {
        const lat = parseFloat(data[0].lat)
        const lon = parseFloat(data[0].lon)
        setSearchedPosition([lat, lon])
      } else {
        alert('Local não encontrado. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro ao buscar local:', err)
    }
  }

  return (
    <div id="locais" className="container-locais">
      <h1 className="titulo-locais">
        Locais de Doação <MapPin className="icon" />
      </h1>
      <p>Confira os principais Hemocentros da Grande São Paulo</p>

      <form className="busca-form" onSubmit={handleSearch}>
        <div className="input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Digite o bairro ou cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit">Buscar</button>
      </form>

      <div className="map-wrapper">
        <MapContainer center={[-23.55, -46.63]} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hemocentros.map((h, i) => (
            <Marker key={i} position={h.coords} icon={bloodIcon}>
              <Popup>
                <strong>{h.nome}</strong>
                <br />
                {h.endereco}
              </Popup>
            </Marker>
          ))}
          <FlyToLocation position={searchedPosition} />
        </MapContainer>
      </div>
    </div>
  )
}
