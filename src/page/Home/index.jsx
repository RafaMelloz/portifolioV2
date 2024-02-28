import './styles.css';

import { SectionProjects } from '../../sections/SectionProjects';
import { SectionSkills } from '../../sections/SectionSkils';
import { SectionStart } from '../../sections/SectionStart';
import { SectionSobre } from '../../sections/SectionSobre';
import { Aside } from '../../components/Aside';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {

  AOS.init();
 
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
