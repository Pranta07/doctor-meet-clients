import { useState } from "react";

// Import Worker
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Button from "@mui/material/Button";

function ReportPdf() {
    // creating new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file onChange state
    const [pdfFile, setPdfFile] = useState(null);

    // pdf file error state
    const [pdfError, setPdfError] = useState("");

    // handle file onChange event
    const allowedFiles = ["application/pdf"];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        // console.log(selectedFile.type);
        if (selectedFile) {
            if (selectedFile && allowedFiles.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfError("");
                    setPdfFile(e.target.result);
                };
            } else {
                setPdfError("Not a valid pdf: Please select only PDF");
                setPdfFile("");
            }
        } else {
            console.log("please select a PDF");
        }
    };

    return (
        <div className="container">
            {/* Upload PDF */}
            <form>
                <Button variant="contained">Upload PDF</Button>

                <br></br>

                <input
                    type="file"
                    // className="form-control"
                    onChange={handleFile}
                ></input>

                {pdfError && <span className="text-danger">{pdfError}</span>}
            </form>

            {/* View PDF */}
            <div className="viewer">
                {/* render this if we have a pdf file */}
                {pdfFile && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={pdfFile}
                            plugins={[defaultLayoutPluginInstance]}
                        ></Viewer>
                    </Worker>
                )}

                {/* render this if we have pdfFile state null   */}
                {!pdfFile && <small>No file is selected yet</small>}
            </div>
        </div>
    );
}

export default ReportPdf;
