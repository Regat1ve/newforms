import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        action={async (formData) => {
          "use server";
          await signIn("nodemailer", {
            email: formData.get("email"),
            redirectTo: "/admin",
          });
        }}
        className="w-full max-w-sm space-y-4"
      >
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-gray-600">
            We&apos;ll email you a magic link.
          </p>
        </div>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-black"
        />
        <button
          type="submit"
          className="w-full rounded bg-black px-3 py-2 text-white"
        >
          Send magic link
        </button>
      </form>
    </main>
  );
}
