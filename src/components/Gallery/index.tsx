import Section from '../../components/Section'

import hogwards from '../../assets/images/image 8.png'
import { Item, Items } from './styles'

const Gallery = () => {
  return (
    <Items>
      <Item>
        <img src={hogwards} />
      </Item>
      <Item>
        <img src={hogwards} />
      </Item>
      <Item>
        <img src={hogwards} />
      </Item>
      <Item>
        <img src={hogwards} />
      </Item>
    </Items>
  )
}

export default Gallery
