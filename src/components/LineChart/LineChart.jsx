import { LineChart as Lchart, Line } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "John", math: 85, english: 90, bangla: 88 },
  { id: 2, name: "Alice", math: 78, english: 82, bangla: 85 },
  { id: 3, name: "Bob", math: 92, english: 88, bangla: 91 },
  { id: 4, name: "Eva", math: 76, english: 80, bangla: 79 },
  { id: 5, name: "David", math: 89, english: 91, bangla: 92 },
  { id: 6, name: "Sophia", math: 67, english: 72, bangla: 70 },
  { id: 7, name: "Oliver", math: 95, english: 98, bangla: 97 },
  { id: 8, name: "Emma", math: 82, english: 85, bangla: 83 },
  { id: 9, name: "Liam", math: 88, english: 86, bangla: 89 },
  { id: 10, name: "Mia", math: 70, english: 75, bangla: 73 }
      ];

    return (
        <div>
            <Lchart width={500} height={400} data={studentData} >
                <Line dataKey="math" stroke='red'> </Line>
                <Line dataKey="english"> </Line>
                <Line dataKey="bangla"> </Line>
            </Lchart>
        </div>
    );
};

export default LineChart;