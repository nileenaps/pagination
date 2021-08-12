
import { useEffect,useState } from 'react';
import Users from './Users';
import { pagination } from './utils';
import './style.css';

function App() {

  const [users,setUsers]=useState([]);
  const [currentPage,setCurrentPage]=useState(0);
  const [pagedUsers,setPagedUsers]=useState([]);

  useEffect(()=>{
    const url=`https://api.github.com/users`;
    fetch(url)
      .then(response=>{
        if(response.status>=200 && response.status<=299)
       return  response.json();
       else
       throw new Error();
      })
      .then(data=>{
        setPagedUsers(pagination(data));
        console.log('useeff1')
       // setUsers(pagedUsers[currentPage]);
      }
        )
      .catch(err=>console.log(err));

  },[]);

  useEffect(()=>{
    if(pagedUsers.length!==0)
    setUsers(pagedUsers[currentPage]);
    console.log('useeff2')
  },[pagedUsers,currentPage]);

  const handleClick=i=>{
    setCurrentPage(i);

  }
  const handlePrev = () => {
    setCurrentPage((prevPage) => {
      let newPage;
      if (prevPage === 0)
        newPage = pagedUsers.length - 1;
      else
        newPage = prevPage - 1;
      return newPage;
    });
  }
  const handleNext = () => {
    setCurrentPage((prevPage) => {
      let newPage;
      if (prevPage === pagedUsers.length - 1)
        newPage =0 ;
      else
        newPage = prevPage + 1;
      return newPage;
    });
  }

  return (
    <>
       <h1>Pagination</h1>
       <div className="underline"></div>
       <Users  users={users}/>
       <div className="btn-section">
       <button className="prev-next" onClick={handlePrev}>Prev</button>  
       {pagedUsers.map((_,i)=>{
        return <button key={i} className={`btn ${i===currentPage?'active-btn':null}`} onClick={()=>handleClick(i)}>{i+1}</button>
       })}
       <button className="prev-next" onClick={handleNext}>Next</button>  
       </div>        
    </>
  );
}

export default App;
