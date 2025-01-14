import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`${payload.name} ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Example = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Reset active index when data changes
    setActiveIndex(0);
  }, [data]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  // Add a check to ensure data has non-zero values
  const validData = data.filter(item => item.value > 0);

  return (
    <div className='w-[100%] h-[400px]'>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={400}>
          {validData.length > 0 && (
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={validData}
              cx="50%"
              cy="50%"
              innerRadius={140}
              outerRadius={160}
              fill="#0B4618"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;