import React, { useEffect } from 'react'

const ChainDetails = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      ChainDetails
    </div>
  )
}

export default ChainDetails
