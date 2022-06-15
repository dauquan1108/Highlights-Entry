/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 6/15/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// styles
import styles from './styles/ItemEntry.module.scss'

function ItemEntry(props) {
	const {item, className} = props;
    return(
        <div className={classNames(styles['item-entry'], className)}>
	        <p>{item}</p>
        </div>
    );
}

ItemEntry.propTypes = {
	item: PropTypes.string,
};

ItemEntry.defaultProps = {};

export default ItemEntry;
