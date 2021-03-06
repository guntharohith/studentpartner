import { useEffect,useState } from "react"
export const url = "http://localhost:8080/"
export function useLocalStorage(key, initialCode) {

    const [code, setCode] = useState(() => {
        const jsonCode = localStorage.getItem(key)
        if (jsonCode != null) return jsonCode

        if (typeof initialCode === 'function') {
            return initialCode()
        } else {
            return initialCode
        }
    })

    useEffect(() => {
        localStorage.setItem(key, code)
    }, [key, code])

    return [code, setCode]
}
