


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>nav layout inner  item</h2>
        {children}
       </>
  );
}
