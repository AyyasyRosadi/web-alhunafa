'use client'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PdfViewer({ url }: { url: string }) {
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                <div className="w-[100%]">
                    <Viewer fileUrl={url} />
                </div>
            </Worker>
        </div>
    )
}
