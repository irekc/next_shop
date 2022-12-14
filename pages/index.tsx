import { Main } from "../components/Main";
import { ProductListItem } from "../components/Products";


const DATA = {
  id: 1,
  title: 'kawa',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vel ad ab rem corporis reprehenderit blanditiis sequi est accusantium voluptates.',
  thumbnailUrl: 'https://picsum.photos/id/1060/536/354',
  thumbnailAlt: 'Barista nalewający kawę',
  rating: 5,
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Main>
        <ProductListItem data={DATA} />
      </Main>
    </ div>
  )
}

export default Home
