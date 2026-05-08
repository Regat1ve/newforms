import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-semibold">newforms</h1>
        <p className="text-gray-600 max-w-md">
          A 152-ФЗ-compliant alternative to Google Forms with a built-in
          spreadsheet-style admin view.
        </p>
      </div>
      <Link
        href="/login"
        className="rounded bg-black px-4 py-2 text-white text-sm"
      >
        Admin sign in →
      </Link>
    </main>
  );
}
