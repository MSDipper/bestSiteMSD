import { ReactNode } from 'react'
import styles from './Title.module.scss'
import classNames from 'classnames'

type titleSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps {
  className?: string
  children: ReactNode
  size: titleSize
}
export const Title = ({ className, children, size }: TitleProps) => {
  const H = size as JSX.ElementType
  const allStyles = classNames(styles.title)

  return <H className={allStyles}>{children}</H>
}
export default Title
