import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  const address = `${body.firstguest_address}, ${body.firstguest_city}, ${body.firstguest_state} ${body.firstguest_zipcode}`
  const message = `
  <h2>Primary Guest</h2>
  <ul>
  <li><strong>Name: </strong>${body.firstguest_name}</li>
  <li><strong>Adults: </strong>${body.adult_count}</li>
  <li><strong>Children: </strong>${body.children_count}</li>
  <li><strong>Kids: </strong>${body.kids_count}</li>
  <li><strong>Address:</strong> ${address}</li>
  <li><strong>Phone:</strong> ${body.firstguest_phone}</li>
  <li><strong>Email:</strong> ${body.firstguest_email}</li>
  </ul>
  <p><strong>Message to the Bride and Groom:</strong></p>
  <p>${body.notes}</p>
  `

  await mail.send({
    to: [`carlosandseanna@delgadoseverafter.us`],
    from: {
      email: 'carlosandseanna@delgadoseverafter.us',
      name: "Carlos and Seanna's Wedding",
    },
    subject: `RSVP: ${body.firstguest_name}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
