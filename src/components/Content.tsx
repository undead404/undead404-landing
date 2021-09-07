import Family from './Family';
import Me from './me';
import Necrophag from './necrophag';
import Pets from './Pets';
import Thanks from './thanks';
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
