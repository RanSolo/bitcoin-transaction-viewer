"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PiAnchorSimpleBold } from "react-icons/pi";
import Loading from "./loading";

const Component = () => {
  const { status, data: session } = useSession();
  const links = [{ href: "/", label: "Dashboard" }, { href: "/transactions", label: "Transactions" }];
  return (
    <nav className="flex bg-slate-400 space-x-6 border-b px-5 h-14 items-center">
      <Link href="/transactions">
        <PiAnchorSimpleBold className="text-2xl" />
      </Link>
      <ul className="flex items-center space-x-6">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link className="px-10 text-zinc-500 hover:text-zinc-800 transition-colors" href={href}>
              {label}
            </Link>
          </li>
        ))}
        <li className="flex space-x-6 items-center w-full">
          {status === "loading" && <Loading />}
          {status === "unauthenticated" && (
            <Link className="px-10 text-zinc-500 hover:text-zinc-800 transition-colors" href={"api/auth/signin"}>
              Log In
            </Link>
          )}
          {status === "authenticated" && (
            <>
              <Link className="px-10 text-zinc-500 hover:text-zinc-800 transition-colors" href={"api/auth/signout"}>
                Log Out
              </Link>
              <li>{session.user!.name}</li>
              <li>
                {session.user!.image && (
                  <Image className=" rounded" width={45} height={42} src={session.user!.image} alt="user avatar" />
                )}
              </li>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Component;
