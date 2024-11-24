import { useEffect, useState } from 'react'

const deviateValue = (value: number, range: number, direction: 'increment' | 'decrement') => {
  const deviation = Math.floor(Math.random() * range)
  return direction === 'increment' ? value + deviation : value - deviation
}

export const useColumnValues = (numberOfColumns: number, benchmark?: number, flicker?: boolean) => {
  const [columnValues, setColumnValues] = useState<number[]>(
    Array(numberOfColumns).fill(benchmark ?? 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (!flicker) return

      setColumnValues((prevValues) => {
        if (benchmark || benchmark === 0) {
          return prevValues.map(() => deviateValue(benchmark, 10, 'increment'))
        }
        return prevValues.map((value) =>
          value < 100 ? deviateValue(value, 20, 'increment') : deviateValue(value, 20, 'decrement')
        )
      })
    }, 100)

    return () => clearInterval(interval)
  }, [numberOfColumns, benchmark, flicker])

  return columnValues
}
