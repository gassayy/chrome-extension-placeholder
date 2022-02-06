import React, { PropsWithChildren, useState, MouseEvent, ChangeEvent } from 'react'
import { CloseButton, Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import browser from 'webextension-polyfill'
interface TikTokConnectionDialogProps {
  handleClose: () => void
}

export function TikTokConnectionDialog({ handleClose }: TikTokConnectionDialogProps) {
  const [userId, setUserId] = useState('')
  const handleSubmit = (event: MouseEvent) => {
    console.log('userId: ', userId)
    browser.runtime.sendMessage(browser.runtime.id, {
      service: 'storage',
      action: 'set',
      key: 'user-id',
      value: userId,
    })
    handleClose()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setUserId(event.target.value)
  }

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Please enter your tiktok username to connect with cyber metrix</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={userId}
              onChange={handleChange}
            />
          </InputGroup>
        </InputGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
