import { useState } from 'react'
import { ModalCss } from './dirty_css'

interface DialogProps extends React.PropsWithChildren<{}> {
  setIsOpen: (open: boolean) => void
}

const Dialog = ({ setIsOpen }: DialogProps) => {
  return (
    <div>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="MyModal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <div className="modalContent">Are you sure you want to delete the item?</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
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
