import { google } from "googleapis";
export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    "",
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const sheets = google.sheets({ version: "v4", auth });
  let range;
  let values;
  if (data.type === "landing-page") {
    range = "Landing Page!A:E";
    values = [
      [
        data.name,
        data.email,
        data.number,
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString(),
      ],
    ];
  } else if (data.type === "relocation") {
    range = "Relocation!A:Z";
    values = [
      [
        data.name,
        data.email,
        data.telephone,
        data.movingFrom.address,
        data.movingFrom.postcode,
        data.movingFrom.city,
        data.movingFrom.country,
        data.movingTo.destCity,
        data.movingTo.country,
        data.moveDate,
        data.moveDescription,
        data.movePayer,
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString(),
      ],
    ];
  }

  const request = {
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: range,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    resource: {
      values: values,
    },
  };

  try {
    await sheets.spreadsheets.values.append(request);
    console.log("Data appended successfully");
    return Response.json({ message: "Form submitted successfully" });
  } catch (error:any) {
    console.error("Error appending data:", error.message);
    return Response.json({ message: "Error submitting form" });
  }
}
