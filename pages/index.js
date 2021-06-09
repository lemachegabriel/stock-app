import Link from 'next/link'

function home(){
    return(
        <h1 className="title">
            Read{' '}
            <Link href="/posts/first-post">
            <a>this page!</a>
            </Link>
        </h1>
    )
}

export default home