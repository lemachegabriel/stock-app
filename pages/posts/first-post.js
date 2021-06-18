import Link from 'next/link'
import axios from 'axios'

const GetData = ({dados}) => (
  <div>
    <h1>artigos</h1>
    [{console.log(dados)}]
  </div>
)

GetData.getInitialProps = async() =>{
  const response = await axios.get(
    'https://quiet-refuge-47031.herokuapp.com/api/index'
  )
  return { dados : response.data}
}

function FirstPost() {
  return (
    <>
      {GetData}
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost;