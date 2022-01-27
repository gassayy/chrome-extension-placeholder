import { useState } from 'react'
import { ModalCss } from './dirty_css'
import { CloseButton, Form, Button } from 'react-bootstrap'
import { Modal as BsModal } from 'react-bootstrap'
interface DialogProps extends React.PropsWithChildren<{}> {
  setIsOpen: (open: boolean) => void
}

const Dialog = ({ setIsOpen }: DialogProps) => {
  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <BsModal.Dialog>
          <BsModal.Header>
            <BsModal.Title>Modal title</BsModal.Title>
          </BsModal.Header>

          <BsModal.Body>
            <p>Modal body text goes here.</p>
          </BsModal.Body>

          <BsModal.Footer>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Save changes
            </Button>
          </BsModal.Footer>
        </BsModal.Dialog>
      </div>
    </div>
  )
}

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <style>{ModalCss}</style>
      <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Dialog setIsOpen={setIsOpen} />}
    </div>
  )
}
