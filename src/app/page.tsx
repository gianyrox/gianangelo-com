import Image from "next/image";
import PDFViewer from "./components/PDFViewer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <PDFViewer pdfPath="/GDD Resume 2024.pdf" />
    </div>
  );
}
