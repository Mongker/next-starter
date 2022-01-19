import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { selectData } from 'core/selectors/examples/selecterData';
import Counter from './Counter';
import Clock from './Clock';

interface PageProps {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

const Page: React.FC<PageProps> = ({ linkTo, NavigateTo, title }: PageProps) => {
  const { error, lastUpdate, light, placeholderData } = useSelector(selectData);

  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
};

export default Page;
