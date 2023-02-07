import { PostInformations } from './components/PostInformations'
import { BlogContainer } from '../Blog/styles'
import { PostContent } from './components/PostContent'
import { useState } from 'react'

export function PostDetail() {
  const [content, setContent] = useState<string>('')

  function getPostContent(content: string) {
    setContent(content)
  }

  return (
    <BlogContainer>
      <PostInformations getContent={getPostContent} />
      <PostContent content={content} />
    </BlogContainer>
  )
}
