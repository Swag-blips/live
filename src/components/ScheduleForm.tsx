import { X } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface ScheduleForm {
  mode: "create" | "update";
  onClose?: () => void;
  preloadedData?: any;
  onComplete?: () => void;
}

interface Data {
  title: string;
  date: Date | null;
  time: Date | null;
  description: string;
}
const ScheduleForm = ({
  mode,
  onClose,
  onComplete,
  preloadedData,
}: ScheduleForm) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Data>({
    title: "",
    date: new Date(),
    time: new Date(),
    description: "",
  });

  const createSchedule = async () => {};

  console.log(data);
  return (
    <div className="fixed top-0 left-0 z-[300] w-full h-full p-4 bg-dark-overlay flex justify-center overflow-y-auto">
      <div className="bg-bgSecondary py-8 px-4 rounded-2xl h-fit w-full max-w-[400px]">
        <div className="flex justify-between items-center">
          <h1>Schedule live Streams</h1>
          <div
            onClick={onClose}
            className="bg-bgprimary size-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-primary cursor-pointer"
          >
            <X />
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, title: e.target.value })
            }
            className="block my-5 w-full h-[50px] text-sm bg-bgprimary px-2 rounded-md outline-none border border-gray-700 focus:border-primary"
          />
          <div className="flex justify-center">
            <DatePicker
              inline
              selected={data.date}
              minDate={new Date()}
              onChange={(value) => {
                setData({
                  ...data,
                  date: value,
                  time: value,
                });
              }}
              showTimeSelect
              timeIntervals={30}
              dateFormat={"h:mm a"}
            />
          </div>
          <textarea
            placeholder="live stream description"
            value={data.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setData({ ...data, description: e.target.value })
            }
            className="block my-5 w-full h-[100px] py-2 text-sm bg-bgprimary px-2 rounded-md outline-none border border-gray-700 focus:border-primary"
          ></textarea>
          <button
            onClick={createSchedule}
            className="block w-full bg-gradient-to-r from-primary to-blue-600 py-2 px-4 rounded-lg"
          >
            {mode === "create" ? "Create Now" : "Edit Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
