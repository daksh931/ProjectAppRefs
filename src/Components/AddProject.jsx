import { useRef } from 'react'
import Modal from './Modal';

export default function AddProject({ addData }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();

  function handleAdd() {
    const enteredTitle = title.current.value;
    // { console.log(enteredTitle) }
    const enteredDescription = description.current.value;
    

    //created a const ref-> modal = useRef()
    // now using it for conditional rendering as input is invalid
    if(
      enteredTitle.trim() ==='' ||
      enteredDescription.trim() ==='' 
    ){
      modal.current.open();
      return;
    }
    
    addData({
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription
    })
  }
  return (
    <>
    <Modal ref={modal} />

    <div className="flex self-center justify-center align-center mt-16">
      <div className="px-3 flex flex-col ">
        <label htmlFor="title" className="px-1 text-xl font-semibold">
          Title
        </label>
        <input
          ref={title}
          id="title"
          className=" px-2 border-2 border-black rounded-[6px]"
        />

        <label htmlFor="description" className="px-1 text-xl font-semibold">
          Description
        </label>
        <input
          ref={description}
          id="description"
          className=" px-2 border-2 border-black rounded-[6px]"
        />
        <div className='flex self-center  p-2'>
          <button onClick={handleAdd} class="  text-center flex bg-slate-600 hover:bg-slate-400 px-2 font-semibold text-white                        border-slate-500 border-2 hover:border-transparent rounded">
            Add Task
          </button>
        </div>
      </div>


    </div >
    </>
  )
}