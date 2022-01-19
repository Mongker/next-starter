import React, { useEffect } from 'react';
import { wrapper } from 'core/store';
import { getDataEntryDetail } from 'core/actions';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from 'core/selectors/examples/selecterData';

import getIdByUrl from 'core/utils/getIdByUrl';

// interface
interface IPropsThreadDetail {
  id: string;
}

interface IItemBlock {
  data: any;
  depth: number;
  entityRanges: Array<any>;
  inlineStyleRanges: Array<any>;
  text: string;
  type: string;
}

interface IEntryDraft {
  content: {
    blocks: Array<IItemBlock>;
    entityMap: Array<IItemBlock>;
  };
  detail: {
    blocks: Array<IItemBlock>;
    entityMap: Array<IItemBlock>;
  };
}

// Cách 1: Khoan!! => Chưa dùng được cách này :)
// export const getStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   if (!store.getState().Entry) {
//     store.dispatch(getDataEntryDetail());
//     store.dispatch(END);
//   }
//   await store.sagaTask?.toPromise();
// });

// Cách 2:
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const { id }: { id?: string } = context.query;
  const entryId = getIdByUrl(id);
  if (!context.store.getState().Entry && entryId) {
    context.store.dispatch(getDataEntryDetail(entryId, 'vnr_old_entry'));
    context.store.dispatch(END);
  }
  await context.store.sagaTask?.toPromise();
  console.log('context.store.getState().Entry', context.store.getState().Entry); // MongLV log fix bug
  return { props: { id: entryId } };
});

export default function ThreadDetail({ id }: IPropsThreadDetail): JSX.Element {
  const dispath = useDispatch();
  const { Entry } = useSelector(selectData);

  useEffect(() => {
    dispath(getDataEntryDetail(id, 'vnr_old_entry'));
  }, []);

  // const
  const title: string | unknown = Entry?.getIn([id, 'data', 'title']) || '';
  const detail: string | unknown = Entry?.getIn([id, 'data', 'detail']) || '';
  return (
    <div className={'render-html'}>
      <div className={'content'}>
        <h1 className={'title'}>{typeof title === 'string' && title}</h1>
        {/*<div>{typeof content === 'object' && JSON.stringify(contentHTML, null, 10)}</div>*/}
        {typeof detail === 'string' && <div dangerouslySetInnerHTML={{ __html: detail || '' }} />}
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
    </div>
  );
}