import { EmailTemplate } from '@/app/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("Request received:", req);
  try {
    // Parse the JSON data from the request body
    const { pickup, destination, tripStartDate, tripStartTime, tripEndDate, phoneNumber } = await req.json();

    // Send the email via Resend API
    const { data, error } = await resend.emails.send({
      from: 'Tezz travels <onboarding@resend.dev>',
      to: ['tej123infotravels@gmail.com'], // Change to the recipient email
      subject: 'New Enquiry from Tej Travels',
      react: EmailTemplate({pickup_city: pickup, destination_city: destination, trip_start_date: tripStartDate, trip_start_time: tripStartTime, trip_end_date: tripEndDate, phone_number: phoneNumber, status: 'New Enquiry'}),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in sending email:", error);
    return new Response(JSON.stringify({ error: "An error occurred while sending the email." }), { status: 500 });
  }
}
