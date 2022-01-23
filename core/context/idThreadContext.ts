import { createContext } from 'react';

interface I_idThreadContext {
  id: string;
}
const idThreadContext: I_idThreadContext = {
  id: '',
};

export const IdThreadContext = createContext<I_idThreadContext>(idThreadContext);
