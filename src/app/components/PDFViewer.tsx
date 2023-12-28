import { Document, Page } from "react-pdf";

export default function PDFViewer({ pdfPath }: { pdfPath: string }) {
  return (
    <div className="">
      <iframe
        src={pdfPath}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      />
    </div>
  );
}
