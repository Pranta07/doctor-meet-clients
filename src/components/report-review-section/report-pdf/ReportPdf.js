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
import { Container } from "@mui/material";

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
        <Container>
            <h6
                style={{
                    textAlign: "center",
                    color: "#2c90b9",
                }}
            >
                Report
            </h6>
            <h1
                style={{
                    textAlign: "center",
                    color: "#2c90b9",
                }}
            >
                Preview Report
            </h1>
            <Button variant="contained" sx={{ my: 3 }}>
                Upload PDF
            </Button>
            <input type="file" onChange={handleFile}></input>
            {pdfError && <span className="text-danger">{pdfError}</span>}
            {/* View PDF */}
            <div className="viewer">
                {pdfFile && (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={pdfFile}
                            plugins={[defaultLayoutPluginInstance]}
                        ></Viewer>
                    </Worker>
                )}

                {!pdfFile && <small>No file is selected yet</small>}
            </div>
        </Container>
    );
}

export default ReportPdf;
