"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img src="/user (2).png" alt="err" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
        <img src="/input.png" alt="err" />
        <img src="/search.png" alt="err" />
        <div className="icon-with-label">
          <img src="/main.png" alt="Home" className="home-icon" />
          <span className="home-label">Home</span>
        </div>
        <img src="/tv.png" alt="err" />
        <img src="/bookmark.png" alt="err" />
        <img src="/watchtogether.png" alt="err" />
      </div>
      <div className="right">
        <Link href="/netflix"><img src="/netflix.jpg" alt="Netflix" /></Link>
        <Link href="/prime"><img src="/pv.png" alt="Prime Video" /></Link>
        <Link href="/hotstar"><img src="/hotstar.jpeg" alt="Hotstar" /></Link>
         <img src="/setting.png" className="symbol" alt="err" />
          <img src="/dashboard.png" className="symbol" alt="err" />

      </div>
    </div>
  );
}
