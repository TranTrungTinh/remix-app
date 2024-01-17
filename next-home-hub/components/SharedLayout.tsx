import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export default function SharedLayout({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white shadow ring-2 ring-purple-500 dark:bg-gray-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <div className="relative sm:px-12 mt-20 sm:mt-32 mx-auto max-w-2xl lg:max-w-4xl px-4">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
