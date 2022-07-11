import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
//import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo, useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {

  const [ userStats , setUserStats ] = useState([]);

  const MONTHS = useMemo(
    () => [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    []
  );
  
  useEffect(() => {
    const getStats = async () => {
      try {
          const res = await userRequest.get("/users/stats");
          res.data.map((item) =>
            setUserStats((prev) =>[
              ...prev,
              {name: MONTHS[item._id - 1], "User Actifs": item.total},
            ])
          );
    }catch{}

    }
    getStats()

  }, [MONTHS])
  
  //console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart 
        data={userStats}
        title="Utilisateur :Données Analyses" 
        grid 
        dataKey="User Actifs"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
