import { Nunito } from "next/font/google"

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
