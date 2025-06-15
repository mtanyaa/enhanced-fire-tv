"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">

        <Image src="/user (2).png" alt="Profile" width={48} height={48} className="avatar" />
        <Image src="/input.png" alt="" width={32} height={32} />
        <Image src="/search.png" alt="" width={32} height={32} />

        <div className="icon-with-label">
          <Image src="/main.png" alt="Home" width={40} height={40} className="home-icon" />
          <span className="home-label">Home</span>
        </div>

        <Image src="/tv.png" alt="" width={32} height={32} />
        <Image src="/bookmark.png" alt="" width={32} height={32} />
        <Image src="/watchtogether.png" alt="" width={32} height={32} />
      </div>

     <div className="right">
  <Link href="https://enhanced-fire-tv.vercel.app/netflix">
    <Image src="/netflix.jpg" alt="Netflix" width={80} height={48} />
  </Link>
  <Link href="https://enhanced-fire-tv.vercel.app/prime">
    <Image src="/pv.png" alt="Prime Video" width={80} height={48} />
  </Link>
  <Link href="https://enhanced-fire-tv.vercel.app/hotstar">
    <Image src="/hotstar.jpeg" alt="Hotstar" width={80} height={48} />
  </Link>
  <Image src="/setting.png" alt="Settings" width={24} height={24} className="symbol" />
  <Image src="/dashboard.png" alt="Dashboard" width={24} height={24} className="symbol" />
</div>
    </nav>
  );
}
