const ReportTable = ({ reports, hours }) => {
  // Funtion to calculate the total of all working hours
  let calculateTotalRow = function (numbers) {
    let x = 0;
    for (const i of numbers) {
      x = x + i;
    }

    return x;
  };

  // Funtion to calculate the total of locations for each hour + the total
  let calculateTotalColumn = function (ArrayOfArrays) {
    console.log(ArrayOfArrays);
    let resultsum = 0;
    let ArrayOfSums = [];
    for (let i = 0; i < 14; i++) {
      let resultsum = 0;
      for (let j = 0; j < ArrayOfArrays.length; j++) {
        resultsum = resultsum + ArrayOfArrays[j][1][i];
      }
      ArrayOfSums.push(resultsum);
    }
    for (const iterator of ArrayOfSums) {
      resultsum = resultsum + iterator;
    }
    console.log(ArrayOfSums[0][2]);
    return [ArrayOfSums, resultsum];
  };

  return (
    <div className="pt-6 pb-6 flex flex-col justify-center items-center justify-items-center">
      {reports.length == 0 ? (
        <h4 className="font-bold text-xl">No Cookie Stands Available</h4>
      ) : (
        <table className="w=1/2">
          <thead className="">
            <tr>
              {hours.map((item) => {
                return <th className="bg-green-500 p-2">{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {reports.map((item, i) => {
              let x = "";
              if (i % 2 == 0) {
                x = "bg-green-400 p-2";
              } else {
                x = "bg-green-300 p-2";
              }

              return (
                <tr className={x}>
                  <td className="border border-green-600 p-2">{item[0]}</td>
                  {item[1].map((my_number) => {
                    return (
                      <td className="border border-green-600 p-2">
                        {my_number}
                      </td>
                    );
                  })}
                  <td className="border border-green-600 p-2">
                    {calculateTotalRow(item[1])}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-green-500 p-2">
              <td className="border border-green-600 p-2">Totals</td>
              {calculateTotalColumn(reports)[0].map((number) => {
                return (
                  <td className="border border-green-600 p-2">{number}</td>
                );
              })}
              <td className="border border-green-600 p-2">
                {calculateTotalColumn(reports)[1]}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default ReportTable;
