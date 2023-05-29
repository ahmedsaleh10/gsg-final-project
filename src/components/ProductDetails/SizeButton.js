import React from 'react'
import useStyles from './Styles';

const SizeButton = ({content,selected,onClick}) => {
  const classes = useStyles()
  const handleOnClick = () => {
    onClick(content);
  };

  return (
    <button onClick={handleOnClick} className={selected ? classes.SizeSelectedButton : classes.SizeUnselectedButton}>
      {content}
    </button>
  )
}

export default SizeButton