import { iconsList } from '../../utilities/iconsList'
import {
  BannerListItems,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerInfos,
  BannerListItemsContainer,
} from './styles'
import coffeeBg from '../../assets/coffeeBg.svg'

export function Home() {
  return (
    <BannerContainer>
      <BannerInfos>
        <BannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebeu seu café onde estiver, a qualquer
            hora
          </p>
        </BannerText>
        <BannerListItemsContainer>
          {iconsList.map((list) => {
            return (
              <BannerListItems key={list.icon} icon={list.key}>
                <div>
                  <img src={list.icon} alt="" />
                </div>
                <p>{list.text}</p>
              </BannerListItems>
            )
          })}
        </BannerListItemsContainer>
      </BannerInfos>
      <BannerImage>
        <img src={coffeeBg} alt="" />
      </BannerImage>
    </BannerContainer>
  )
}
