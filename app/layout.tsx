import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Modal from "./components/modals/Modal"
import ClinetOnly from "./components/ClientOnly"
import Button from "./components/Button/Button"


export const metadata = {
  title: 'AirBnb',
  description: 'Air Bnb Clone',
}

const font = Nunito({
  subsets: ["latin"]
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
        <ClinetOnly>
          {/* <Modal isOpen={true} /> */}
          {/* <Navbar /> */}
          <Button className="" full={false} text="chon"/>
          {children}
          {/* คืออะไรหว่า children */}
        </ClinetOnly>
      </body>
    </html>
  )
}
