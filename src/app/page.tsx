import Image from "next/image";
import PDFViewer from "./components/PDFViewer";
import Component from "./components/Component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen mt-20">
      <div className="m-4">
        <p>
          Email Gianangelo @ {"  "}
          <button className="line">
            <a href="mailto:gianyrox@gmail.com">gianyrox@gmail.com</a>
          </button>{" "}
          for more information.
        </p>
      </div>
      <div className="grid w-1/2 grid-cols-3 gap-4 p-4 m-4 ">
        <div className="w-full h-full component-container">
          <Component id={0} />
        </div>
        <div className="w-full h-full component-container">
          <Component id={1} />
        </div>
        <div className="w-full h-full component-container">
          <Component id={2} />
        </div>
        {/* <PDFViewer pdfPath="/GDD Resume 2024.pdf" /> */}
      </div>
    </div>
  );
}
