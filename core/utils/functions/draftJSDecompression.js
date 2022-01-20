/* eslint-disable react/jsx-no-bind,react/prop-types,no-unused-vars */
/**
 * Copyright 2016-present, Bkav Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author nhatpa@bkav.com on 14/06/2018.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

const getMutabilityByEntityType = (type) => {
  switch (type) {
    case 'MENTION': {
      return 'SEGMENTED';
    }
    case 'LINK': {
      return 'MUTABLE';
    }
    case 'IMAGE': {
      return 'IMMUTABLE';
    }
    case 'EMOJI': {
      return 'IMMUTABLE';
    }
    default: {
      return 'IMMUTABLE';
    }
  }
};

export default function draftJSDecompression(_plainText = '', metaData, onlyBlock) {
  /*eslint-disable */
    // const contentCompressiont = {"blocks":[{"key":2,"data":{},"type":"blockquote"}],"entities":[{"length":14,"offset":30,"data":{"id":"492718648208202"},"type":"MENTION"},{"length":17,"offset":45,"data":{"id":"211243671496598"},"type":"MENTION"},{"length":13,"offset":74,"data":{"id":"351981159851912"},"type":"MENTION"},{"length":4,"offset":91,"data":{"url":"https://draftjs.org/"},"type":"LINK"}],"inlineStyles":[{"length":8,"offset":8,"style":"font-size:36"},{"length":3,"offset":103,"style":"BOLD"},{"length":3,"offset":103,"style":"ITALIC"},{"length":3,"offset":103,"style":"UNDERLINE"},{"length":3,"offset":103,"style":"color:#fcdc00"}]};
    // TODO NamVH: Fix tạm lỗi _plainText = null.
    let plainText = (_plainText !== null) ? _plainText : '';
    const contentRaw = {
        blocks: [],
        entityMap: [],
    };

    let metaDataObj;
    let entities;
    let inlineStyles;
    let blocks;
    try {
        metaDataObj = JSON.parse(metaData);
        // Sắp xếp theo thứ tự đúng, việc này sẽ tránh việc phải tìm kiếm ở dưới
        entities = metaDataObj.entities && metaDataObj.entities.sort((entity1, entity2) => entity1.offset - entity2.offset) || [];
        inlineStyles = metaDataObj.inlineStyles && metaDataObj.inlineStyles.sort((style1, style2) => style1.offset - style2.offset) || [];
        blocks = metaDataObj.blocks && metaDataObj.blocks.sort((block1, block2) => block1.key - block2.key) || [];
    } catch (e) {
        // console.error('Lỗi JSON.parse metaData');
        entities = [];
        inlineStyles = [];
        blocks = [];
    }

    const entityCount = entities.length;
    const inlineStyleCount = inlineStyles.length;

    const blocksText = onlyBlock ? [plainText] : plainText.split(String.fromCharCode(10));

    let iEntity = 0;
    let iInlineStyle = 0;
    let iBlock = 0;

    let sumLength = 0;

    blocksText.forEach((blockText, index) => {
        const entityRanges = [];
        const inlineStyleRanges = [];
        const blockLength = blockText.length;
        const blockOffset = sumLength + blockLength;
        while (iEntity < entityCount) {
            // Xét entity có thuộc block đang thêm vào hay ko, thông quá offset của nó
            if (entities[iEntity].offset < blockOffset) {
                // true
                entityRanges.push({
                    key: iEntity,
                    length: entities[iEntity].length,
                    offset: entities[iEntity].offset - sumLength,
                });
                contentRaw.entityMap.push({
                    data: entities[iEntity].data ? entities[iEntity].data : {},
                    mutability: getMutabilityByEntityType(entities[iEntity].type),
                    type: entities[iEntity].type ? entities[iEntity].type : 'NO-CONVERT',
                });
                iEntity++;
            } else {
                break;
            }
        }
        while (iInlineStyle < inlineStyleCount) {
            // Xét inlineStyle có thuộc block đang thêm vào hay ko, thông quá offset của nó
            if (inlineStyles[iInlineStyle].offset < blockOffset) {
                // true
                inlineStyleRanges.push({
                    length: inlineStyles[iInlineStyle].length,
                    offset: inlineStyles[iInlineStyle].offset - sumLength,
                    style: inlineStyles[iInlineStyle].style,
                });
                iInlineStyle++;
            } else {
                break;
            }
        }

        const block = blocks[iBlock];
        const blockRaw = {
            depth: block && block.depth || 0,
            text: blocksText[index],
            entityRanges,
            inlineStyleRanges,
        };
        // Nếu block không có trong metaDataObj(khi data = {} và type = 'unstyled')
        // Thì đặt mặc định
        if(block && block.key === index) {
            // false
            blockRaw.data = block.data || {};
            blockRaw.type = block.type || 'unstyled';
            iBlock++;
        } else {
            // true
            blockRaw.data = {};
            blockRaw.type = 'unstyled';
        }
        contentRaw.blocks.push(blockRaw);
        sumLength += blockLength + 1;
    });

    return contentRaw;
}

// metaDataObj.blocks.forEach((text, index) => {
//     const entityRanges = [];
//     const inlineStyleRanges = [];
//     const blockLength = blocksText[index].length;
//     const blockOffset = sumLength + blockLength;
//     while (iEntity < entityCount) {
//         if (entities[iEntity].offset < blockOffset) {
//             entityRanges.push({
//                 key: iEntity,
//                 length: entities[iEntity].length,
//                 offset: entities[iEntity].offset - sumLength,
//             });
//             contentRaw.entityMap.push({
//                 data: entities[iEntity].data ? entities[iEntity].data : {},
//                 mutability: entities[iEntity].mutability ? entities[iEntity].mutability : 'IMMUTABILITY',
//                 type: entities[iEntity].type ? entities[iEntity].type : 'NO-CONVERT',
//             });
//             iEntity++;
//         } else {
//             break;
//         }
//     }
//     while (iInlineStyle < inlineStyleCount) {
//         if (inlineStyles[iInlineStyle].offset < blockOffset) {
//             inlineStyleRanges.push({
//                 length: inlineStyles[iInlineStyle].length,
//                 offset: inlineStyles[iInlineStyle].offset - sumLength,
//                 style: inlineStyles[iInlineStyle].style,
//             });
//             iInlineStyle++;
//         } else {
//             break;
//         }
//     }
//     contentRaw.blocks.push({
//         data: block.data,
//         depth: block.depth,
//         text: blocksText[index],
//         entityRanges,
//         inlineStyleRanges,
//
//     });
//     sumLength += blockLength + 1;
// });
