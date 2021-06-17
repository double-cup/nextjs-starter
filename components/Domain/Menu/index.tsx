import { FC, Fragment } from 'react';
import { NavLink } from '../../Layout/NavLink';

export const Menu: FC = () => {
  return (
    <Fragment>
      <nav>
        <NavLink href={'/'}>Homepage</NavLink>
        <NavLink href={'/sign-in'}>Sign-in</NavLink>
        <NavLink href={'/editor'}>Editor</NavLink>
      </nav>
    </Fragment>
  );
};
