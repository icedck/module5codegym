import axios from "axios";

export async function getStaticProps() {
  return axios
    .get("http://localhost:3004/countries")
    .then((res) => {
      return {
        props: {
          data: res.data || [],
        },
      };
    })
    .catch((err) => {
      console.error("Failed to fetch data:", err);
      return {
        props: {
          data: [],
        },
      };
    });
}

export default function Home({ data }) {
  console.log("Data:", data);
  const covidData = Array.isArray(data) ? data : [];

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "24px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        Vietnam's COVID-19 Information
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "1.1rem",
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Confirmed
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Active
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Recovered
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Deaths
            </th>
          </tr>
        </thead>
        <tbody>
          {covidData.length > 0 ? (
            covidData.map((row, idx) => (
              <tr
                key={`${row.Date}-${idx}`}
                style={{ background: idx % 2 === 1 ? "#f0f0f0" : "#fff" }}
              >
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  {(() => {
                    const date = new Date(row.Date);
                    const day = date.getDate();
                    const month = date.getMonth() + 1;
                    const year = date.getFullYear();
                    return `${day}/${month}/${year}`;
                  })()}
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  {row.Confirmed}
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  {row.Active}
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  {row.Recovered}
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  {row.Deaths}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "16px" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
