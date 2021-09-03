import React,{useSate, useState} from 'react'
import NavBar from './NavBar'


const Layout=({children})=>{

    const [hover, setHover]=useState(false)

    return(
        <div>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout