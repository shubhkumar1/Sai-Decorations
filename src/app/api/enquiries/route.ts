import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createEnquiry } from '@/lib/firebase/firestore';
import { appendEnquiryToGoogleSheet } from '@/lib/google-sheets';

// Zod Validation Schema
const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required (min 2 characters)'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  eventType: z.string().min(2, 'Event type is required'),
  eventDate: z.string().min(4, 'Event date is required'),
  venueCity: z.string().min(2, 'Venue location or city is required'),
  guestCount: z.number().min(10, 'Guest count must be at least 10'),
  budgetRange: z.string().min(2, 'Budget range is required'),
  servicesNeeded: z.array(z.string()).min(1, 'Please select at least one service'),
  message: z.string().optional(),
  website_hp: z.string().optional() // Honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check
    if (body.website_hp && body.website_hp.length > 0) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    const validationResult = enquirySchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Save to Firestore
    const enquiryId = await createEnquiry({
      name: data.name,
      phone: data.phone,
      email: data.email,
      eventType: data.eventType,
      eventDate: data.eventDate,
      venueCity: data.venueCity,
      guestCount: data.guestCount,
      budgetRange: data.budgetRange,
      servicesNeeded: data.servicesNeeded,
      message: data.message,
      status: 'New'
    });

    // Append to Google Sheet (async backup)
    await appendEnquiryToGoogleSheet({
      id: enquiryId,
      name: data.name,
      phone: data.phone,
      email: data.email,
      eventType: data.eventType,
      eventDate: data.eventDate,
      venueCity: data.venueCity,
      guestCount: data.guestCount,
      budgetRange: data.budgetRange,
      servicesNeeded: data.servicesNeeded,
      message: data.message,
      status: 'New',
      createdAt: new Date().toISOString()
    });

    // Construct WhatsApp pre-filled text
    const waText = encodeURIComponent(
      `Hello Sai Decorations! I submitted a quote request on your website:\n` +
      `• Name: ${data.name}\n` +
      `• Phone: ${data.phone}\n` +
      `• Event: ${data.eventType} on ${data.eventDate}\n` +
      `• Location: ${data.venueCity}\n` +
      `• Guests: ${data.guestCount}\n` +
      `• Budget: ${data.budgetRange}\n` +
      `• Services: ${data.servicesNeeded.join(', ')}\n` +
      `• Notes: ${data.message || 'None'}\n\n` +
      `Please confirm availability and best discounted quote.`
    );

    const whatsappUrl = `https://wa.me/919431104229?text=${waText}`;

    return NextResponse.json(
      {
        success: true,
        enquiryId,
        whatsappUrl,
        message: 'Your enquiry has been submitted successfully!'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API /api/enquiries POST Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing enquiry' },
      { status: 500 }
    );
  }
}
