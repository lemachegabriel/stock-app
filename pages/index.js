import Link from 'next/link'
import styles from '../pages/style.module.css'
import LoginForm from '../components/LoginForms'
import axios from 'axios'
import Router from 'next/router';

axios.defaults.withCredentials = true

function home(){

    const getCookie = () => {
        axios.get('https://quiet-refuge-47031.herokuapp.com/api/cookiesGet',{ withCredentials: true }).then((res) =>{
          console.log(res.data)
        })
    }
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
                <button className="button red" onClick={getCookie}>get</button>
                <button className="button green" onClick={redirect_register}>registre</button>
            </div>
        </h1>
        
    )
}

export default home