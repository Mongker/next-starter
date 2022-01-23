import React, { useEffect, useState, ReactNode } from 'react';
import { IdThreadContext } from 'core/context/idThreadContext';

interface I_IdThreadProvider {
  id: string;
  children: ReactNode;
}
export default function IdThreadProvider({ id, children }: I_IdThreadProvider): JSX.Element {
  // const [entryId, setIdEntry] = useState('');
  // useEffect(() => {
  //   id && setIdEntry(id);
  // }, [id]);
  return <IdThreadContext.Provider value={{ id: id }}>{children}</IdThreadContext.Provider>;
}
