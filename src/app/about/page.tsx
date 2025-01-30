'use client'

import Typography from '@mui/joy/Typography';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';

const ResponsivePage = dynamic(() => import('./components/ResponsivePage'), { ssr: false });

export default function About() {


    return (
            <>
            <Typography
                level="body-xs"
                sx={{
                    position: 'fixed',
                    zIndex: 999,
                    top: '2rem',
                    left: '1rem',
                }}
            >
                <Link href={'/'}> <ArrowBack sx={{ fontSize: 40 }} /> </Link>
            </Typography>
            <ResponsivePage/>
            </>
    );
};


