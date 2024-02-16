import { useState } from 'react'
import './App.css'
import AddProject from './Components/AddProject'


export default function App() {

  const [project, setproject] = useState({
    selectedProjectId : undefined, 
    projects: []
  });

  function handleSelectedProject(id) {
    setproject(prevState => {
      return{
        ...prevState,
        selectedProjectId : id
      }
    })
  }
  
  function handleDelete(deleteItemId){
    setproject( (prevState)=> {

      return{
        ...prevState,
        selectedProjectId : undefined,
        projects : project.projects.filter(project => project.id !== deleteItemId),
      }
    })
  }

  function handleAdd(newData) {
    setproject(prevState => {
      const newProject = {
        ...newData,
        selectedProjectId : null, 
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })

  }
  console.log(project)


  return (
    <>
    

      <main >
        <AddProject addData={handleAdd}  />
      </main>

      <div className="flex justify-center m-10">
        <button onClick={() => handleDelete(project.selectedProjectId)} className=" text-center flex bg-red-700 hover:bg-red-600 px-2 font-semibold text-white border-red-800 border-2 hover:border-transparent rounded">
          Delete
        </button>
      </div>
      
      <div className="   px-2 m-2 flex flex-wrap	 self-center  ">
        
        {project.projects.map(item => {
          let c =' min-w-72 m-2 p-3 rounded-lg self-center '
          if(item.id === project.selectedProjectId){
            c+=' bg-slate-400'
          }
          else{
            c+=' bg-slate-600'
          }
          return(
            <div className={c} key={item.id} onClick={() => handleSelectedProject(item.id)  } >
              {() => handleDelete(item.id)}
            <h2 className=''>
              Title - {item.title} </h2>

            <p>Description -  {item.description} </p>
          </div>

          )}
        )}
      </div>


    </>
  )
}