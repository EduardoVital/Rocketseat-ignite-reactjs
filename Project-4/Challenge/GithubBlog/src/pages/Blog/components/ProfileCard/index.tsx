import {
  Card,
  CardContainer,
  Description,
  ImageDiv,
  MediaInformation,
} from './styles'
import IconArrowUp from '../../../../assets/icons/IconArrowUp.svg'
import IconGithub from '../../../../assets/icons/IconGithub.svg'
import IconBuilding from '../../../../assets/icons/IconBuilding.svg'
import IconUserGroup from '../../../../assets/icons/IconUserGroup.svg'

export function ProfileCard() {
  return (
    <Card>
      <CardContainer>
        <ImageDiv>
          <img src="https://github.com/EduardoVital.png" alt="" />
        </ImageDiv>

        <Description>
          <div>
            <h1>Eduardo Vital de Souza</h1>
            <a href="">
              GITHUB
              <img src={IconArrowUp} alt="" />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <MediaInformation>
            <span>
              <img src={IconGithub} alt="" />
              cameronwll
            </span>
            <span>
              <img src={IconBuilding} alt="" />
              Rocketseat
            </span>
            <span>
              <img src={IconUserGroup} alt="" />
              32 seguidores
            </span>
          </MediaInformation>
        </Description>
      </CardContainer>
    </Card>
  )
}
