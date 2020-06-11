import useLocalStorage from "./useLocalStorage";



const [someValue, setSomeValue] = useLocalStorage('key') 
    if (someValue === "true") {
        someValue.classList.add("dark-mode")
    } else {
        
            someValue.classList.remove("dark-mode")
       
    }
return [setSomeValue, someValue]

