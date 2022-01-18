/**
 * Copyright 2016-present, Bkav Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author nhatpa@bkav.com on 16/04/2018.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import { Modifier, SelectionState } from 'draft-js';

const join = (listContentState) => {
  if (!listContentState || !listContentState[0]) {
    return null;
  }
  let contentState = listContentState[0];
  if (listContentState) {
    const contentStateLength = listContentState.length;
    for (let i = 1; i < contentStateLength; i++) {
      const contentStateItem = listContentState[i];
      const lastBlock = contentState.getLastBlock();
      const length = lastBlock.getLength();
      const lastBlockKey = lastBlock.getKey();
      const blockMapSubPage = contentStateItem.getBlockMap();
      const selection = SelectionState.createEmpty(lastBlockKey);

      const dataLastBlock = lastBlock.getData();
      contentState = Modifier.replaceWithFragment(
        contentState,
        selection.merge({
          anchorOffset: length,
          focusOffset: length,
        }),
        blockMapSubPage,
      );

      // Phải gán lại blockData vì replaceWithFragment sẽ làm mất data của block cuối
      // https://github.com/facebook/draft-js/blob/514490b1322e1c123524eae97d4aea25b4da16ce/src/model/transaction/insertFragmentIntoContentState.js#L26
      // Có function sẵn trong draftjs nhưng không dùng được
      contentState = Modifier.setBlockData(
        contentState,
        SelectionState.createEmpty(lastBlockKey),
        dataLastBlock,
      );
    }
  }
  return contentState;
};

export default join;
