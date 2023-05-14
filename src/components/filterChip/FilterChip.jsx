import React, { useState, useContext, useEffect } from 'react'
import styles from './FilterChip.module.css'
import { UserContext } from '../../App';

export default function FilterChip(props) {

  const [showOptions, setShowOptions] = useState(false);
  const { filters, setFilters } = useContext(UserContext);
  const [highlight, setHighlight] = useState(false);
  const [itemHighlight, setItemHighLight] = useState(false);

  // console.log('Inside filter chip', props)
  // console.log('checking filters', filters)

  useEffect(() => {
    let checkHighlight = false;
    // let checkItemHighlight = false;
    filters.forEach((item) => {
      let itemKey = Object.keys(item)[0];
      let itemValue = item[itemKey];
      // console.log('item key', item)
      if (itemKey == props.title) {
        // console.log('Inside checking: ', itemValue)
        if (itemValue != 'none') {
          checkHighlight = true;
        }
      //   props.options.forEach((propVal)=>{
      //     if(propVal == itemValue)
      //     checkItemHighlight = true;
      //   })

      }

    })
    setHighlight(checkHighlight)
    // setItemHighLight(checkItemHighlight)
  }, [filters])








  function handleClick(filterQuery, filterValue) {
    setShowOptions(false);
    const query = filterQuery
    const value = filterValue
    console.log('clicked by', query, value);

    const newObj = { [query]: value }
    let pushFlag = true;
    let newFilter = [];
    let currFilter = filters;

    currFilter.forEach(item => {
      let ObjKey = Object.keys(newObj)[0];
      let ObjValue = newObj[ObjKey];
      let itemKey = Object.keys(item)[0];
      let itemValue = item[itemKey];

      if (ObjKey == itemKey) {
        if (ObjValue == itemValue) {
          newFilter.push({
            [ObjKey]: 'none'
          })
        }
        else {
          currFilter[itemKey] = ObjValue;
          pushFlag = false;
          newFilter.push({
            [ObjKey]: ObjValue
          })
        }

      }
      else {
        newFilter.push({
          [itemKey]: itemValue
        })
      }

    });
    setFilters(newFilter);
    // console.log(currFilter);
    // console.log('new filter', newFilter)


  }























  const diplayOptions = props.options.map((item) => {
    return (
      <span className={`${styles.item} ${itemHighlight && styles.itemHighlight}`}
        onClick={() => handleClick(props.title, item)}
      >{item}</span>
    )
  })
  return (
    <div className={styles.main}>
      <div className={`${highlight && styles.highlight} ${styles.top}`}>
        <span>{props.title}</span>
        <img src="../../images/downArrowIcon.png" alt="options" className={styles.icon}
          onClick={() => setShowOptions(showOptions == true ? false : true)}
        />
      </div>
      {showOptions && <div className={styles.bottom}>
        {diplayOptions}
      </div>}
    </div>
  )
}
