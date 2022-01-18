/* eslint-disable react/jsx-no-bind,react/prop-types,no-unused-vars */

import { ContentState, convertFromRaw, convertToRaw } from 'draft-js';
import markdownToDraft from './markdown-to-draft';
import join from './join';
import draftJSDecompression from './draftJSDecompression';

export default function getEntryContentRawToView(entry) {
  const fVersion = entry.getIn(['data', 'fVersion']);
  const hasDetail = entry.getIn(['data', 'hasDetail']);
  const detail = entry.getIn(['data', 'detail']) || '';
  const content = entry.getIn(['data', 'content']) || '';
  const contentMd = entry.getIn(['data', 'contentMd']) || '';
  const detailMd = entry.getIn(['data', 'detailMd']) || '';
  let contentRaw;
  let detailRaw;
  switch (fVersion) {
    case '1': {
      contentRaw = draftJSDecompression(content, contentMd);
      detailRaw = detail ? draftJSDecompression(detail, detailMd) : {};
      break;
    }
    default: {
      let contentState;
      try {
        contentState = convertFromRaw(JSON.parse(decodeURIComponent(content)));
      } catch (e1) {
        try {
          contentState = convertFromRaw(JSON.parse(content));
        } catch (e2) {
          try {
            contentState = convertFromRaw(markdownToDraft(content));
          } catch (e3) {
            contentState = ContentState.createFromText(content);
          }
        }
      }
      contentRaw = convertToRaw(contentState);
      const detail = hasDetail && detail;
      if (hasDetail && detail !== '') {
        let detailState;
        try {
          detailState = convertFromRaw(JSON.parse(decodeURIComponent(detail)));
        } catch (e4) {
          try {
            detailState = convertFromRaw(JSON.parse(detail));
          } catch (e5) {
            try {
              detailState = convertFromRaw(markdownToDraft(detail));
            } catch (e6) {
              detailState = ContentState.createFromText(detail);
            }
          }
        }
        contentState = join([contentState, detailState]);
        detailRaw = convertToRaw(contentState);
      } else {
        detailRaw = convertToRaw(ContentState.createFromText(''));
      }
      break;
    }
  }
  return {
    content: contentRaw,
    detail: detailRaw,
  };
}
