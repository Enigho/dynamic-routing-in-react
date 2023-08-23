import Navbar from './components/Navbar'
import './globals.css'
import { Handjet } from 'next/font/google'
import Footer from './components/Footer'

const hand = Handjet({ subsets: ['latin'] })

export const metadata = {
  title: 'my first react',
  description: 'this is react and nextjs',
}

export default function RootLayout({ children }) {
  const myName = 'eni'
  return (
    <html lang="en">
      <body className={hand.className}>
      {/* <Navbar /> */}
      <main>
      {children}


      </main>
      
        {/* <Footer /> */}
      </body>
    </html>
  )
}
