import Family from './Family';
import Me from './Me';
import Necrophag from './Necrophag';
import Pets from './Pets';
import Thanks from './Thanks';
import YouMustHear from './YouMustHear';

export default function MyContent(): JSX.Element {
  return (
    <>
      <Me />
      <YouMustHear />
      <Necrophag />
      <Family />
      <Pets />
      <Thanks />
    </>
  );
}
