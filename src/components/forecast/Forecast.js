import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayOfAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayOfAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfAWeek) 
  );

  return ( 
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-items">
                  <img
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label htmlFor="" className="day">{forecastDays[idx ]}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
