import './styles.css';

import { SectionProjects } from '../../sections/SectionProjects';
import { SectionSkills } from '../../sections/SectionSkils';
import { SectionStart } from '../../sections/SectionStart';
import { SectionSobre } from '../../sections/SectionSobre';
import { Aside } from '../../components/Aside';




export const Home = () => {
  return (
    <>
      <Aside/>
      <SectionStart/>
      <SectionSobre/>
      <SectionProjects/>
      <SectionSkills/>
    </>
  );
}
