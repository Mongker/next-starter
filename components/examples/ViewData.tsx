import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { AppState } from '@core/interfaces';

interface IViewData {
  title: string;
}

const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.placeholderData,
  (error, lastUpdate, light, placeholderData) => ({ error, lastUpdate, light, placeholderData }),
);

const ViewData: React.FC<IViewData> = ({ title }: IViewData) => {
  const { error, placeholderData } = useSelector(selectData);

  return (
    <div>
      <h1>{title}</h1>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
};

export default ViewData;
