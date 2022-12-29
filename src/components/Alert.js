
import {
    AnimationType,
    DialogType,
    OutAnimationType,
    PopupProvider,
    usePopup,
    ToastPosition,
  } from 'react-custom-popup';
  import { render } from 'react-dom';
export const Alert = () => {

    const {showAlert} = usePopup();

    const buttonPressed = () => {

        showAlert({
            title: "Error",
            type: DialogType.WARNING,
            text: "A simple error alert"
        });

    }

    return (
        <>
            <button onClick={buttonPressed}>dddd</button>
            <div>dssdcnkcnlsnclsdncdldsnsclndsnl</div>
        </>
    );
}
