import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container } from "react-bootstrap";
import Page from "../Page";

const AddArticle = () => {
    const [text, setText] = React.useState("");

    const handleChange = (value: any) => {
        setText(value);
    };

    return (
        <Page title="Favorite Doctors">
            <Container>
                <div>
                    <h2
                        className="fw-bold text-center my-3"
                        style={{ color: "rgb(69, 142, 167)" }}
                    >
                        Create Article
                    </h2>
                    <ReactQuill value={text} onChange={handleChange} />
                </div>
                <div></div>
            </Container>
        </Page>
    );
};

export default AddArticle;

{
    /* <div className="desc" dangerouslySetInnerHTML={{ __html: text }}></div>; */
}
