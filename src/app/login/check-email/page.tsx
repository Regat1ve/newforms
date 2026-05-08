export default function CheckEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-2">
        <h1 className="text-2xl font-semibold">Check your email</h1>
        <p className="text-gray-600">
          A sign-in link has been sent to your email address.
        </p>
        <p className="text-sm text-gray-500">
          (In dev, the link is printed in the server console.)
        </p>
      </div>
    </main>
  );
}
