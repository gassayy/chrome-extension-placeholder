import {
  Container,
  Row,
  Col,
  Stack,
  Modal,
  Button,
  Alert,
  Accordion,
  Badge,
  Breadcrumb,
  Card,
  Dropdown,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import type { display } from '@mui/system'

function AlertDismissibleExample() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

function ProfileBadge() {
  return (
    <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

function DefualtBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}

function ContextualVariationBadges() {
  return (
    <div>
      <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge> <Badge bg="success">Success</Badge>{' '}
      <Badge bg="danger">Danger</Badge>{' '}
      <Badge bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge bg="info">Info</Badge>{' '}
      <Badge bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge bg="dark">Dark</Badge>
    </div>
  )
}

function DefaultAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

function BasicCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

function BasicDropDownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

function BasicModelDialog() {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      {show && (
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  )
}

function MydModalWithGrid() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

// function ModalControlButton() {
//   const [modalShow, setModalShow] = useState(false)

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch modal with grid
//       </Button>

//       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   )
// }

function VerticalStack() {
  return (
    <Stack gap={3}>
      <div className="bg-light border">Stack First item</div>
      <div className="bg-light border">Stack Second item</div>
      <div className="bg-light border">Stack Third item</div>
    </Stack>
  )
}

export default function PlayGroup() {
  return (
    <Container>
      <Alert key="primary" variant="primary">
        This is a primary alert—check it out!
      </Alert>
      <ProfileBadge />
      <ContextualVariationBadges />
      <BasicModelDialog />
      <DefualtBreadcrumb />
      <AlertDismissibleExample />
      <MydModalWithGrid />
      <BasicDropDownMenu />
      <BasicCard />
      <DefaultAccordion />
    </Container>
  )
}
