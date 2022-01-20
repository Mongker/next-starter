import React from 'react';
import { convertFromRaw } from 'draft-js';
import { wrapper } from 'core/store';
import { getDataEntryDetail } from 'core/actions';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { selectData } from 'core/selectors/examples/selecterData';
import getEntryContentRawToView from '../../core/utils/functions/getEntryContentRawToView';
import { stateToHTML } from 'draft-js-export-html';
import getIdByUrl from '../../core/utils/functions/getIdByUrl';

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
    context.store.dispatch(getDataEntryDetail(entryId));
    context.store.dispatch(END);
  }
  await context.store.sagaTask?.toPromise();
  return { props: { id: entryId } };
});

export default function ThreadDetail({ id }: IPropsThreadDetail): JSX.Element {
  const { Entry } = useSelector(selectData);
  const entry = Entry?.get(id);
  const title: string | unknown = Entry ? Entry.getIn([id, 'data', 'title']) || '' : '';
  const entryDraft: IEntryDraft | any = entry ? getEntryContentRawToView(entry) : null;
  const content = entryDraft && convertFromRaw(entryDraft.detail);
  const contentHTML = content ? stateToHTML(content) : '';
  return (
    <div className={'render-html'}>
      <div className={'content'}>
        <h1 className={'title'}>{typeof title === 'string' && title}</h1>
        {/*<div>{typeof content === 'object' && JSON.stringify(contentHTML, null, 10)}</div>*/}
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
    </div>
  );
}
