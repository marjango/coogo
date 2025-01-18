// document.addEventListener("DOMContentLoaded", () => {
  
//     const getRandomColor = () => {
//       const letters = "0123456789ABCDEF"
  
//       let color = ""
  
//       for (let i = 9; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//       }
  
//       return color
//     }
  
//     setInterval(() => {
//       const randomColor = getRandomColor()
  
//       dots.forEach(dot => {
//         dot.computedStyleMap.backgroundColor = randomColor
//       })
//     }, 1000)
//   })

  import React from "react"
  import s from "./Loader.module.css"

  function Loader () {
    return (
            <div className={s.loader} id="loader">
                <div className={s.dot}></div>
                <div className={s.dot}></div>
                <div className={s.dot}></div>
            </div>
    )
  }

  export default Loader;