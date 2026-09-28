import Image from "next/image";
import PDFViewer from "./components/PDFViewer";
import Component from "./components/Component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen mt-20">
      <div className="m-4">
        <p>
          DM me in{" "}
          <button className="title-button">
            <a href="https://www.skool.com/bucket-foundation-3283/about">
              Polymathic Skool
            </a>
          </button>{" "}
          if interested in any Projects.
        </p>
        <p className="text-center mt-2">
          <a className="underline" href="/profile">My Bucket profile</a>
        </p>
      </div>
      <div className="flex flex-col w-4/5 gap-10 p-4 m-4 lg:flex-row lg:w-4/5 lg:grid-cols-3 ">
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
