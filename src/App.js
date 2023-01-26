import images from "./components/image";
import { animetxts } from "./components/image";
import ImageCarousel from "./components/ImageCarousel";
export default function App() {
  return (
    <div className="App">
      <ImageCarousel images={images} animetxts={animetxts} />
    </div>
  );
}
