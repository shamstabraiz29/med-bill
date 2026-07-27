import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || ''
    
    let formName = ''
    let sourcePage = ''
    let name = ''
    let email = ''
    let phone = ''
    let monthlyCollections = ''
    let message = ''
    let resumeUrl = ''

    const payload = await getPayload({ config })

    let resumeMediaId: number | undefined = undefined

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      formName = (formData.get('formName') as string) || ''
      sourcePage = (formData.get('sourcePage') as string) || ''
      name = (formData.get('name') as string) || ''
      email = (formData.get('email') as string) || ''
      phone = (formData.get('phone') as string) || ''
      monthlyCollections = (formData.get('monthlyCollections') as string) || ''
      message = (formData.get('message') as string) || ''
      
      const file = formData.get('resume') as any
      const passedResumeUrl = (formData.get('resumeUrl') as string) || ''

      if (file && typeof file === 'object' && typeof file.arrayBuffer === 'function') {
        try {
          const arrayBuffer = await file.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)
          const rawName = file.name || 'resume.pdf'

          // Save file to public/uploads/
          const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true })
          }

          const safeFileName = `${Date.now()}-${rawName.replace(/[^a-zA-Z0-9.-]/g, '_')}`
          const filePath = path.join(uploadsDir, safeFileName)
          fs.writeFileSync(filePath, buffer)

          resumeUrl = `/uploads/${safeFileName}`

          // Create entry in Payload Media collection for interactive click & download in Admin
          const mediaDoc = await payload.create({
            collection: 'media',
            data: {
              alt: `${name} - Resume CV (${rawName})`,
            },
            file: {
              data: buffer,
              name: safeFileName,
              mimetype: file.type || 'application/pdf',
              size: buffer.length,
            },
          })
          if (mediaDoc && mediaDoc.id) {
            resumeMediaId = Number(mediaDoc.id)
          }
        } catch (fileErr) {
          console.error('[Error Creating Media Document]:', fileErr)
          resumeUrl = passedResumeUrl || (file.name ? file.name : '')
        }
      } else if (typeof file === 'string' && file.trim().length > 0) {
        resumeUrl = file.trim()
      } else {
        resumeUrl = passedResumeUrl
      }
    } else {
      const body = await req.json()
      formName = body.formName || ''
      sourcePage = body.sourcePage || ''
      name = body.name || ''
      email = body.email || ''
      phone = body.phone || ''
      monthlyCollections = body.monthlyCollections || ''
      message = body.message || ''
      resumeUrl = body.resumeUrl || ''
    }

    // Validation: Name and Email are required; Phone is optional
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and Email address are required fields.' },
        { status: 400 },
      )
    }

    // Categorize Form Submission
    let formCategory: 'careers' | 'consultation' | 'audit' | 'general' = 'general'
    const lowerForm = (formName + ' ' + sourcePage).toLowerCase()

    if (lowerForm.includes('career') || lowerForm.includes('job') || resumeUrl || resumeMediaId) {
      formCategory = 'careers'
    } else if (lowerForm.includes('audit') || lowerForm.includes('assessment')) {
      formCategory = 'audit'
    } else if (lowerForm.includes('consult') || lowerForm.includes('quote') || lowerForm.includes('pric') || lowerForm.includes('specialty')) {
      formCategory = 'consultation'
    }

    // 1. Save entry to Master Collection (form-submissions)
    const submission = await payload.create({
      collection: 'form-submissions',
      data: {
        formCategory,
        formName: formName || 'Website Form',
        sourcePage: sourcePage || '/',
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : '',
        monthlyCollections: monthlyCollections || '',
        message: message || '',
        resumeUrl: resumeUrl || '',
        ...(resumeMediaId ? { resumeMedia: resumeMediaId } : {}),
        status: 'new',
      },
    })

    // 2. Save entry to Dedicated Category Collection
    try {
      if (formCategory === 'careers') {
        await payload.create({
          collection: 'careers-submissions',
          data: {
            formName: formName || 'Careers Job Application Form',
            sourcePage: sourcePage || '/bellmedex-careers',
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : '',
            resumeUrl: resumeUrl || '',
            ...(resumeMediaId ? { resumeMedia: resumeMediaId } : {}),
            message: message || '',
            status: 'new',
          },
        })
      } else if (formCategory === 'consultation') {
        await payload.create({
          collection: 'consultation-submissions',
          data: {
            formName: formName || 'Consultation Request Form',
            sourcePage: sourcePage || '/',
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : '',
            monthlyCollections: monthlyCollections || '',
            message: message || '',
            status: 'new',
          },
        })
      } else if (formCategory === 'audit') {
        await payload.create({
          collection: 'audit-submissions',
          data: {
            formName: formName || 'Audit Request Form',
            sourcePage: sourcePage || '/',
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : '',
            monthlyCollections: monthlyCollections || '',
            message: message || '',
            status: 'new',
          },
        })
      }
    } catch (catErr) {
      console.error('[Error saving to category submission collection]:', catErr)
    }

    return NextResponse.json({
      success: true,
      message: 'Form submission received and stored successfully!',
      id: submission.id,
      resumeUrl,
    })
  } catch (error: any) {
    console.error('[Form Submit API Error]:', error)
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to process submission' },
      { status: 500 },
    )
  }
}
