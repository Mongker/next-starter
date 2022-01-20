/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author linhnvg@bkav.com on 17/03/2021
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

/**
 * Trả về objectId từ url
 * VD:
 * - https://beta.vnreview.vn/thread/nhieu-chuyen-bay-tu-tp-hcm-ra-ha-noi-bi-huy.211106232550815 => 211106232550815
 * - https://beta.vnreview.vn/profile/troll-xe.140874927550937 => 140874927550937
 * @param path
 * @returns {string|null}
 */

// HungHVd: thêm locationPath để chủ động trong việc split path nào - mặc định path cuối cùng
const getIdByUrl = (path, locPath = 0) => {
  try {
    if (!path) return null;
    // Bóc tách url sau ký tự '/' lấy phần tử cuối
    const _paramArr = path ? path.split('/') : window.location.pathname.split('/');

    // Bóc tách url sau ký tự '.' lấy phần tử cuối
    const _dotArr = _paramArr[_paramArr.length - 1 - locPath].split('.');

    // Trả về objectId (entryId, userId, tagId...), đảm bảo luôn trả về objectId khác rỗng
    return _dotArr[_dotArr.length - 1] && _dotArr[_dotArr.length - 1] !== ''
      ? _dotArr[_dotArr.length - 1]
      : '.';
  } catch (exception) {
    return '.';
  }
};

export default getIdByUrl;
