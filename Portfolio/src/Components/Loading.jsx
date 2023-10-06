import React, { useEffect , useState} from 'react';

const Loading = () => {

    const [isLoading, setisLoading] = useState('');
    const [isinput, setisinput] = useState(false);

  const terminal = [
    "> npm create-react-app Portfolio",
    "> cd Portfolio",
    "> npm start",
    "Starting the development server...",
    "Compiled successfully!",
    "You can now view Portfolio in the browser.",
  ];

  const inputtype = (text , i) =>{
    if (i < text.length){
        document.querySelector('p').innerHTML += text[i];
        setTimeout(() => inputtype(text, i + 1), 50);
    }
  }

  const typewriter = (text, i, fnCallback) => {
    if (i < text.length) {
      if (text[i] === '\n') {
        document.querySelector('h1').innerHTML += '<br>';
      } else {
        document.querySelector('h1').innerHTML += text[i];
      }

      setTimeout(() => typewriter(text, i + 1, fnCallback), 50);
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  };

    const Check = () =>{
        if(isLoading === 'Y' || isLoading === 'y'){
            document.querySelector('.loading').style.display = 'none';
        }
        else
        {
            document.querySelector('input').value = '';
        }
    }

  useEffect(() => {
    typewriter(terminal.join('\n') + '\n', 0, () => {
      // Clear the text after typing is complete
      document.querySelector('.input').innerHTML += '<p></p>';
      setisinput(true);
      inputtype('Do you want to continue Y : ' , 0);
      return ;
    });
  }, []);

//   useEffect(() => {
//     if(isLoading === 'Y'){
//         document.querySelector('.loading').style.display = 'none';
//     }
//     else
//     {
//         document.querySelector('input').value = '';
//     }
//   }, [isLoading]);

  return (
    <div className='fixed loading h-screen text-left left-0 w-full flex bg-[#171717] z-10 top-0 justify-center items-center'>
      <div className='bg-[#222222] h-[50vh] w-[40vw] shadow-3xl rounded-lg'>
        <div className='bg-[#171717] h-[4vh] items-center flex gap-[1vh] p-2'>
          <div className='w-[1.5vh] h-[1.5vh] rounded-[50%] bg-yellow-500'></div>
          <div className='w-[1.5vh] h-[1.5vh] rounded-[50%] bg-red-500'></div>
          <div className='w-[1.5vh] h-[1.5vh] rounded-[50%] bg-green-500'></div>
        </div>
        <div className='mt-[2vh] p-2 font-semibold'>
          <h1></h1>
          <div className='input flex gap-[2vh] mt-[5vh]'>
            {
                isinput && <input type="text" className='border-none bg-[#222222] w-fit focus:outline-0' onChange={(e)=>setisLoading(e.target.value)} onKeyDown={()=>Check()}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
