import * as React from 'react';

interface EmailTemplateProps {
  pickup_city: string,
  destination_city: string,
  trip_start_date: string,
  trip_start_time: string,
  trip_end_date: string,
  phone_number: number,
  status: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  pickup_city, destination_city, trip_start_date, trip_start_time, trip_end_date, phone_number, status
}) => (
  <div className="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <h2 className="color: #333; text-align: center;">🚖 New Enquiry at Tezz Travels</h2>
    <p className="font-size: 16px; color: #555;">A new travel enquiry has been submitted.</p>

    <div className="background: #f9f9f9; padding: 15px; border-radius: 8px;">
      <p><strong>📍 Pickup City:</strong> {pickup_city}</p>
      <p><strong>📍 Destination City:</strong> {destination_city}</p>
      <p><strong>📅 Trip Start Date:</strong> {trip_start_date}</p>
      <p><strong>⏰ Trip Start Time:</strong> {trip_start_time}</p>
      <p><strong>📅 Trip End Date:</strong> {trip_end_date}</p>
      <p><strong>📞 Phone Number:</strong> <a href="" className="color: #007bff;">{phone_number}</a></p>
      <p><strong>🫡 Status:</strong> {status}</p>
    </div>

    <p className="font-size: 14px; color: #888; text-align: center; margin-top: 20px;">This is an automated email from Tezz Travels.</p>
  </div>
);
