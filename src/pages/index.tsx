import FooterComponent from "@studentambassador/components/footerComponent";
import HeroComponent from "@studentambassador/components/heroComponent";
import NavbarComponent from "@studentambassador/components/navbar";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <NavbarComponent />
      <HeroComponent />
      <FooterComponent/>
    </section>
  );
}
