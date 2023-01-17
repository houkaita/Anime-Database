import React from 'react'

function Sidebar({ topAnime }) {
  return (
    <aside>
        <nav>
            <h3>Top Anime</h3>
            {topAnime.map(e => 
              <a href={e.url} 
              target='_blank'
              key={e.mal_id}
              rel='norefferer'
              >
                  {e.title}
              </a> 
              )}
            
        </nav>
    </aside>
  )
}

export default Sidebar