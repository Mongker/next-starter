import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { convertFromRaw } from 'draft-js';
// import renderHTML from 'react-render-html';
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
  const title = Entry?.getIn(['140737488446508', 'data', 'title']);
  const entryDraft = React.useMemo(() => (entry ? getEntryContentRawToView(entry) : null), [entry]);
  debugger; // Todo by MongLV
  // @ts-ignore
  const content = entryDraft && convertFromRaw(entryDraft.detail);
  const contentHTML = content ? stateToHTML(content) : '';
  console.log('contentHTML', contentHTML); // MongLV log fix bug
  useEffect(() => {
    !!Entry && dispatch(getDataEntryDetail());
  }, []);
  return (
    <div className={'render-html'}>
      <div className={'content'}>
        <h1 className={'title'}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </div>
      <style jsx>{`
        .render-html {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          text-align: center;
        }
        .content {
          width: 50%;
          margin: 0 auto;
          background-color: aliceblue;
          padding: 5px;
          -webkit-box-shadow: 5px 5px 15px 5px #000000;
          box-shadow: 5px 5px 15px 5px #000000;
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
