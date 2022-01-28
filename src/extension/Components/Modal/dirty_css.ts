export const ModalCss = `
/* @src/components/Modal.module.css */

.darkBG {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.centered {
  position: fixed;
  top: 20%;
  right: 5%;
  transform: translate(-50%, -50%);
}

.MyModal {
  width: 100%;
  height: 100%;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
}

.modalHeader {
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.heading {
  margin: 0;
  padding: 10px;
  color: #2c3e50;
}

.modalContent {
  padding: 10px;
  color: #2c3e50;
}

.modalActions {
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
}

.actionsContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.closeBtn {
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 12px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
}

.closeBtn:hover {
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  transform: translate(-4px, 4px);
}

.deleteBtn {
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;
}

.deleteBtn:hover {
  box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
  transform: translateY(-5px);
  background: #ff3e4e;
}

.cancelBtn {
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #fcfcfc;
  transition: all 0.25s ease;
}

.cancelBtn:hover {
  box-shadow: none;
  transform: none;
  background: whitesmoke;
}
  .primaryBtn {
    margin: 20px 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 13px 25px;
    border-radius: 15px;
    font-size: 0.8rem;
    border: none;
    color: white;
    background: #185adb;
    transition: all 0.25s ease;
  }
  
  .primaryBtn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
  }
`
