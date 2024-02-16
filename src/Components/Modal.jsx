import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const Modal = forwardRef( function Modal({}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog}>

        <div className="flex justify-center mt-24">
        <div className="relative flex flex-col pt-24 max-w-96 bg-slate-200 hover:bg-slate-300 h-96 align text-[18px] text-center rounded-md p-2 border-2 border-slate-800 ">
        <button class=" absolute top-1 right-1 text-center w-20  bg-slate-600 hover:bg-slate-400 font-semibold text-white border-slate-500 border-2 hover:border-transparent rounded">
            Cancel 
          </button>
            <h2 className="text-xl"> Error</h2>
            <p> Enter the valid Data in input feild. </p>
            <p> Make sure Input fields are not empty!</p>
        </div>
        </div>
        </dialog>,document.getElementById('modal-root')
    );
})

export default Modal;