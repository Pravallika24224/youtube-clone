import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useOnline from '../customHooks/useOnline'
import OfflineComponent from '../components/OfflineComponent'
import VideoCard from '../components/VideoCard'
import { fetchDataFromAPI } from '../utils/api'

const Feed = () => {
  const [searchResults, setSearchResults] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("New")
  const isOnline = useOnline()

  useEffect(() => {
    fetchSearchData(selectedCategory)
  }, [selectedCategory])

  const fetchSearchData = async (query) => {
    const data = await fetchDataFromAPI(`search/?q=${query}`)
    setSearchResults(data.contents);
  }
  console.log(selectedCategory, searchResults)
  return (
    <div className="flex h-[calc(100%-56px)]">
      <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      {isOnline === false ? (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <OfflineComponent />
        </div>
      ) : (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {searchResults.map((item, index) => {
              if (item.type !== "video") return false;
              return <VideoCard key={index} video={item?.video} />;
              // i allways prefered to pass unique key that i got from the api and that is standered way also but for this api some unique key like videoId present twice and more in the searchResults, i don't khow why. So, forcefully i chose map index :(
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Feed