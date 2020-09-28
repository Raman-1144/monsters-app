import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';
import Grid from '@material-ui/core/Grid';
export const CardList = props => {
    console.log(props)
return <Grid className='card-list' xs={4}>
    {
     props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
  }
</Grid>
}