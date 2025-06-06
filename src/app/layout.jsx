import { Header } from "@/components/Header";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "React Recipies",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-white text-black">
                <Header />
                <main className="container mx-auto my-4 px-4 content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}