import {
  Card,
  MediaInformation,
} from '../../../Blog/components/ProfileCard/styles'
import IconGoBack from '../../../../assets/icons/IconGoBack.svg'
import IconGithub from '../../../../assets/icons/IconGithub.svg'
import IconCalendar from '../../../../assets/icons/IconCalendar.svg'
import IconComment from '../../../../assets/icons/IconComment.svg'
import IconArrowUp from '../../../../assets/icons/IconArrowUp.svg'
import { Links, Title } from './styles'

import { NavLink } from 'react-router-dom'

export function PostInformations() {
  return (
    <Card>
      <Links>
        <NavLink to="/" title="home">
          <img src={IconGoBack} alt="" />
          Voltar
        </NavLink>
        <a href="">
          Ver no github
          <img src={IconArrowUp} alt="" />
        </a>
      </Links>
      <Title>JavaScript data types and data structures</Title>
      <MediaInformation>
        <span>
          <img src={IconGithub} alt="" />
          EduardoVital
        </span>
        <span>
          <img src={IconCalendar} alt="" />
          Há 1 dia
        </span>
        <span>
          <img src={IconComment} alt="" />5 comentários
        </span>
      </MediaInformation>
    </Card>
  )
}
