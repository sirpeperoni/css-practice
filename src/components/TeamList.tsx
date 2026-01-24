import { Grid } from './Grid';
import teamImg1 from '../assets/team/Picture (1).png';
import teamImg2 from '../assets/team/Picture (2).png';
import teamImg3 from '../assets/team/Picture (3).png';
import teamImg4 from '../assets/team/Picture (4).png';
import teamImg5 from '../assets/team/Picture (5).png';
import teamImg6 from '../assets/team/Picture (6).png';
import { Tile } from './Tile';

const teamMembers = [
  {
    image: teamImg1,
    name: 'John Smith',
    position: 'CEO and Founder',
    about: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },
  {
    image: teamImg2,
    name: 'Jane Doe',
    position: 'Director of Operations',
    about: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
  },
  {
    image: teamImg3,
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    about: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
  },
  {
    image: teamImg4,
    name: 'Emily Johnson',
    position: 'PPC Manager',
    about: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
  },
  {
    image: teamImg5,
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    about:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
  },
  {
    image: teamImg6,
    name: 'Sarah Kim',
    position: 'Content Creator',
    about: '2+ years of experience in writing and editing\nSkilled in creating compelling, SEO-optimized content for various industries',
  },
];

export const TeamList = () => {
  return (
    <Grid col={3} gap={40}>
      {teamMembers.map(member => {
        return <Tile image={member.image} name={member.name} position={member.position} about={member.about} />;
      })}
    </Grid>
  );
};
