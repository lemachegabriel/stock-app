import Link from 'next/link'
import styles from '../pages/style.module.css'
import LoginForm from '../components/LoginForms'
import { verify_cookie_auth } from '../lib/verify_cookie_auth'
import Router from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'


export default function home(){ 
    const router = useRouter()

    const redirect_register = () => {
        router.push('/register')
    }
    const redirect_user = () => {
        Router.push('user/gabriel')
    }

    return(
            <h1 className={styles.style}>
                
                Read{' '}
                <Link href="/home">
                    <a>this page!</a>
                </Link>
                <LoginForm></LoginForm>
                <div className="box">
                    <button className={styles.button} onClick={verify_cookie_auth}>get</button>
                    <button className="button green" onClick={redirect_register}>registre</button>
                    <button className="button red" onClick={redirect_user}>user</button>
                </div>
                
            </h1>
    )
}