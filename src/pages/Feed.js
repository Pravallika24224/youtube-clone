import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useOnline from '../customHooks/useOnline'
import OfflineComponent from '../components/OfflineComponent'

const Feed = () => {
  const isOnline = useOnline()
  console.log(isOnline)
  return (
    <div>
      {/* <Header/>
      <Navbar/> */}
      {isOnline === false && (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <OfflineComponent />
        </div>
      )}
    </div>
  )
}

export default Feed