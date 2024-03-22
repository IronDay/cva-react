import img from "./assets/macbook.jpg";
import appleLogo from "./assets/apple.svg";
import furniture from "./assets/furniture.jpg";
import faq from "./assets/faq.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card
        title="Frequently Asked Questions"
        description="Update on safe shopping in
        our stores"
        intent="faq"
        type="faq"
        imgBgdropColor="#EFD4CE"
        textColor="#DA1A32"
        img={faq}
      />
    </div>
  );
}

export default App;
