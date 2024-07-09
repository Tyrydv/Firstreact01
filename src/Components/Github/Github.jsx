import React, { useEffect, useState } from 'react'


function Github() {
    
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/tyrydv')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-orange-700 text-white p-4 text-3xl'>MyGithub followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

