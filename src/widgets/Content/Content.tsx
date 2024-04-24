import Header from "../Header/ui/Header"
import MovieList from "../MoviesList/MoviesList"
import styles from './Content.module.scss'

interface ContentProps { }

export const Content = ({ }: ContentProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <MovieList/>
            </div>
            <Header />
        </div>
    )
}
export default Content