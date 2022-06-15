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
// import PropTypes from 'prop-types';

// component
import ItemEntry from './itemEntry';

// styles
import styles from './styles/HighightsEntry.module.scss';

function HighlightsEntry() {
	const listEntry = [
		{id: '1', title: 'item1'},
		{id: '2', title: 'item2'},
		{id: '3', title: 'item3'},
		{id: '4', title: 'item4'},
		{id: '5', title: 'item5'},
		{id: '6', title: 'item6'}
	];

	// ref
	const contentItemEntry = React.useRef(null);

	React.useEffect(() => {
		if(listEntry.length !== 0) {
			let startHlFeature = 1;
			let startHlNormal = 1;
			const nodeListNormal = contentItemEntry.current.childNodes;
			let timeoutSwapNode;
			let createTimeout = setTimeout(function changePosition() {
			const pendingNode = nodeListNormal[0].firstElementChild; // Lấy item chờ
			const nodeSwap = nodeListNormal[startHlNormal];
			nodeSwap.insertBefore(pendingNode, nodeSwap.firstElementChild); // Lấy item chờ chèn vào trước vị trí được chọn
			nodeSwap.firstElementChild.style.opacity = 1;
			nodeSwap.lastElementChild.style.opacity = 0;
			timeoutSwapNode = setTimeout(() => {
			    nodeListNormal[0].appendChild(nodeSwap.lastElementChild);
			}, 1000);
			startHlFeature++;
			startHlNormal++;
			if (startHlFeature >= listEntry.length) {
			    startHlFeature = 0;
			}
			if (startHlNormal >= listEntry.length) {
			    startHlNormal = 1;
			}
			createTimeout = setTimeout(changePosition, 5000);
		}, 5000);
			return () => {
				clearTimeout(createTimeout);
				clearTimeout(timeoutSwapNode);
			};
		}
		return () => null;
	}, [contentItemEntry?.current?.childNodes]);

    return(
        <div className={styles['highlights-entry']} ref={contentItemEntry}>
	        {
	        	listEntry.map((item) =>
		            <ItemEntry key={item.id} item={item.title} className={styles['entry-items']}/>
	            )
	        }
        </div>
    );
}

HighlightsEntry.propTypes = {};

HighlightsEntry.defaultProps = {};

export default HighlightsEntry;
