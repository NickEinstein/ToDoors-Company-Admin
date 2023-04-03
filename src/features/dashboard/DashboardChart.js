// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { Column } from "@ant-design/plots";

// const DemoColumn = () => {
//   const data = [
//     {
//       type: "家具家电",
//       sales: 38,
//     },
//     {
//       type: "粮油副食",
//       sales: 52,
//     },
//     {
//       type: "生鲜水果",
//       sales: 61,
//     },
//     {
//       type: "美容洗护",
//       sales: 145,
//     },
//     {
//       type: "母婴用品",
//       sales: 48,
//     },
//     {
//       type: "进口食品",
//       sales: 38,
//     },
//     {
//       type: "食品饮料",
//       sales: 38,
//     },
//     {
//       type: "家庭清洁",
//       sales: 38,
//     },
//   ];
//   const config = {
//     data,
//     xField: "type",
//     yField: "sales",
//     label: {
//       // 可手动配置 label 数据标签位置
//       position: "middle",
//       // 'top', 'bottom', 'middle',
//       // 配置样式
//       style: {
//         fill: "#FFFFFF",
//         opacity: 0.6,
//       },
//     },
//     xAxis: {
//       label: {
//         autoHide: true,
//         autoRotate: false,
//       },
//     },
//     meta: {
//       type: {
//         alias: "类别",
//       },
//       sales: {
//         alias: "销售额",
//       },
//     },
//   };
//   return <Column {...config} />;
// };

// ReactDOM.render(<DemoColumn />, document.getElementById("container"));

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
// import { Dashboard } from "@mui/icons-material";

const DashboardChart = ({ companyMonthly, companyMonthlyTrips }) => {
  const [dataz, setDataz] = useState([]);

  const brandColor = "#0C3BAA";
  const paletteSemanticRed = "#F4664A";

  const getMonth = (val) => {
    if (val == 1) return "Jan";
    if (val == 2) return "Feb";
    if (val == 3) return "Mar";
    if (val == 4) return "Apr";
    if (val == 5) return "May";
    if (val == 6) return "Jun";
    if (val == 7) return "Jul";
    if (val == 8) return "Aug";
    if (val == 9) return "Sept";
    if (val == 10) return "Oct";
    if (val == 11) return "Nov";
    if (val == 12) return "Dec";
  };

  const data2 = companyMonthly
    ? companyMonthly?.map((e) => ({
        year: getMonth(e._id.month),
        value: e?.total_earning || e?.trips_count,
      }))
    : [];

  console.log(data2);

  let data = [
    {
      year: "Jan",
      value: 0,
    },
    {
      year: "Feb",
      value: 0,
    },
    {
      year: "Mar",
      value: 0,
    },
    {
      year: "Apr",
      value: 0,
    },
    {
      year: "May",
      value: 0,
    },

    {
      year: "Jun",
      value: 0,
    },
    {
      year: "Jul",
      value: 0,
    },
    {
      year: "Aug",
      value: 0,
    },
    {
      year: "Sept",
      value: 0,
    },
    {
      year: "Oct",
      value: 0,
    },

    {
      year: "Nov",
      value: 0,
    },

    {
      year: "Dec",
      value: 0,
    },
  ];

   data = data.map((obj) => {
    const newDataObj = data2.find((newObj) => newObj.year === obj.year);
    console.log(newDataObj);
    if (newDataObj) {
      return { ...obj, value: newDataObj.value };
    } else {
      return obj;
    }
  });

  

  // console.log(updatedArray);

  // const config = {
  //   data,
  //   xField: "year",
  //   yField: "value",
  //   // seriesField: "year",
  //   legend: false,

  //   // {
  //   //   position: "top-left",
  //   // },
  //   yAxis: {
  //     grid: {
  //       line: false,
  //       // line: {
  //       //   style: {
  //       //     stroke: "black",
  //       //     lineWidth: 2,
  //       //     lineDash: [4, 5],
  //       //     strokeOpacity: 0.7,
  //       //     shadowColor: "black",
  //       //     shadowBlur: 10,
  //       //     shadowOffsetX: 5,
  //       //     shadowOffsetY: 5,
  //       //     cursor: "pointer",
  //       //   },
  //       // },
  //     },
  //   },
  //   // color: ({ type }) => {
  //   //   if (type === "10-30分" || type === "30+分") {
  //   //     return paletteSemanticRed;
  //   //   }

  //   //   return brandColor;
  //   // },

  //   //   };
  //   //   return <Bar {...config} />;
  // };
  // const paletteSemanticRed = "#F4664A";
  // const brandColor = "#5B8FF9";
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      // if (type) {
      //   return paletteSemanticRed;
      // }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    yAxis: {
      label: false,
      grid: {
        line: false,
        // line: {
        //   style: {
        //     stroke: "black",
        //     lineWidth: 2,
        //     lineDash: [4, 5],
        //     strokeOpacity: 0.7,
        //     shadowColor: "black",
        //     shadowBlur: 10,
        //     shadowOffsetX: 5,
        //     shadowOffsetY: 5,
        //     cursor: "pointer",
        //   },
        // },
      },
    },
  };

  return (
    <Column
      {...config}
      onReady={(plot) => {
        plot.on("plot:click", (evt) => {
          const { x, y } = evt;
          const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
        });
      }}
    />
  );
};
export default DashboardChart;

// ReactDOM.render(<DemoColumn />, document.getElementById("container"));
