import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="nf-kanji" aria-hidden="true">崩</span>
      <p className="eyebrow"><span className="eyebrow-num">404</span> PAGE NOT FOUND</p>
      <h1>This page went<br /><span>off the map.</span></h1>
      <p>The page you are looking for may have moved or does not exist.</p>
      <Link href="/" className="button button-primary"><ArrowLeft size={16} /> Back to home</Link>
    </main>
  );
}
