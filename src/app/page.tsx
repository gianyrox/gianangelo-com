import Image from "next/image";
import PDFViewer from "./components/PDFViewer";
import Component from "./components/Component";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen columns-1">
      <div className="grid items-center justify-center w-2/3 gap-10 p-4 m-4 md:grid-cols-3 sm:grid-rows-3 h-1/3">
        <Component id={0} />
        <Component id={1} />
        <Component id={2} />
        {/* <PDFViewer pdfPath="/GDD Resume 2024.pdf" /> */}
      </div>
    </div>
  );
}
