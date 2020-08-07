import { INationalize, IGenderize, IAgify } from '@/src/types/api';
import axios, { AxiosResponse } from 'axios';

/* https://api.nationalize.io?name=michael */
export const nationalize = async (name: string) => {
  const url = 'https://api.nationalize.io';
  const params = { name };
  const res: AxiosResponse<INationalize> = await axios.get(url, { params });

  if (res.status === 200) {
    return res.data
  }

  return null;
}

/* https://api.genderize.io/?name=michael */
export const genderize = async (name: string) => {
  const url = 'https://api.genderize.io';
  const params = { name };
  const res: AxiosResponse<IGenderize> = await axios.get(url, { params });

  if (res.status === 200) {
    return res.data
  }
  return null;
}

/* https://api.agify.io/?name=michael */
export const agify = async (name: string) => {
  const url = 'https://api.agify.io';
  const params = { name };
  const res: AxiosResponse<IAgify> = await axios.get(url, { params });

  if (res.status === 200) {
    return res.data
  }
  return null;
}
