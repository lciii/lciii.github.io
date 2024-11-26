import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, ButtonProps, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { PropsWithChildren } from 'react';
import { Row } from '../../shared/Row';

const IconButtonLink = ({ children, ...props }: PropsWithChildren<IconButtonProps> & React.ComponentProps<'a'>) => {
  return <IconButton
    color="inherit"
    size="small"
    sx={{ alignSelf: 'center' }}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </IconButton>
}

const DownloadButton = (props: ButtonProps) => {
  return <Button size="small" variant="outlined" component="a" download {...props}>{props.children}<FileDownloadIcon /></Button>
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        pt: 8,
        pb: 16,
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
        >
          Let's Connect!
        </Typography>
      </Box>
      <Stack
        spacing={2}
        sx={{
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Link href='mailto:luiscamachoiii@gmail.com' underline='none'>
          <Typography >luiscamachoiii@gmail.com <EmailIcon sx={{ verticalAlign: 'top' }} /></Typography>
        </Link>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
        >
          <IconButtonLink
            href="https://www.facebook.com/LCamachoIII"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButtonLink>
          <IconButtonLink
            href="https://github.com/lciii"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButtonLink>
          <IconButtonLink
            href="https://youtube.com/playlist?list=PL75NYWDJQHD_8eqxU_tx7eozlIQ0hWM4M&si=DWEg-BobiKQ2VnDJ"
            aria-label="youtube"
          >
            <YouTubeIcon />
          </IconButtonLink>
          <IconButtonLink
            href="https://www.linkedin.com/in/luiscamachoiii/"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButtonLink>
        </Stack>
        <Row spacing={2} sx={{ '& *': { fontSize: '12px !important' } }}>
          <DownloadButton href="LCamachoIII-SoftEng-Resume.pdf">Short Resume</DownloadButton>
          <DownloadButton href="LuisCamachoIII_FullStack_Resume.pdf">Long Resume</DownloadButton>
        </Row>
      </Stack>
    </Container>
  );
}
