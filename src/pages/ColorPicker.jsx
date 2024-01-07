import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import Header from "../components/Header";

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`اپلیکیشن ها`} title={`انتخابگر رنگ`} />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className=" text-xl font-semibold mt-2 mb-4 text-gray-600 dark:text-gray-50">
              پالت انتخاب رنگ
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              change={change}
              inline
              enableRtl
            />
          </div>
          <div>
            <p className=" text-xl font-semibold mt-2 mb-4 text-gray-600 dark:text-gray-50">
              پالت خطی
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="palette"
              modeSwitcher={false}
              showButtons={false}
              change={change}
              inline
              enableRtl
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
