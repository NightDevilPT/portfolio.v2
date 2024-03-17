import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <section className={`w-full h-auto bg-base-100 rounded-md shadow-lg shadow-black/30 p-5`}>
      <HeaderComponent title="About Us" />
    </section>
  );
}
