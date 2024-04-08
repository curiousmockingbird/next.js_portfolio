import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import {  useColorScheme } from '@mui/joy/styles';

export default function Toggle (){
    const { mode, setMode } = useColorScheme();

    return (
    <>
      <IconButton
        id="toggle-mode"
        size="lg"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === 'dark') {
            setMode('light');
          } else {
            setMode('dark');
          }
        }}
        className="absolute z-50 top-8 right-8 lg:right-16 rounded-full shadow-sm"

      >
        {mode === 'dark' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </>
    )
}