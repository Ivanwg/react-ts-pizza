import ReactDOM from 'react-dom';
import './modal.scss';
import { useEffect, useRef, useState } from 'react';

interface IModalProps {
  children?: React.ReactNode;
  additionalFunc?: () => void;
}

function Modal({children, additionalFunc}: IModalProps) {

  const modalRoot = document.getElementById('modal');
  const ref = useRef<HTMLDivElement>(null);
  const btnCloseRef = useRef<HTMLButtonElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  function onClose() {
    additionalFunc?.();
  }

  useEffect(() => {
    setIsMounted(true);
  }, [])
  
  
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (isMounted && e.target instanceof Node && (!ref.current?.contains(e.target) || btnCloseRef.current?.contains(e.target))) {
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [isMounted, onClose]);


  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    (
      <div className='modal'>
        <div className='modal__content' ref={ref}>
          { children }
          <button className='modal__btn' ref={btnCloseRef}>
            <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z' fill='#D3D3D3'/>
              <path d='M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z' fill='#D3D3D3'/>
            </svg>
          </button>
        </div>
      </div>

    ), modalRoot
  );
}

export default Modal;