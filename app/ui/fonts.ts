// app/ui/fonts.ts
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';  // Add Lusitana font import

// Export the fonts
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] }); // Specify weights 400 (normal) and 700 (bold)