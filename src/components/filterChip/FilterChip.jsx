import React, { useState } from 'react'
import styles from './FilterChip.module.css'

export default function FilterChip(props) {
    
    const [showOptions, setShowOptions] = useState(false);
    function handleClick(obj){
        setShowOptions(false);
        console.log('clicked by', obj);
    }
    const diplayOptions = props.options.map((item)=>{
        return(
            <span className={styles.item}
                onClick={()=>handleClick({
                    item: props.title,
                    sortBy: item
                })}
            >{item}</span>
        )
    })
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <span>{props.title}</span>
        <img src="../../images/downArrowIcon.png" alt="options" className={styles.icon}
            onClick={()=>setShowOptions(showOptions == true ? false : true)}
        />
      </div>
      {showOptions && <div className={styles.bottom}>
        {diplayOptions}
      </div>}
    </div>
  )
}
