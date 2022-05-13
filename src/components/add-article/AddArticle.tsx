import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddArticle = () => {
    const [text, setText] = React.useState("");

    const handleChange = (value: any) => {
        setText(value);
    };

    return (
        <>
            <div>
                <h1>Article goes here...</h1>
                <ReactQuill value={text} onChange={handleChange} />
            </div>
            <div
                className="desc"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
        </>
    );
};

export default AddArticle;
