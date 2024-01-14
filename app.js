let employeeLabel = [], employeeSalaryData = [], employeeAgeData = [];

async function dummyChart(){
await getDummyData();

let ctx = document.getElementById("myChart");

let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: employeeLabel,
    datasets: [
      {
        label: "Employee Salary",
        data: employeeSalaryData,
        borderWidth: 1,
        backgroundColor: "blue",
      },
      {
        label: "Employee Age",
        data: employeeAgeData,
        borderWidth: 1,
        backgroundColor: "red",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
}

dummyChart()

//fetching data from dummy rest api 

async function getDummyData() {
  const apiUrl = "./data.json";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const barChartData = await response.json();
    const salary = barChartData.data.map((x) => x.employee_salary );
    const age = barChartData.data.map((x) => x.employee_age );
    const name = barChartData.data.map((x) => x.employee_name );

    employeeLabel = name
    employeeSalaryData = salary
    employeeAgeData = age

  } catch (error) {
    console.error("Failed to fetch data:", error);
  }


}

