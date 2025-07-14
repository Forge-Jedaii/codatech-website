"use client";
import Card from "../../components/ui/404ui";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card/>
      <div>
      <Link 
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md"
      >
        Retourner à l&apos;accueil
      </Link>
      </div>
    </div>
  );
}