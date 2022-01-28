import Chart from "../components/graph";
import FeaturedInfo from "../components/featured";
import "./home.css";
import { userData } from "../fakedata";
import WidgetSm from "../components/widgetSm";
import WidgetLg from "../components/widgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}