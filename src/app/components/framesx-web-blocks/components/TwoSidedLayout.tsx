import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';

export default function TwoSidedLayout({
  children,
  reversed,
  img,
  alt,
  box1logo,
  box2logo,
  box3logo,
  box4logo,
}: React.PropsWithChildren<{ reversed?: boolean, img: string, alt: string, box1logo: string, box2logo: string, box3logo: string, box4logo: string }>) {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center content vertically
        py: 5,
        gap: 4,
        [theme.breakpoints.up('md')]: {
          flexDirection: 'column',
          gap: 6,
        },
      })}
    >
      {/* Row containing text and image columns */}
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: reversed ? 'column-reverse' : 'column',
          alignItems: 'center',
          gap: 4,
          width: '100%',
          [theme.breakpoints.up('md')]: {
            flexDirection: reversed ? 'row-reverse' : 'row',
            gap: 6,
          },
        })}
      >
        {/* Text Column */}
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '90%',
            textAlign: 'center',
            flexShrink: 999,
            [theme.breakpoints.up('md')]: {
              minWidth: 420,
              maxWidth: '40ch',
              alignItems: 'flex-start',
              textAlign: 'initial',
            },
            [`& .${typographyClasses.root}`]: {
              textWrap: 'balance',
            },
          })}
        >
          {children}
        </Box>

        {/* Image Column */}
        <AspectRatio
          ratio={520 / 300}
          variant="outlined"
          maxHeight={400}
          sx={(theme) => ({
            width: '100%',
            maxWidth: 300,
            alignSelf: 'center',
            [theme.breakpoints.up('md')]: {
              alignSelf: 'initial',
              flexGrow: 1,
              maxWidth: '50%',
            },
            borderRadius: 'lg',
            bgcolor: 'background.level2',
            flexBasis: '50%',
          })}
        >
          <img src={img} alt={alt} />
        </AspectRatio>
      </Box>

      {/* Container with technologies logos below the two columns */}
      <Container
        sx={{
          backgroundImage: "linear-gradient(to right, #fde68a , #fb923c, #d97706, #92400e)",
          borderRadius: "10px",
          display: 'flex',
          width: '100%',
          height: '10vh', // Adjust height as needed
          justifyContent: 'space-evenly',
          flexWrap: 'wrap', // Allow wrapping if boxes don't fit in a single row
        }}
      >
        <Box
          sx={{
            width: { xs: '8vh', sm: '8vh', md: '10vh' },
            height: { xs: '8vh', sm: '8vh', md: '10vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p className='text-black underline'>Technologies:</p>
        </Box>
            <Box
              sx={{
                width: { xs: '8vh', sm: '8vh', md: '10vh' },
                height: { xs: '8vh', sm: '8vh', md: '10vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={box4logo} alt="Icon" width="72" height="72" />
            </Box>
        <Box
          sx={{
            width: { xs: '8vh', sm: '8vh', md: '10vh' },
            height: { xs: '8vh', sm: '8vh', md: '10vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={box3logo} alt="Icon" width="52" height="52" />
        </Box>
        <Box
          sx={{
            width: { xs: '8vh', sm: '8vh', md: '10vh' },
            height: { xs: '8vh', sm: '8vh', md: '10vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={box1logo} alt="Icon" width="52" height="52" />
        </Box>
          <Box
            sx={{
              width: { xs: '8vh', sm: '8vh', md: '10vh' },
              height: { xs: '8vh', sm: '8vh', md: '10vh' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={box2logo} alt="Icon" width="72" height="72" />
          </Box>
      </Container>
    </Container>
  );
}
