import { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { Game } from '../Home'

const Categorys = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))
  })

  return (
    <>
      <ProductList games={gamesAction} title="Ação" background={'black'} />
      <ProductList games={gamesSports} title="Esportes" background={'gray'} />
      <ProductList
        games={gamesSimulation}
        title="Simulação"
        background={'black'}
      />
      <ProductList games={gamesRPG} title="RPG" background={'gray'} />
      <ProductList games={gamesFight} title="Luta" background={'black'} />
    </>
  )
}

export default Categorys
