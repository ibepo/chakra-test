import React from 'react'
import { Excalidraw } from '@excalidraw/excalidraw'

export default function Draw() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Excalidraw Example</h1>
      <div style={{ height: 800, width: 800 }}>
        <Excalidraw />
      </div>
    </>
  )
}
