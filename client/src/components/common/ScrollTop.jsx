import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop =() => {
    const [show, setShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 300)
            {
                setShow(true);
            }
            else
            {
                setShow(false);
            }
        })
    }, [])
    const scrollTop =() => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <button onClick={scrollTop}
        className={`scroll-top ${show ? "show" : ""}`}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollTop