import Image from "next/image";
import PDFViewer from "./components/PDFViewer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <PDFViewer pdfPath="/GD Resume 10:2023.pdf" />
    </div>
  );
}
