import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { contextMenuItems, ordersData, ordersGrid } from "../data/dummy";
import Headre from "../components/Header";
import Pager from "../utilities/Pager";

const Orders = () => {
  let grid;
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Headre category={`صفحه`} title={`سفارشات`} />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        allowFiltering
        enableRtl
        width={`auto`}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        contextMenuItems={contextMenuItems}
        pageSettings={{
          template: (pagerData) => Pager(pagerData, grid),
          pageSize: 5,
        }}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Sort,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
            Resize,
            ContextMenu,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
