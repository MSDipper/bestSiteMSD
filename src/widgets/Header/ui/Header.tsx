import { Navigation } from '../../../entities/Navigation'
import styles from './Header.module.scss'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.component}>
      <div className={styles.main}></div>
      <div className={styles.slider}></div>
    </div>
  )
}
export default Header
