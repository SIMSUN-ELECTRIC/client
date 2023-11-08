import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
<div className="heading">
    <h1>NEWS</h1>
</div>

<div className=' flex flex-row'>
  <section className=" sm:grid p-0 flex flex-col justify-center items-center cards-wrapper">
    <div className="card-grid-space">
      <div className="num">01</div>
     <Link to="#" className="card  bg-slate-400" >
         <div>
          <h1>News Heading</h1>
          <p className='pSame'>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
          <div className="date">6 Oct 2017</div>
          <div className="tags">
            <div className="tag">HTML</div>
          </div>
        </div>
      </Link>
    </div>
    <div className="card-grid-space ">
        <div className="num">02</div>
        <Link to="#" className="card  bg-slate-400" >
           <div>
            <h1>News Heading</h1>
            <p className=''>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
            <div className="date">6 Oct 2017</div>
            <div className="tags">
              <div className="tag">HTML</div>
            </div>
          </div>
        </Link>
      </div>
    <div className="card-grid-space ">
      <div className="num ">03</div>
      <Link to="#" className="card  bg-slate-400">
        <div >
          <h1>News Heading</h1>
          <p>Learn about some of the most common HTML tags…</p>
          <div className="date">9 Oct 2017</div>
          <div className="tags">
            <div className="tag">HTML</div>
          </div>
        </div>
      </Link>
    </div>
    <div className="card-grid-space">
      <div className="num">04</div>
      <Link to className="card  bg-slate-400" >
        <div>
          <h1>News Heading</h1>
          <p>Learn how to use links and images along with file paths…</p>
          <div className="date">14 Oct 2017</div>
          <div className="tags">
            <div className="tag">HTML</div>
          </div>
        </div>
      </Link>
    </div>
    <div className="card-grid-space">
        <div className="num">05</div>
       <Link to="#" className="card  bg-slate-400" >
           <div>
            <h1>News Heading</h1>
            <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
            <div className="date">6 Oct 2017</div>
            <div className="tags">
              <div className="tag">HTML</div>
            </div>
          </div>
        </Link>
      </div>
  </section>

</div>
    </>
  )
}

export default News
