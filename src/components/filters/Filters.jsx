import React from 'react'
import styles from './Filters.module.css'
import FilterChip from '../filterChip/FilterChip'
export default function Filters() {
    const handleView = (view)=>{
        console.log('get the view', view);
    }
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.box1}>
                    <img onClick={()=>handleView('grid')} className={styles.icon} src="../../images/gridIcon.png" alt="grid" />
                    <img onClick={()=>handleView('detail')} className={styles.icon} src="../../images/detailIcon.png" alt="detail" />
                </div>
                <div className={styles.box2}>
                    <FilterChip
                        title='Headphone type'
                        options={['in-ear', 'on-ear', 'over-ear']}
                    />
                    <FilterChip
                        title='Company'
                        options={['JBL', 'Sony', 'Boat', 'Zebronics', 'Marshall', 'Ptron']}
                    />
                    <FilterChip
                        title='Colour'
                        options={['Blue', 'Black', 'White', 'Brown']}
                    />
                    <FilterChip
                        title='Price'
                        options={['₹0 - ₹999', '₹1,000 - ₹9,999', '₹10,000 - ₹99,999']}
                    />
                </div>
                
                <div className={styles.box3}>
                    <FilterChip
                        title = 'Sort by'
                        options = {['Price: Lowest', 'Price: Highest', 'Name: A-Z', 'Name: Z-A']}
                    />
                    </div> 



                {/* <div className={styles.left}>
                    
                </div>*/}

            </div>
            {/* <div className={styles.bottom}>

            </div> */}
        </div>
    )
}
