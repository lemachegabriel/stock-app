import Link from 'next/link'
import {logout} from '../../lib/logout'
import UserInfo from '../../components/UserProfile'
import SearchBar from '../../components/search'

function FirstPost() {
  return (
    <>
      <h1>
        <SearchBar></SearchBar>
      </h1>
      <h1>
        <UserInfo></UserInfo>
      </h1>
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