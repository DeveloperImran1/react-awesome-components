import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

  const mathMarksData = [
        { student: 'Student 1', marks: 85 },
        { student: 'Student 2', marks: 90 },
        { student: 'Student 3', marks: 75 },
        { student: 'Student 4', marks: 88 },
        { student: 'Student 5', marks: 92 },
        { student: 'Student 6', marks: 78 },
        { student: 'Student 7', marks: 85 },
        { student: 'Student 8', marks: 82 },
        { student: 'Student 9', marks: 88 },
        { student: 'Student 10', marks: 90 }
      ];
      
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey='marks' stroke='red'></Line>
                <XAxis></XAxis>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;

