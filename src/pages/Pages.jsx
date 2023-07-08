import React from 'react'
import { Link } from 'react-router-dom'
import pages from '../data.js'

const Pages = () => {
  return (
    <section className='section'>
      <h2>pages</h2>
      <div className='pages'>
        {pages.map((page) => {
          return (
            <article key={page.id}>
              <h5>{page.title}</h5>
              <Link to={`/pages/${page.path}`}>more info</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Pages

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
export { SinglePage }
