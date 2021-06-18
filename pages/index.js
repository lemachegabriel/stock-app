import Link from 'next/link'
import styles from '../pages/style.module.css'
import LoginForm from '../components/LoginForms'

function home(){
    return(
        <h1 className={styles.style}>
            Read{' '}
            <Link href="/posts/first-post">
            <a>this page!</a>
            </Link>
            <LoginForm></LoginForm>
        </h1>
        
    )
}

export default home