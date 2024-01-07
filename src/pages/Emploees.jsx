import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import Header from "../components/Header";
const Emploees = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`صفحه`} title={`کارمندان`} />
      <GridComponent
        dataSource={employeesData}
        allowSorting
        allowPaging
        toolbar={["Search"]}
        width="auto"
        enableRtl
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Emploees;
