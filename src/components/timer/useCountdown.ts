import { useState, useEffect } from 'react'

export const useCountdown = (milliseconds: number) => {
  const [time, setTime] = useState(milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 10)
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return time
}
