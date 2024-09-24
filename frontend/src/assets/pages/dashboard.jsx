export function Dashboard(){
    return(
        
        <div className="flex h-screen bg-gradient-to-r from-white  to-slate-800   flex-col  " >
           
            <div className="  flex bold justify-between  shadow-lg shadow-black border border-transparent hover:border-white">
                <div className="font-bold text-black text-2xl font-roboto p-4">Cash App</div>
                <div className="font-light text-black my-5 text-2xl font-roboto px-4">Greetings , Abhinav</div>
            </div>
            <div className="my-8 p-6 font-bold text-xl">Your Balance : Rs 5000</div>
            <div className="font-bold text-2xl px-6 ">Users</div>
            <input className=" px-6 mx-6 my-4 border border-slate-300 py-2 bg-gradient-to-r" placeholder="Search users...."></input>
            
              </div>
             

    )
}