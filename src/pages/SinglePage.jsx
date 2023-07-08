import { Link, useParams } from 'react-router-dom'
import pages from '../data.js'

const SinglePage = () => {
  const { pageId } = useParams()
  const page = pages.find((page) => page.id === pageId)
  const { path, title } = page

  return (
    <section className='section page'>
      <h5>{title}</h5>
      <Link to='/pages'>back to pages</Link>
    </section>
  )
}

export default SinglePage