import { Document, Page } from "react-pdf";

export default function PDFViewer({ pdfPath }: { pdfPath: string }) {
  return (
    <div className="flex justify-center">
      <iframe
        src={pdfPath}
        width="45%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,

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
