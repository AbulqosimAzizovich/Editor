import React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-documenteditor";
import "./App.css";

function App() {
  let editorObj: DocumentEditorContainerComponent | null;
  const onSave = () => {
    editorObj?.documentEditor.save("Sample", "Docx");
  };
  return (
    <div className="App">
      <DocumentEditorContainerComponent
        ref={(ins) => (editorObj = ins)}
        height="920px"
        enableToolbar={true}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      >
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>

      {/* 
      <div className="nimadur__div">
        <button
          onClick={onSave}
          style={{ marginBottom: 10 }}
          className="nimadur"
        >
          Save
        </button>
      </div> */}
    </div>
  );
}

export default App;
