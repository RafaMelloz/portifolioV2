import './styles.css';

import { SectionProjects } from '../../sections/SectionProjects';
import { SectionSkills } from '../../sections/SectionSkils';
import { SectionStart } from '../../sections/SectionStart';
import { SectionSobre } from '../../sections/SectionSobre';




export const Home = () => {
  return (
    <>
      <SectionStart/>
      <SectionSobre/>
      <SectionProjects/>
      <SectionSkills/>
    </>
  );
}
