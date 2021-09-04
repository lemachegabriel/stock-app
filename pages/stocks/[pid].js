import { useRouter } from 'next/router'
import StockData from '../../components/StockData'
import Operation from '../../components/OperationForm'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      
      <p>Post: {pid}</p>
      <StockData></StockData>
      
      <Operation></Operation>
      
    </div>
  )
}

export default Post