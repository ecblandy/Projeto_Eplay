import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import residente from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: residente
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$290,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veniam minima aspernatur esse delectus officiis sed incidunt recusandae labore odio a, distinctio quia fugiat magni velit vero voluptatibus facilis accusantium!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: residente
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)
export default Home
