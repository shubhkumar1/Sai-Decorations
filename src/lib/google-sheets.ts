import { Enquiry } from '@/types';

export async function appendEnquiryToGoogleSheet(
  enquiry: Enquiry,
  webhookUrl?: string
): Promise<boolean> {
  const targetUrl =
    webhookUrl ||
    process.env.GOOGLE_SHEET_WEBHOOK_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK;

  if (!targetUrl) {
    console.log('No Google Sheet webhook URL configured. Skipping sheet sync.');
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: enquiry.name,
      phone: enquiry.phone,
      email: enquiry.email || 'N/A',
      eventType: enquiry.eventType,
      eventDate: enquiry.eventDate,
      venueCity: enquiry.venueCity,
      guestCount: enquiry.guestCount,
      budgetRange: enquiry.budgetRange,
      servicesNeeded: enquiry.servicesNeeded.join(', '),
      message: enquiry.message || 'N/A',
      status: enquiry.status || 'New',
      source: enquiry.source || 'Website Quote Builder'
    };

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.ok;
  } catch (error) {
    console.error('Error appending enquiry to Google Sheet:', error);
    return false;
  }
}
