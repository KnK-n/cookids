import { Header } from "./components/layout/header";
import { Recipe } from "./components/recipes";

export default function Home() {
  return (
    <main>
      <Header />
      {/* ↓test */}
      <Recipe />
    </main>
  );
}
