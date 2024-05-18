import React from 'react'

export default function Header({headerInfo,children,c}) {
    // let {headerInfo}=props;//destructure 
    // console.log(headerInfo)
    // console.log(props.headerInfo.email)
  return (
    <div><h3>Header</h3>
    <h3>{children}</h3>
        <div>hii {c}
        </div>
        <div>hiii
            <h3>{children}</h3></div>
        <div>hiiii  </div>
    
    </div>
  )
}
