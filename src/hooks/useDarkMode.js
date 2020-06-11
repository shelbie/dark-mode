import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {

const [someValue, setSomeValue] = useLocalStorage('key') 
    if (someValue === "true") {
        someValue.classList.add("dark-mode")
    } else {
        
            someValue.classList.remove("dark-mode")
       
    }
return [setSomeValue, someValue]

}
export default useDarkMode;