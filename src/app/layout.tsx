import '../styles/global.css'

export const metadata = {
  title: 'Challenge',
  description: 'Edge & Node Product Team Interview Challenge',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{}}>
      <body
        style={{
          background: 'url(/images/Background.jpg) no-repeat center fixed',
          backgroundSize: 'cover',
        }}
        className="px-[76px] py-[96px]"
      >
        {children}
      </body>
    </html>
  )
}
