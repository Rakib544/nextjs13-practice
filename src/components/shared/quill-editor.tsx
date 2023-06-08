import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";

function Quill({
  defaultValue = "<div></div>",
  setEditorValue,
  shouldQuillEmpty,
  height = "100px",
  placeholder = "",
}: {
  defaultValue?: string;
  shouldQuillEmpty?: boolean;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
  height?: string;
  placeholder?: string;
}) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        ["bold", "italic"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
      clipboard: {
        matchVisual: false,
      },
    },
    formats: ["bold", "italic", "list"],
  });

  useEffect(() => {
    if (quill && defaultValue) {
      quill.on("text-change", () => {
        setEditorValue(quill.root.innerHTML);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, quill]);
  useEffect(() => {
    if (quill) {
      quill.root.innerHTML = defaultValue || "";
      quill.root.dataset.placeholder = placeholder;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue, quill]);

  useEffect(() => {
    if (shouldQuillEmpty) {
      quill.root.innerHTML = "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldQuillEmpty]);

  return (
    <div>
      <div ref={quillRef} style={{ height, tabSize: 4 }} />
    </div>
  );
}

export default Quill;
