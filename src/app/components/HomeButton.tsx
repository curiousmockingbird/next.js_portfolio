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
  inline?: boolean;
};

export default function HomeButton({
  href = '/',
  tooltip = 'Home',
  ariaLabel = 'Go to home',
  inline = false,
}: HomeButtonProps) {
  const boxSx = inline
    ? { position: 'static' as const }
    : {
        position: 'fixed' as const,
        top: 16,
        left: {
          xs: 'calc((100vw - min(100vw, 1280px)) / 2 + 3rem)',
          sm: 'calc((100vw - min(100vw, 1280px)) / 2 + 3rem)',
          lg: 'calc((100vw - min(100vw, 1280px)) / 2 + 3rem)',
        },
        transform: { xs: 'translateX(-50%)', sm: 'none' },
        zIndex: 30,
      };

  return (
    <Box sx={boxSx}>
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
