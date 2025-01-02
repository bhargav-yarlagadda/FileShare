'use client'
import React, { useState, useEffect } from 'react'

const FilePreview = ({ file }) => {
  const [fileUrl, setFileUrl] = useState(null)

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file)
      setFileUrl(url)

      // Cleanup function to revoke the object URL after the component is unmounted or the file changes
      return () => {
        // closure 
        URL.revokeObjectURL(url)
      }
    }
  }, [file])

  const renderPreview = () => {
    if (!file) return null

    const fileType = file.type.split('/')[0]

    switch (fileType) {
      case 'image':
        return (
          <img
            src={fileUrl}
            alt="File Preview"
            style={{scrollbarWidth:'none'}}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )
      case 'video':
        return (
          <video
            src={fileUrl}
            controls
            style={{scrollbarWidth:'none'}}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )
      case 'application':
        if (file.type.includes('pdf')) {
          return (
            <iframe
              src={fileUrl}
              title="File Preview"
              style={{scrollbarWidth:'none'}}
              className="w-full h-80 rounded-lg shadow-lg"
            />
          )
        }
        break
      case 'text':
        return <div className="whitespace-pre-wrap p-4 bg-gray-100 rounded-lg shadow-lg">{fileUrl}</div>
      default:
        return <p className="text-center text-gray-600">File preview not available</p>
    }
  }

  return (
    <div className="file-preview-container max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      {renderPreview()}
    </div>
  )
}

export default FilePreview
