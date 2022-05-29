////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_RSVP
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH


export async function SendToMonday(data) {
  const query = `mutation ($guest: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$guest, column_values:$columnVals) { id } }`
  const vars = {
    guest: data.firstguest_name,
    columnVals: JSON.stringify({
      numbers: Number(data.adult_count) + 1,
      numbers4: data.children_count,
      numbers9: data.kids_count,
      text: data.firstguest_phone,
      text8: data.firstguest_email,
      text0: data.notes,
      text7: data.firstguest_address
    }),
  }
  fetch('https://api.monday.com/v2', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${MondayAuth}`,
    },
    body: JSON.stringify({
      query: query,
      variables: JSON.stringify(vars),
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(JSON.stringify(res, null, 2)))
}
