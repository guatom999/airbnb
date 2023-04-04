import { Nunito } from "next/font/google"

export const metadata = {
  title: 'AirBnb',
  description: 'Air Bnb Clone',
}

const font = Nunito({
  subsets:["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
