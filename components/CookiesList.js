const CookiesList = ({ cookies }) => {
  return (
    <div className="pt-6 pb-6 flex flex-col justify-center items-center justify-items-center">
      <h4>Report Table Coming Soon ...</h4>

      <table className="w=1/2 mx-auto my-4">
        <thead>
          <tr>
            <th className="border border-green-600 p-2">location</th>
            <th className="border border-green-600 p-2">minCustomer</th>
            <th className="border border-green-600 p-2">maxCusomter</th>
            <th className="border border-green-600 p-2">avgCookies</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((item) => {
            return (
              <tr>
                <td className="border border-green-600 p-2">{item.location}</td>
                <td className="border border-green-600 p-2">
                  {item.minCustomer}
                </td>
                <td className="border border-green-600 p-2">
                  {item.maxCusomter}
                </td>
                <td className="border border-green-600 p-2">
                  {item.avgCookies}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CookiesList;
