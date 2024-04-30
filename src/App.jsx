import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <section className="jobs-center">
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <JobInfo jobs={jobs} currentItem={currentItem}/>
  </section>
};
export default App;
