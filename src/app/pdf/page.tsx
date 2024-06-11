import PdfViewer from '@/components/templates/PdfViewer'
import React from 'react'

export default function page() {
    return (
        <div>
            <PdfViewer url='https://pdfobject.com/pdf/sample.pdf' />
        </div>
    )
}
