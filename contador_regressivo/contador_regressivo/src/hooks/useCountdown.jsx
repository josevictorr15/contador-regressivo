import { useState } from "react"

const useCountdown = (date) => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const countdown = () => {
        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
    
        const interval = countDate - now
    
        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24
        
        const dayNumber = Math.floor(interval / days)
        const hourNumber = Math.floor((interval % days) / hours)
        const minuteNumber = Math.floor((interval % hours) / minutes)
        const secondNumber = Math.floor((interval % minutes) / seconds)

        setDays(dayNumber)
        setHours(hourNumber)
        setMinutes(minuteNumber)
        setSeconds(secondNumber)
        
    }

    setInterval(countdown, 1000)
    return [days, hours, minutes, seconds]
}

export default useCountdown