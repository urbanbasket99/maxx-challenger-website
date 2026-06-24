function IndustryTable({ title, data }) {

  const headers = Object.keys(data[0]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-8">
          {title}
        </h2>

        <table className="w-full bg-white rounded-2xl overflow-hidden">

          <thead>
            <tr className="bg-[#123A68] text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="text-left p-5"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b">

                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-5"
                  >
                    {row[header]}
                  </td>
                ))}

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </section>
  );
}

export default IndustryTable;