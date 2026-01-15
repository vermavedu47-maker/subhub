import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Login to SubHub</h2>
      <button
        onClick={() =>
          signIn("credentials", {
            email: "admin@subhub.in",
            password: "admin123",
            callbackUrl: "/"
          })
        }
        style={{ padding: 10, marginTop: 20 }}
      >
        Login as Admin
      </button>
    </div>
  );
}
