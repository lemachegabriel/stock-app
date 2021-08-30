import { useRouter } from 'next/router'
import StockData from '../../components/StockData'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      
      <p>Post: {pid}</p>
      <StockData></StockData>
    </div>
  )
}

export default Post