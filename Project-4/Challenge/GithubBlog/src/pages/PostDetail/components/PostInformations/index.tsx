/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
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

import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface PostDetailsData {
  link: string
  title: string
  createdAt: string
  comments: number
  user: string
}

export function PostInformations() {
  const [postDetailsInfos, setPostDetailsInfo] = useState<PostDetailsData>()

  const { id } = useParams()

  const getPostDetailsContent = async () => {
    await api
      .get(
        `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
      )
      .then((response) => {
        const { title, created_at, comments, html_url } = response.data
        const { login } = response.data.user
        setPostDetailsInfo({
          title,
          link: html_url,
          createdAt: created_at,
          comments,
          user: login,
        })
      })
  }

  useEffect(() => {
    getPostDetailsContent()
  }, [id])

  return (
    <Card>
      <Links>
        <NavLink to="/" title="home">
          <img src={IconGoBack} alt="" />
          Voltar
        </NavLink>
        <a href={postDetailsInfos?.link} target="_blank" rel="noreferrer">
          Ver no github
          <img src={IconArrowUp} alt="" />
        </a>
      </Links>
      <Title>{postDetailsInfos?.title}</Title>
      <MediaInformation>
        <span>
          <img src={IconGithub} alt="" />
          {postDetailsInfos?.user}
        </span>
        <span>
          <img src={IconCalendar} alt="" />
          Há 1 dia
        </span>
        <span>
          <img src={IconComment} alt="" />
          {postDetailsInfos?.comments} comentários
        </span>
      </MediaInformation>
    </Card>
  )
}
