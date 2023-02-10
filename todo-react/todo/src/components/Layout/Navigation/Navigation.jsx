import React from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <div className={s.icons}>
        <div className={s.icon}><Link to="/"><ListAltIcon className={s.icon__image}/></Link></div>
        <div className={s.icon}><Link to="/basket"><DeleteIcon className={s.icon__image}/></Link></div>
      </div>
    </div>
  )
}

export default Navigation