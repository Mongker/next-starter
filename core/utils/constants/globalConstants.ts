/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 21/01/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

interface I_GLOBAL_CONSTANTS {
  URL_API: string;
  COMPANY_ID: string;
  AVATAR_DEFAULT: string;
}

const GLOBAL_CONSTANTS: I_GLOBAL_CONSTANTS = {
  URL_API: `https://service.vnreview.vn`,
  COMPANY_ID: '563705867864535',
  AVATAR_DEFAULT: 'https://vnreview.vn/fonts/AvatarDefaultNotLogin.svg',
};

export default GLOBAL_CONSTANTS;
