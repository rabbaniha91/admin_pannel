import {
  RichTextEditorComponent,
  Inject,
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import Header from "../components/Header";

const Editor = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`اپلیکیشن ها`} title={`ویرایشگر متن`} />
      <RichTextEditorComponent
      backgroundColor={{modeSwitcher: true}}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
