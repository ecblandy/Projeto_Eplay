import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [destaque, setDestaque] = useState<Game[]>([])

  useEffect(() => {
    const ENDPOINT_PROMO = 'https://fake-api-tau.vercel.app/api/eplay/promocoes'
    fetch(ENDPOINT_PROMO)
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    const ENDPOINT_DESTAQUE =
      'https://fake-api-tau.vercel.app/api/eplay/em-breve'
    fetch(ENDPOINT_DESTAQUE)
      .then((res) => res.json())
      .then((res) => setDestaque(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={destaque} title="Em breve" background="black" />
    </>
  )
}
export default Home
