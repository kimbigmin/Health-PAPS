import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import hp from './Hp';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StoreStateType } from '../types/store';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


function AlertManager() {
    const refBtn = useRef<HTMLButtonElement>(null);
    let { showAlertMessage, showAlertOptions } = useSelector((state: StoreStateType) => {
        return {
            showAlertMessage: state.view.showAlertMessage,
            showAlertOptions: state.view.showAlertOptions
        }
    })

    useEffect(() => {
        setTimeout(() => {
            refBtn.current?.focus();
        }, 100);
    }, [showAlertMessage]);

    return (
        <div>
            <Modal
                open={(showAlertMessage === '') ? false : true}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">
                    
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">{(showAlertOptions?.titleLabel) ? showAlertOptions?.titleLabel : ''}</h2>
                    <p id="parent-modal-description">
                        {showAlertMessage}
                    </p>

                    <Button ref={refBtn} onClick={() => {
                        // alert 종료 후 콜백
                        if (showAlertOptions?.closeHandler) {
                            showAlertOptions.closeHandler();
                        }
                        hp.alert('hide');
                    }}>{showAlertOptions.confirmLabel}</Button>
                </Box>
            </Modal>
            
        </div>
    );
}

export default AlertManager;