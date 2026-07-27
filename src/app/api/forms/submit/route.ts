import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { formName, sourcePage, name, email, phone, monthlyCollections, message } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, Email, and Phone number are required fields.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    // Create entry in Payload CMS form-submissions collection
    const submission = await payload.create({
      collection: 'form-submissions',
      data: {
        formName: formName || 'Website Form',
        sourcePage: sourcePage || '/',
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        monthlyCollections: monthlyCollections || '',
        message: message || '',
        status: 'new',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Form submission received and stored successfully!',
      id: submission.id,
    })
  } catch (error: any) {
    console.error('[Form Submit API Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process submission' },
      { status: 500 },
    )
  }
}
