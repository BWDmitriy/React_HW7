import React from 'react';
import { Button } from '../Button';
import { iconTypes } from '../../constants/icons';
import styles from './MarkList.module.scss';
import CustomCheckbox from './CustomCheckbox';

export class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickClose = () => {
    this.props.removeItem(this.props.id);
  }

  render () {
    return(
      <li className={styles.listItem}>
        <CustomCheckbox/>
        <div className={styles.listItemValueWrapper}>{this.props.item.value}</div>
        <Button size="small" onClick={this.onClickClose} iconType={iconTypes.cross} />
      </li>
    );
  }
}