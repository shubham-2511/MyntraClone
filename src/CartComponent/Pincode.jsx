import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import styles from "./address.module.css"
import { AuthContext } from '../Logincomponent/AuthContext';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};

export default function ModalUnstyledDemo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { address, setAddress, setFinalAddress } = React.useContext(AuthContext)
    const handleAddress = () => {
        setFinalAddress(address)
        setAddress("")


    }


    return (
        <div>
            <button type="button" onClick={handleOpen} className={styles.address_pincodeButton}>
                CHANGE ADDRESS
            </button>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <input style={{ height: "3em", width: "100%", margin: "12px" }} type="text" placeholder="Enter your Address" value={address} onChange={(e) => setAddress(e.currentTarget.value)}></input>
                    <br />
                    <button style={{ height: "3em", width: "100%", backgroundColor: "#ff3f6c", color: "white", border: "3px solid #ff3f6c", margin: "12px" }} onClick={handleAddress}>ADD ADDRESS</button>
                </Box>
            </StyledModal>
        </div>
    );
}
