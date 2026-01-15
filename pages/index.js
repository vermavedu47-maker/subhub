import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🚀 SubHub</h1>
      <p>India’s creator subscription platform</p>

      <div style={{ marginTop: 20 }}>
        <Link href="/login">
          <button style={{ marginRight: 10 }}>Login</button>
        </Link>

        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>

      <p style={{ marginTop: 30 }}>
        Buy & sell digital products, communities and subscriptions.
      </p>
    </div>
  );
}
