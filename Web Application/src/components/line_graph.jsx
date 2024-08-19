/* eslint-disable react/prop-types */
import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = ({ data, style }) => {
  console.log(style);

  const getColorScheme = (style) => {
    switch (style) {
      case 'autumn':
        return 'accent'; // Adjust based on your preferred color scheme for 'autumn'
      case 'dark2':
        return 'dark2'; // Adjust based on your preferred color scheme for 'dark2'
      case 'category10':
        return 'category10'; // Adjust based on your preferred color scheme for 'category10'
      case 'brown_blueGreen':
        return 'brown_blueGreen'; // Adjust based on your preferred color scheme for 'brown_blueGreen'
      default:
        return 'category10'; // Default color scheme from Nivo
    }
  };

  const colorScheme = getColorScheme(style);

  return (
    <div style={{ height: '400px', width: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Week',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Measurement (cm)',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        lineWidth={4}
        colors={{ scheme: colorScheme }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: -40,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionConfig="gentle"
      />
    </div>
  );
};

export default MyResponsiveLine;
