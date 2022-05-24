import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  await mail.send({
    to: `${body.firstguest_email}`,
    from: { email: 'c23delgado@gmail.com', name: 'Carlos Delgado III' },
    replyTo: {
      email: 'c23delgado@gmail.com',
      name: 'Carlos Delgado III',
    },
    dynamicTemplateData: {
      "subject": "Confirming your RSVP for Carlos and Seanna's Wedding on Nov 21",
      "first_name": body.firstguest_name.split(' ')[0]
    },
    templateId: process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID,
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
