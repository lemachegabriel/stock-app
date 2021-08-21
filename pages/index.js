import Link from 'next/link'
import styles from '../pages/style.module.css'
import LoginForm from '../components/LoginForms'
import { verify_cookie_auth } from '../lib/verify_cookie_auth'
import Router from 'next/dist/next-server/server/router'
import SearchBar from '../components/search'

export default function home(){

    const redirect_register = () => {
        Router.push('register')
    }

    return(
            <h1 className={styles.style}>
                
                Read{' '}
                <Link href="/posts/first-post">
                    <a>this page!</a>
                </Link>
                <LoginForm></LoginForm>
                <div className="box">
                    <button className={styles.button} onClick={verify_cookie_auth}>get</button>
                    <button className="button green" onClick={redirect_register}>registre</button>
                </div>
                <SearchBar></SearchBar>
            </h1>
    )
}