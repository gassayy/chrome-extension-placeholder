import { ModalCss } from './dirty_css'

export type ModalProps = React.PropsWithChildren<{ isOpen: boolean; handleClose: () => void }>

export function Modal({ children, isOpen, handleClose }: ModalProps) {
  return (
    <div>
      <style>{ModalCss}</style>
      {isOpen && (
        <div>
          <div className="darkBG" onClick={handleClose} />
          <div className="centered">{children}</div>
        </div>
      )}
    </div>
  )
}
