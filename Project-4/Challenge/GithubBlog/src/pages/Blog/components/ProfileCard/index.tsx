/* eslint-disable camelcase */
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
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface UserData {
  name: string
  login: string
  company: string
  followers: number
  url: string
  avatar_url: string
  bio: string
}

export function ProfileCard() {
  const [userData, setUserData] = useState<UserData>()

  const userName = 'EduardoVital'

  const getData = async () => {
    await api.get(`/users/${userName}`).then((response) => {
      const { name, company, followers, html_url, avatar_url, login, bio } =
        response.data
      setUserData({
        name,
        company,
        followers,
        url: html_url,
        avatar_url,
        login,
        bio,
      })
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Card>
      <CardContainer>
        <ImageDiv>
          <img src={userData?.avatar_url} alt="" />
        </ImageDiv>

        <Description>
          <div>
            <h1>{userData?.name}</h1>
            <a href={userData?.url} target="_blank" rel="noreferrer">
              GITHUB
              <img src={IconArrowUp} alt="" />
            </a>
          </div>

          <p>{userData?.bio}</p>

          <MediaInformation>
            <span>
              <img src={IconGithub} alt="" />
              {userData?.login}
            </span>
            <span>
              <img src={IconBuilding} alt="" />
              {userData?.company}
            </span>
            <span>
              <img src={IconUserGroup} alt="" />
              {userData?.followers} seguidores
            </span>
          </MediaInformation>
        </Description>
      </CardContainer>
    </Card>
  )
}
