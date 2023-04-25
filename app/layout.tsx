import { Nunito } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar"
import Modal from "./components/modals/Modal"
import ClinetOnly from "./components/ClientOnly"
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"
// import Button from "./components/Button/Button"


export const metadata = {
  title: 'AirBnb',
  description: 'Air Bnb Clone',
}

const font = Nunito({
  subsets: ["latin"]
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
          {children}
        </ClinetOnly>
      </body>
    </html>
  )
}
