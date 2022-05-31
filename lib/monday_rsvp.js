////////////
// MONDAY
////////////
const MondayBoard = process.env.NEXT_PUBLIC_API_MONDAY_BOARD_RSVP
const MondayAuth = process.env.NEXT_PUBLIC_API_MONDAY_AUTH


export async function SendToMonday(data) {
  const query = `mutation ($guest: String!, $columnVals: JSON!) { create_item (board_id:${MondayBoard}, item_name:$guest, column_values:$columnVals) { id } }`
  const address = `${data.firstguest_address}, ${data.firstguest_city}, ${data.firstguest_state} ${data.firstguest_zipcode}`
  const vars = {
    guest: data.firstguest_name,
    columnVals: JSON.stringify({
      numbers: data.adult_count,
      numbers4: data.children_count,
      numbers9: data.kids_count,
      text: data.firstguest_phone,
      text8: data.firstguest_email,
      text0: data.notes,
      text7: address
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
