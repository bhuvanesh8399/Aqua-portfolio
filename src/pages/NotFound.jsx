import { Link } from "react-router-dom";
import PageWrapper from "../components/common/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper className="grid place-items-center">
      <div className="aqua-card max-w-xl p-8 text-center">
        <h1 className="text-5xl font-black text-white">404</h1>
        <p className="mt-4 text-slate-400">This page does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-bold text-ocean-950"
        >
          Go Home
        </Link>
      </div>
    </PageWrapper>
  );
}
