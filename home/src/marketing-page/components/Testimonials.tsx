import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { LogoCompanies, useLogos } from './useLogos';

type Testimonial = {
  name: string,
  occupation: string,
  testimonial: string
  logo: LogoCompanies,
}

const userTestimonials: Testimonial[] = [
  {
    name: 'Darshan Thaker',
    occupation: 'Senior Director of Software Development',
    testimonial:
      "Luis is a great asset as a developer. I recommend him without hesitation. He is dependable, fast and delivers quality software. He is also willing and able to take on work in unfamiliar domains; ask for help as necessary and get it done. That plus his very engaging personality made him an integral member of our software team. ",
    logo: 'deepcell',
  },
  {
    name: 'Suchitra Manepalli',
    occupation: 'Senior Staff Software Engineer',
    testimonial:
      "As a project lead, I found Luis to be the easiest software developer to work with. If speed of development is your need, he is the one you need. He has got multiple years of Typescript and React experience. He has a great personality that goes along with his other virtues. If I have the opportunity, I will definitely hire him.",
    logo: 'deepcell',
  },
  {
    name: 'Adam Zeuske',
    occupation: 'Technical Lead',
    testimonial:
      'Luis has been a grade A human being, team member, and technology ace on my team at Homepoint. On day 2 Luis was willing and eager to engage on our project (front and back end), politely and effectively refactoring the Redux, fetch, and React hook/layout implementations. Furthermore, he graciously considered and accepted suggestions around Redux tooling and unit tests, integrating them seamlessly into his efforts. Luis has a great sense of humor, is willing to tackle the tough problems, is way too productive, and brings a great energy and vibe to the team! Most importantly, Luis exemplifies what it means to be a consultant. His mastery over front end tech hasn\'t seemed to diminish his capacity to listen and understand issues and then work with leaders and teammates to complete tasks and make recommendations.It\'s that combination of talent and professionalism that compels me to write this recommendation on Luis\' behalf. It\'s been a genuine pleasure getting to know him as a developer, leader, partner, and person. I am very much looking forward to the privilege of continuing to have him on my team!',
    logo: 'homepoint',

  },
  {
    name: 'Harrison Baxter',
    occupation: 'Software Engineer',
    testimonial:
      'Luis played a pivotal role in my training as well as general incorporation into the development team. He helped me understand many concepts ranging from the overarching structure of our business systems down to the finite details of operations. Luis’s personable and approachable demeaner as well as his in-depth understanding of the many systems and applications that the team interacts with makes him a great fit for any leadership role within the department.',
    logo: 'emerson',
  },
  {
    name: 'Ashenafi Anteneh',
    occupation: 'Software Engineer',
    testimonial:
      'Luis has been a good trainer from the day I started by allowing me to be exposed to different functionalities of GMS quickly. He also helped me to ease the learning curve I had to go through.',
    logo: 'emerson',
  },
  {
    name: 'Stephanie Seward',
    occupation: 'Engineering Manager',
    testimonial:
      'I definitely have had positive interactions in working with you. Your “grab the reigns” approach in asking for the feedback tells me that you’re willing to step up and step out.  Those are definitely things that I would expect to be looking for in candidates to drive up through the organization.',
    logo: 'emerson',
  },
];

export default function Testimonials() {
  const logos = useLogos()
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Link
          variant="h4"
          href="https://www.linkedin.com/in/luiscamachoiii/details/recommendations"
        >
          Testimonials
        </Link>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
          See what my colleagues have said about working with me!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={<Avatar alt={testimonial.name} src="/static/images/avatar/3.jpg" />}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[testimonial.logo]}
                  alt={`Logo ${index + 1}`}
                  style={{
                    height: '40px',
                    maxWidth: '80px',
                    opacity: 0.3,
                  }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
