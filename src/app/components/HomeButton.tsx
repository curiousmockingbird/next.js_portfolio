'use client'

import * as React from 'react';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import { MdArrowBack } from 'react-icons/md';
import { logFromApp } from './framesx-web-blocks/utils/logger';

type HomeButtonProps = {
  href?: string;
  tooltip?: string;
  ariaLabel?: string;
};

export default function HomeButton({
  href = '/',
  tooltip = 'Home',
  ariaLabel = 'Go to home',
}: HomeButtonProps) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        // Mobile: center horizontally; larger screens: align with content container
        left: {
          xs: '50%',
          sm: '1.5rem', // matches px-6
          lg: 'calc((100vw - min(100vw, 1280px)) / 2 + 3rem)', // container gutter + lg:px-12
        },
        transform: { xs: 'translateX(-50%)', sm: 'none' },
        zIndex: 30,
      }}
    >
      <Tooltip title={tooltip} variant="soft" placement="right">
        <Link href={href} aria-label={ariaLabel}>
          <IconButton
            variant="soft"
            color="neutral"
            size="lg"
            sx={{ borderRadius: '50%' }}
            onClick={() => logFromApp('Home')}
          >
            <MdArrowBack size={22} />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );
}
