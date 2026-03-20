import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-cyan-accent">404</h1>
      <h2 className="mb-2 text-2xl font-bold text-text-primary">
        Page not found
      </h2>
      <p className="mb-8 text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-cyan-accent px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
