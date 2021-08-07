import axios from "axios";
import TrashIcon from "@rsuite/icons/Trash";

const ReportTable = ({ reports, hours, token }) => {
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
    let resultsum = 0;
    let ArrayOfSums = [];
    for (let i = 0; i < 14; i++) {
      let resultsum = 0;
      for (let j = 0; j < ArrayOfArrays.length; j++) {
        // resultsum = resultsum + ArrayOfArrays[j][1][i];
        resultsum = resultsum + ArrayOfArrays[j].hourly_sales[i];
      }
      ArrayOfSums.push(resultsum);
    }
    for (const iterator of ArrayOfSums) {
      resultsum = resultsum + iterator;
    }
    console.log(ArrayOfSums[0][2]);
    return [ArrayOfSums, resultsum];
  };

  let deleteHandler = function (e) {
    let id = e.target.name;
    console.log(id);
    const config = { headers: { Authorization: "Bearer " + token } };
    axios.delete(
      `https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/${id}`,
      config
    );
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
                  <td className="border border-green-600 p-2">
                    {item.location}
                    <button
                      name={item.id}
                      onClick={deleteHandler}
                      className="text-red-400 pl-10"
                    >
                      X
                    </button>
                  </td>
                  {item.hourly_sales.map((my_number) => {
                    return (
                      <td className="border border-green-600 p-2">
                        {my_number}
                      </td>
                    );
                  })}
                  <td className="border border-green-600 p-2">
                    {calculateTotalRow(item.hourly_sales)}
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
