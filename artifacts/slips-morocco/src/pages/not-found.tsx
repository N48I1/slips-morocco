import { Layout } from "@/components/Layout";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-heading font-bold text-[#082A43] mb-4">404</h1>
        <p className="text-xl text-[#102432]/70 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="bg-[#078CC4] text-white px-6 py-3 rounded-full font-medium hover:bg-[#078CC4]/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </Layout>
  );
}
