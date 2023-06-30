import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NE1-FREELANCE',
  description: 'Freelancing Services',
}

type childrenProps = { children: React.ReactNode}
export default function RootLayout(props: childrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        </body>
    </html>
  )
}