import localFont from 'next/font/local';

export const lora = localFont({
  src: [
    {
      path: '../../public/fonts/Lora-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Lora-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-lora',
});

export const geist = localFont({
  src: [
    {
      path: '../../public/fonts/Geist-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: '../../public/fonts/JetBrainsMono-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-jetbrains',
});
