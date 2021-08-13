import Link from 'next/link'
import axios from 'axios'

function FirstPost() {
  const logout = () => {
    axios.get('http://localhost:8000/api/logout',{ withCredentials: true }).then((res) =>{
      console.log(res.data)
    })
  }
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <div className="button">
        <button className="logout_butt" onClick={logout}>Sair</button>

      </div>
    </>
  )
}

export default FirstPost;