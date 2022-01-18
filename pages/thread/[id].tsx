import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { convertFromRaw } from 'draft-js';
import renderHTML from 'react-render-html';
import { wrapper } from '@core/store';
import { getDataEntryDetail } from '@core/actions';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '@core/selectors/examples/selecterData';
import getEntryContentRawToView from '@core/utils/getEntryContentRawToView';
// import AppEditor from '@components/Thread';
import { stateToHTML } from 'draft-js-export-html';

const ThreadDetail: NextPage = () => {
  const dispatch = useDispatch();
  const { Entry } = useSelector(selectData);
  const entry = Entry?.get('140737488446508');
  const entryDraft = React.useMemo(() => (entry ? getEntryContentRawToView(entry) : null), [entry]);
  debugger; // Todo by MongLV
  const content = entryDraft && convertFromRaw(entryDraft.detail);
  const contentHTML = content ? stateToHTML(content) : '';
  console.log('contentHTML', contentHTML); // MongLV log fix bug
  useEffect(() => {
    !!Entry && dispatch(getDataEntryDetail());
  }, []);

  return (
    <div className={'render-html'}>
      <div className={'content'}>{renderHTML(contentHTML)}</div>
      <style jsx>{`
        .render-html {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .content {
          width: 50%;
          margin: 0 auto;
          background-color: aliceblue;
          padding: 5px;
        }
      `}</style>
      {/*<AppEditor initialData={detail} />*/}
    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().Entry) {
    store.dispatch(getDataEntryDetail());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default ThreadDetail;
