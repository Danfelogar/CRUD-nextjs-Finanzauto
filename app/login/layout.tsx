import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex rounded-xl h-full p-4 bg-white">{children}</div>
    </div>
  );
}
