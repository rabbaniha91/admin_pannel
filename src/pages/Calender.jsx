import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import Header from "../components/Header";
const Calender = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`اپلیکیشن ها`} title={`تقویم`} />
      <div>
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          enableRtl
          locale="fa"
          headerRows={[Agenda, Day, Week, WorkWeek, Month]}
          
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calender;
