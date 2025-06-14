import { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/css/pages/news.css'

type NewsItem = {
  image: string
  title: string
  content: string
}

function News () {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get<{ news: NewsItem[] }>(
          'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json'
        )
        if (response.status === 200) {
          const data = response.data
          if (data && Array.isArray(data.news)) {
            setNews(data.news.slice(0, 6))
          } else {
            console.error('Data does not contain an array:', data)
          }
        } else {
          console.log('Slight server error')
        }
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }
    fetchTransactions()
  }, [])

  return (
    <div className='newss portfolio'>
      <div className='news-container'>
        <div className='news-heading'>BLOG</div>
        <div className='news-paragraph'>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </div>
        <div className='news-card'>
          {news.map((item, index) => (
            <div key={index} className='news-item'>
              <div className='news-image'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='news-content'>
                <div className='news-content-heading'>{item.title}</div>
                <div className='news-content-paragraph'>{item.content}</div>
                <div className='news-contentbtn'>
                  Learn More <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='view'>View all news</div>
      </div>
    </div>
  )
}

export default News