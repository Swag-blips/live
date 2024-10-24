import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { ShieldPlus } from "lucide-react";
import ScheduleForm from "../../components/ScheduleForm";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useUser } from "@clerk/clerk-react";

const Schedule = () => {
  const [schedules, setSchedules] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayScheduleForm, setDisplayScheduleForm] =
    useState<boolean>(false);
  const [mode, setMode] = useState<"create" | "update">("create");
  const [preloadedData, setPreloadedData] = useState<any>(null);
  const { user } = useUser();

  console.log(user?.primaryEmailAddress?.emailAddress);
  const fetchData = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "schedules"),
        where("email", "==", user?.primaryEmailAddress?.emailAddress)
      );

      const querySnapshot = await getDocs(q);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSchedules(dataList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  console.log(schedules);
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

      {!loading && schedules.length && (
        <>
          <div className="my-5">
            <button className="py-2 px-5 bg-">Add Schedule</button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Schedule;
