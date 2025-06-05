import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <SignIn />
    </section>
  );
}
