import { Toaster } from "react-hot-toast";
import { FormPoliticalPartyNew } from "../components/forms/form-political-party-new";

export default function PoliticalPartyPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Political Party</h1>
      <FormPoliticalPartyNew />
      <Toaster />
    </main>
  );
}
