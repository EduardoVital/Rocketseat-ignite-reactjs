/* eslint-disable react/no-children-prop */
import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </PostContentContainer>
  )
}
