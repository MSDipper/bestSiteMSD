import styles from './Navigation.module.scss'

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
    return (
            <ul className={styles.component}>
                <li><a className={styles.link} href="#">main</a></li>
                <li><a className={styles.link} href="#">history</a></li>
                <li><a className={styles.link} href="#">blog</a></li>
                <li><a className={styles.link} href="#">flowers</a></li>
            </ul>
    )
}
export default Navigation