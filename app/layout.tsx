import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"

export const metadata = {
  title: 'AirBnb',
  description: 'Air Bnb Clone',
}

const font = Nunito({
  subsets:["latin"]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // console.log("children is ======>" , children.props.childProp)
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
