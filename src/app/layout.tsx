export const metadata = {
  title: 'Challenge',
  description: 'Edge & Node Product Team Interview Challenge',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
