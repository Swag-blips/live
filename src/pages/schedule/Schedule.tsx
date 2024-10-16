import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { ShieldPlus } from "lucide-react";
import ScheduleForm from "../../components/ScheduleForm";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayScheduleForm, setDisplayScheduleForm] =
    useState<boolean>(false);
  const [mode, setMode] = useState<"create" | "update">("create");
  const [preloadedData, setPreloadedData] = useState<any>(null);

  console.log(displayScheduleForm);
  return (
    <Wrapper>
      {displayScheduleForm && (
        <ScheduleForm
          mode={mode}
          onClose={() => setDisplayScheduleForm(false)}
          preloadedData={preloadedData}
          onComplete={() => {}}
        />
      )}
      {!schedules.length && !loading && (
        <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
          <ShieldPlus size={100} className="text-primary" />
          <p className="text-gray-500">
            You have not scheduled any live stream
          </p>
          <button
            onClick={() => {
              setPreloadedData(null);
              setMode("create");
              setDisplayScheduleForm(!displayScheduleForm);
            }}
            className="py-2 px-5 bg-primary rounded-2xl"
          >
            Schedule Live Stream
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default Schedule;
