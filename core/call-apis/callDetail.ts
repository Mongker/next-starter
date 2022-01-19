import axios, { AxiosResponse } from 'axios';

export default async function getDetail(url: string) {
  try {
    return await axios.get(url, {
      headers: {
        'company-id': '563705867864535',
        'x-header': JSON.stringify({ 'app-id': 1, systemType: 'vnr', isAuto: false }),
      },
    });
  } catch (e) {
    console.error('e', e);
  }
  return {
    status: 400,
  };
}
